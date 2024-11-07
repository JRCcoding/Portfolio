import bodyParser from 'body-parser'
import cloudinary from 'cloudinary'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import fs from 'fs'
import multer from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import blogRoutes from './Routes/blogRoutes.js'
import DB from './db.js'
import WebSocket, { WebSocketServer } from 'ws'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

// Get the current directory
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

dotenv.config()

const app = express()

// Middleware
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true })) // Set extended option
app.use(bodyParser.json())
DB()
app.use(cors())
app.use('/api/blogposts', blogRoutes)

const port = process.env.SERV_PORT || 8080

// Firebase config and initialization
const firebaseConfig = {
  apiKey: 'AIzaSyDGCTbnxm0nYMYsW1l2uotYNfVurpB_5m4',
  authDomain: 'claxton-chat-app.firebaseapp.com',
  projectId: 'claxton-chat-app',
  storageBucket: 'claxton-chat-app.firebasestorage.app',
  messagingSenderId: '204913829902',
  appId: '1:204913829902:web:0c2febd9d0ae143694f45f',
  measurementId: 'G-DR8Z0NW0LS',
}

// Initialize Firebase only if not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()

// WebSocket server
const wss = new WebSocketServer({ port }) // Initialize WebSocket server on specified port

wss.on('connection', function connection(ws) {
  console.log('Client connected')

  ws.on('message', async (messageData) => {
    const parsedData = JSON.parse(messageData)

    if (parsedData.type === 'joinRoom') {
      const { chatroom } = parsedData // Retrieve messages for the selected chatroom

      const messagesRef = db
        .collection('chatrooms')
        .doc(chatroom)
        .collection('messages')
      const q = messagesRef.orderBy('timestamp', 'asc') // Query messages ordered by timestamp

      // Listen to messages in the selected chatroom
      q.onSnapshot((snapshot) => {
        const messageArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        ws.send(
          JSON.stringify({
            type: 'pastMessages',
            messages: messageArray,
            chatroom: chatroom,
          })
        )
      })
    } else {
      try {
        const { userName, message, selectedRoom } = parsedData // Store the message in the selected room

        const newMessageRef = db
          .collection('chatrooms')
          .doc(selectedRoom)
          .collection('messages')
          .doc()

        await newMessageRef.set({
          userName,
          message,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          chatroom: selectedRoom,
        })

        // Broadcast the message to all clients
        wss.clients.forEach(function each(client) {
          if (client.readyState === WebSocket.OPEN) {
            client.send(
              JSON.stringify({ userName, message, chatroom: selectedRoom })
            )
          }
        })
      } catch (error) {
        console.error('Failed to handle message:', error)
      }
    }
  })

  ws.on('close', function close() {
    console.log('Client disconnected')
  })
})

console.log(`WebSocket server started on port ${port}`)
// Cloudinary configuration
cloudinary.config({
  cloud_name: 'dkarlgvva',
  api_key: '996256143699211',
  api_secret: '-00AoMnJ4tGQl1z9xi6ytMaS2lg',
})

// Set up multer storage using Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  folder: 'uploads',
  allowedFormats: ['jpg', 'png', 'jpeg'],
  transformation: [{ width: 500, height: 500, crop: 'limit' }],
})

// Set up multer middleware
const upload = multer({ storage }) // Using Cloudinary storage directly

// File upload route
app.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' })
  }

  try {
    const result = await cloudinary.uploader.upload(req.file.path)
    const imageUrl = result.secure_url // Retrieve the image URL from Cloudinary

    return res.json({ imageUrl })
  } catch (error) {
    console.error('Error uploading image:', error)
    return res.status(500).json({ message: 'Image upload failed' })
  } finally {
    // Clean up the file from local storage
    if (req.file.path) {
      fs.unlinkSync(req.file.path)
    }
  }
})

// Serve static files for production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})
