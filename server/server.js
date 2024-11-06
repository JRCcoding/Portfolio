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
import WebSocket from 'ws'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

// https://res.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

dotenv.config()

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
DB()
app.use(cors())
app.use('/api/blogposts', blogRoutes)
// app.use('/upload')
const port = process.env.SERV_PORT || 8080

const firebaseConfig = {
  apiKey: 'AIzaSyDGCTbnxm0nYMYsW1l2uotYNfVurpB_5m4',
  authDomain: 'claxton-chat-app.firebaseapp.com',
  projectId: 'claxton-chat-app',
  storageBucket: 'claxton-chat-app.firebasestorage.app',
  messagingSenderId: '204913829902',
  appId: '1:204913829902:web:0c2febd9d0ae143694f45f',
  measurementId: 'G-DR8Z0NW0LS',
}

// Initialize Firebase
if (!firebase.getApps().length) {
  firebase.initializeApp(firebaseConfig)
}

const db = getFirestore()

const wss = new WebSocket.Server({ port })

wss.on('connection', function connection(ws) {
  console.log('Client connected')

  ws.on('message', async (messageData) => {
    const parsedData = JSON.parse(messageData)

    if (parsedData.type === 'joinRoom') {
      const { chatroom } = parsedData // Retrieve messages for the selected chatroom

      const messagesRef = collection(db, 'chatrooms', chatroom, 'messages') // Use chatroom here
      const q = query(messagesRef, orderBy('timestamp', 'asc'))
      onSnapshot(q, (snapshot) => {
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
        const { userName, message, selectedRoom } = parsedData // Store the message in the correct chatroom subcollection

        const messagesRef = collection(
          db,
          'chatrooms',
          selectedRoom,
          'messages'
        )
        const newMessageRef = doc(
          collection(db, 'chatrooms', selectedRoom, 'messages')
        )

        await setDoc(newMessageRef, {
          userName,
          message,
          timestamp: serverTimestamp(),
          chatroom: selectedRoom,
        }) // Broadcast the message

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

console.log(`Websocket server started on port ${port}`)

const PORT = process.env.PORT || 5000

const today = new Date()
const splitToday = JSON.stringify(today).split('-')
const year = splitToday[0]
const month = splitToday[1]
const day = splitToday[2].substring(0, 2)
const submitDate = month + '-' + day + '-' + year.substring(1, 5)
// Configure Cloudinary
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

// Set up multer middleware with the configured storage
const upload = multer({ dest: 'uploads/' })

app.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' })
  }

  try {
    // Upload the file to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path) // Retrieve the uploaded image URL

    const imageUrl = result.secure_url // Return the imageUrl in the response

    return res.json({ imageUrl })
  } catch (error) {
    console.error('Error uploading image:', error)
    return res.status(500).json({ message: 'Image upload failed' })
  } finally {
    // Remove the uploaded file from the server
    if (req.file.path) {
      fs.unlinkSync(req.file.path)
    }
  }
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
  })
}

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
