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
          <h1 className='scale-150 mx-auto -mt-20 text-[rgb(0,175,145)]'>
            Josh Claxton
          </h1>
          <p className='text-white text-2xl sm:col-2 mx-auto text-center'>
            I am a Web Developer, Graphic Designer, father of 3 beautiful
            children, and husband to the best wife in the world.
          </p>
          <p className='text-white text-xl sm:col-2 lg:ml-20 lg:mr-40 sm:mx-10'>
            I don't usually say too much about myself but will be sure to fill
            you all in with more information soon!
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Personal
