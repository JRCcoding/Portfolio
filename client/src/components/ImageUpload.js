import React, { useState } from 'react'

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageUrl, setImageUrl] = useState('')

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    setSelectedImage(file)
  }

  const handleUpload = () => {
    if (selectedImage) {
      const formData = new FormData()
      formData.append('file', selectedImage)

      fetch('/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          setImageUrl(data.imageUrl)
          setSelectedImage(null)
        })
        .catch((error) => {
          console.error('Error uploading image:', error)
        })
    }
  }

  return (
    <div>
      <input type='file' onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload Image</button>
      {imageUrl && <img src={imageUrl} alt='Uploaded' />}
    </div>
  )
}

export default ImageUpload
