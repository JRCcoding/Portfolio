import axios from 'axios'
import parse from 'html-react-parser'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/Blog.css'

const BlogpostScreen = () => {
  const [blogpost, setBlogpost] = useState()
  const { id } = useParams()
  useEffect(() => {
    const fetchBlogpost = async () => {
      const { data } = await axios
        .get(`/api/blogposts/${id}`)
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          } else if (error.request) {
            console.log(error.request)
          } else {
            console.log(`Error ${error.message}`)
          }
          console.log(error.config)
        })
      setBlogpost(data)
    }
    fetchBlogpost()
  }, [])
  //   const deleteImage = async () => {
  //     try {
  //       // Send an HTTP DELETE request to the server-side endpoint
  //       const response = await axios.delete(`/api/images/delete`, {
  //         params: {
  //           fileName: blogpost.upload.imageName, // Replace with the actual image file name
  //         },
  //       })
  //       console.log(response.data)
  //       response.send(response.data) // Optional: Handle the response
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }

  //   const deleteHandler = async () => {
  //     await axios
  //       .delete(`/api/blogposts/${id}/delete`)
  //       .then((response) => {
  //         console.log('Status: ', response.status)
  //         console.log('Deleted Data: ', response.data)
  //         if (blogpost.upload.description !== '') {
  //           deleteImage()
  //         }
  //         navigate('/')
  //       })
  //       .catch((error) => {
  //         console.log('Something went wrong!', error)
  //       })
  //   }
  return (
    <div>
      {blogpost && blogpost && (
        <div
          className='main-container'
          style={{ marginTop: '5%', padding: '5%', minHeight: '100vh' }}
        >
          <h1 style={{ display: 'inline' }}>{blogpost.title}</h1>
          <strong style={{ display: 'inline', float: 'right' }}>
            {blogpost.date}
          </strong>
          <br />

          <sub>
            &nbsp;&nbsp; - by Josh Claxton &nbsp; &nbsp;
            <img
              src={blogpost.submitUserImage}
              alt={blogpost.submitUser}
              style={{ height: '40px', borderRadius: '20%', display: 'inline' }}
            />
          </sub>
          <br />
          <br />
          <div style={{ textIndent: '15px', wordWrap: 'break-word' }}>
            {blogpost && (
              <>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <img
                    src={blogpost.uploadedImageUrl}
                    alt={blogpost.uploadedImageUrl}
                    style={{
                      width: '460px',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}
                  />
                  <strong
                    style={{
                      width: '95%',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      textAlign: 'center',
                    }}
                  >
                    <i>{blogpost.uploadedDescription}</i>
                  </strong>
                </div>
              </>
            )}
            <div
              style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto' }}
            >
              {parse(blogpost.body)}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BlogpostScreen
