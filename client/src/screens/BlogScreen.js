import { Icon } from '@iconify/react'
import axios from 'axios'
import parse from 'html-react-parser'
import React, { useEffect, useState } from 'react'
import '../styles/Blog.css'
const Blog = () => {
  const [blogposts, setBlogposts] = useState()
  useEffect(() => {
    const fetchBlogposts = async () => {
      const { data } = await axios.get(
        'https://portfolio-ngtb.onrender.com/api/blogposts'
      )

      setBlogposts(data)
    }
    fetchBlogposts()
  }, [])
  return (
    <div id='blog' style={{ height: '100vh' }}>
      <Icon
        icon='bx:code-alt'
        className='content-center  w-20 h-20 mx-auto mt-40 ml-0'
        id='blog'
      />{' '}
      <h1 className='text-center text-3xl animate__animated animate__fadeInLeft'>
        Blog
      </h1>
      <div
        className='main-container  animate__animated animate__fadeInRight'
        style={{ marginTop: '5%', padding: '5%' }}
      >
        {/* <h2
          className='text-center'
          style={{ textShadow: '0px 0px 10px rgb(0,190,160)' }}
        >
          Recent Blogs
        </h2> */}
        {blogposts &&
          blogposts
            .slice(0)
            .reverse()
            .map((blogpost) => (
              <a
                href={`/blogposts/${blogpost._id}`}
                className='nav-link'
                key={blogpost.title}
              >
                <div>
                  <h5>{blogpost.date}</h5>
                  <h4 style={{ display: 'inline', fontWeight: 'bold' }}>
                    {blogpost.title}
                  </h4>
                  <div
                    style={{
                      display: 'inline',
                      // position: 'absolute',
                      // right: '7%',
                      float: 'right',
                    }}
                  >
                    <img
                      src={blogpost.submitUserImage}
                      alt={blogpost.submitUser}
                      style={{
                        height: '40px',
                        borderRadius: '20%',
                        display: 'inline',
                      }}
                    />
                  </div>

                  <h6>{parse(blogpost.body.substring(0, 100))}...</h6>
                  {blogpost.uploadedImageUrl && (
                    <img
                      src={blogpost.uploadedImageUrl}
                      alt={blogpost.title}
                      style={{
                        height: '75px',
                        width: 'auto',
                        marginBottom: '2.5%',
                        marginTop: '1.5%',
                      }}
                    />
                  )}
                  <hr />
                </div>
              </a>
            ))}
      </div>
    </div>
  )
}

export default Blog
