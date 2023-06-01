import { Icon } from '@iconify/react'
import axios from 'axios'
import parse from 'html-react-parser'
import React, { useEffect, useState } from 'react'
import '../styles/Blog.css'
const Blog = () => {
  const [blogposts, setBlogposts] = useState()
  useEffect(() => {
    const fetchBlogposts = async () => {
      const { data } = await axios.get('/api/blogposts')

      setBlogposts(data)
    }
    fetchBlogposts()
  }, [])
  return (
    <div id='blog' style={{ height: '100vh' }}>
      <Icon
        icon='bx:code-alt'
        className='content-center text-white w-20 h-20 mx-auto mt-40 ml-0'
        id='blog'
      />{' '}
      <h1 className='text-center text-3xl text-white'>Blog</h1>
      <div
        className='main-container'
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
                  <h4 style={{ display: 'inline' }}>{blogpost.title}</h4>
                  <div
                    style={{
                      display: 'inline',
                      // position: 'absolute',
                      // right: '7%',
                      float: 'right',
                    }}
                  >
                    {/* <img
              src={blogpost.submitUserImage}
              alt={blogpost.submitUser}
              style={{ height: '60px', borderRadius: '50%' }}
            /> */}
                    <strong>- {blogpost.submitUser}</strong>
                  </div>

                  <h6>{parse(blogpost.body.substring(0, 100))}...</h6>
                  <hr />
                </div>
              </a>
            ))}
      </div>
    </div>
  )
}

export default Blog
