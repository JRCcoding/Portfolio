import axios from 'axios'
import React, { useState } from 'react'

const ImageUpload = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageUrl, setImageUrl] = useState('')

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    setSelectedImage(file)
  }

  const handleUpload = (event) => {
    event.preventDefault()

    if (selectedImage) {
      const formData = new FormData()
      formData.append('file', selectedImage)

      axios
        .post('/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          console.log(response.data)
          setImageUrl(response.data.imageUrl)
          onImageUpload(response.data.imageUrl) // Pass imageUrl to the parent component
        })
        .catch((error) => {
          console.error('Error uploading image:', error)
        })
    }
  }

  return (
    <form style={{ color: 'white' }}>
      <input type='file' onChange={handleImageChange} />
      <button onClick={(event) => handleUpload(event)}>Upload Image</button>
      {imageUrl && imageUrl && (
        <div>
          <p>Image uploaded:</p>
          <img
            src={imageUrl}
            alt='Uploaded'
            style={{
              height: '50%',
              width: '50%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
        </div>
      )}
    </form>
  )
}

export default ImageUpload
