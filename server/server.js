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

const PORT = 5050

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
    const result = await cloudinary.uploader.upload(req.file.path)

    // Retrieve the uploaded image URL
    const imageUrl = result.secure_url

    // Return the imageUrl in the response
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
