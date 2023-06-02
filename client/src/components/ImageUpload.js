import React, { useState } from 'react'

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageUpload = async () => {
    try {
      const response = await fetch(
        'https://accounts.google.com/o/oauth2/auth?' +
          '198879685170-2s6as07mbs4fnh6qqd5gfik4d6hibsf7.apps.googleusercontent.com ' +
          '&redirect_uri=http://localhost:3000/admin/new' +
          '&response_type=code' +
          '&scope=https://www.googleapis.com/auth/photoslibrary'
      )

      if (response.ok) {
        // Redirect the user to the authentication URL
        window.location.href = response.url
      } else {
        console.log('Error initiating authentication:', response.statusText)
      }
    } catch (error) {
      console.log('Error initiating authentication:', error)
    }
  }

  const handleImageSelect = (event) => {
    const file = event.target.files[0]
    setSelectedImage(file)
  }

  return (
    <div>
      <input type='file' onChange={handleImageSelect} />
      <button onClick={handleImageUpload}>Upload Image</button>
    </div>
  )
}

export default ImageUpload
