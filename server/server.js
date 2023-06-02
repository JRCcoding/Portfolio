import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
// import fs from 'fs'
// import multer from 'multer'
import cloudinary from 'cloudinary'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import DB from './db.js'
import blogRoutes from './Routes/blogRoutes.js'
cloudinary.config({
  cloud_name: 'dkarlgvva',
  api_key: '996256143699211',
  api_secret: '-00AoMnJ4tGQl1z9xi6ytMaS2lg',
})
// Upload

const res = cloudinary.uploader.upload(
  'https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg',
  { public_id: 'olympic_flag' }
)

res
  .then((data) => {
    console.log(data)
    console.log(data.secure_url)
  })
  .catch((err) => {
    console.log(err)
  })

// Generate
const url = cloudinary.url('olympic_flag', {
  width: 100,
  height: 150,
  Crop: 'fill',
})

// The output url
console.log(url)
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

const PORT = process.env.PORT || 5000

const today = new Date()
const splitToday = JSON.stringify(today).split('-')
const year = splitToday[0]
const month = splitToday[1]
const day = splitToday[2].substring(0, 2)
const submitDate = month + '-' + day + '-' + year.substring(1, 5)
//    ALL FOR MULTER
// const fileType = (str) => {
//   str.slice(str.lastIndexOf('.'))
// }
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'client/public/images')
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${submitDate}.jpg`)
//   },
// })
// const upload = multer({ storage: storage })
// app.use('/api/images', express.static('images'))
// app.get('/images', (req, res) => {
// do a bunch of if statements to make sure the user is
// authorized to view this image, then
//   const imageName = `${submitDate}.jpg`
//   const readStream = fs.createReadStream(`images/${imageName}`)
//   readStream.pipe(res)
// })
// app.post('/api/images', upload.single('image'), (req, res) => {
//   const imageName = `${submitDate}.jpg`
//   const description = req.body.description

//   // Save this data to a database probably

//   console.log(description, imageName)
//   res.send({ description, imageName })
// })

// app.delete('/api/images/delete', (req, res) => {
//   const { fileName } = req.query

//   // Delete the image file
//   fs.unlink(`client/public/images/${fileName}`, (error) => {
//     if (error) {
//       console.error(error)
//     }
//   })
//   console.log(req.body)
// })

app.post('/upload', (req, res) => {
  // Handle the image upload and save it
  // Generate a URL for the uploaded image
  const imageUrl = 'https://example.com/path/to/uploaded/image.jpg'

  res.json({ imageUrl })
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
  })
}

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan
  )
)
