import axios from 'axios'
import React, { useState } from 'react'
const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [accessToken, setAccessToken] = useState(null)

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const handleLogin = () => {
    const clientId =
      '198879685170-2s6as07mbs4fnh6qqd5gfik4d6hibsf7.apps.googleusercontent.com'

    // Redirect the user to the Google authorization URL
    window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=http://localhost:3000/admin/new&response_type=code&scope=https://www.googleapis.com/auth/photoslibrary`
  }

  const exchangeCodeForToken = async (code) => {
    try {
      const response = await axios.post(
        'https://www.googleapis.com/oauth2/v4/token',
        {
          client_id:
            '198879685170-2s6as07mbs4fnh6qqd5gfik4d6hibsf7.apps.googleusercontent.com',
          client_secret: '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',
          redirect_uri: 'http://localhost:3000/admin/new',
        }
      )

      setAccessToken(response.data.access_token)
    } catch (error) {
      console.error('Error exchanging code for token:', error)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!accessToken) {
      console.error('Access token not available. Please log in first.')
      return
    }

    const formData = new FormData()
    formData.append('file', selectedFile)

    try {
      const response = await axios.post(
        'https://photoslibrary.googleapis.com/v1/uploads',
        formData,
        {
          headers: {
            'Content-Type': 'application/octet-stream',
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )

      // Use the response data to store or display the uploaded image on a separate component
      const uploadedImage = response.data

      // Pass the uploaded image data to the parent component or store it in state
      // for displaying on a separate component
      // ...
    } catch (error) {
      console.error('Error uploading image:', error)
    }
  }

  // Check if the current URL contains the authorization code after the user is redirected back from Google
  const urlParams = new URLSearchParams(window.location.search)
  const authorizationCode = urlParams.get('code')
  if (authorizationCode) {
    // Call the function to exchange the code for an access token
    exchangeCodeForToken(authorizationCode)
  }

  return (
    <div>
      {accessToken ? (
        <form onSubmit={handleSubmit}>
          <input type='file' onChange={handleFileChange} />
          <button type='submit'>Upload</button>
        </form>
      ) : (
        <button onClick={handleLogin} style={{ color: 'white', width: '100%' }}>
          Login with Google to upload image
        </button>
      )}
    </div>
  )
}

export default ImageUpload
