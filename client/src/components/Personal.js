import React from 'react'
// import { Icon } from '@iconify/react'
import { Container } from 'react-bootstrap'
import face from '../images/face.png'

const Personal = () => {
  return (
    <Container>
      <div>
        {/* <Icon
          icon='bx:code-alt'
          className='content-center text-white w-20 h-20 mx-auto ml-0'
          id='personal'
        />{' '} */}
        {/* <h1 className='text-center text-white'>About</h1> */}
        <div className='flex flex-wrap mt-40'>
          <img
            src={face}
            alt='Josh Claxton'
            className='-mt-40 mb-40 mx-auto'
            id='about'
          ></img>
          <h1 className='text-5xl lg:text-8xl sm:mx-auto lg:mr-60 -mt-20 lg:-mt-40  text-[rgb(0,175,145)]'>
            Web Developer
          </h1>
          <p className='text-white text-2xl sm:col-2 mx-auto indent-10'>
            <pre className='inline'>I am a </pre>software engineer, father of 3
            beautiful children, and husband to the best wife in the world.
          </p>
          <br />
          <p className='text-white text-2xl sm:col-2 mx-auto indent-10 mb-20'>
            I love building beautifully functional websites and web
            applications. I enjoy solving the problems that everyone else has
            issues figuring out. I like making things work, even if they are
            very complicated.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Personal
