import React from 'react'
// import { Icon } from '@iconify/react'
import face from '../images/face.png'
import { Container } from 'react-bootstrap'
import Rotate from 'react-reveal/Rotate'

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
          <Rotate top left>
            <img
              src={face}
              alt='Josh Claxton'
              className='-mt-40 mb-40 mx-auto'
              id='about'
            ></img>
          </Rotate>
          <h1 className='scale-150 sm:mx-auto lg:mr-60 -mt-20 lg:mt-5 text-[rgb(0,175,145)]'>
            Josh Claxton
          </h1>
          <p className='text-white text-2xl sm:col-2 mx-auto text-center'>
            I am a Web Developer, Graphic Designer, father of 3 beautiful
            children, and husband to the best wife in the world.
          </p>
          <p className='text-white text-xl sm:col-2 lg:ml-20 lg:mr-40 sm:mx-10'>
            I love building beautifully functional websites and web
            applications. I enjoy solving the problems that everyone else has
            issues figuring out. I like making things work, even if they are
            very complicated.
          </p>
          <p className='text-white text-xl sm:col-2 lg:ml-20 lg:mr-40 sm:mx-10'>
            Creating websites is my passion, but I also love graphic design.
            I've done a lot of practicing in Adobe's Photoshop and Illustrator.
          </p>
          <p className='text-white text-xl sm:col-2 lg:ml-20 lg:mr-40 sm:mx-10'>
            I've created logos and branding for small businesses, and I've
            gotten their new brand set up on a beautiful website to show the
            world and attract more customers. I have taught friends and family
            how to code and how to make things work in the programming world.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Personal
