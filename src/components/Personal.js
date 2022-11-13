import React from 'react'
import { Icon } from '@iconify/react'
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
            ></img>
          </Rotate>
          <p className='text-white text-xl col-4'>
            <strong className='text-2xl'>Josh Claxton - </strong>I am a Web
            Developer, Graphic Designer, father of 3 beautiful children, and
            husband to the best wife in the world.
          </p>
          <p className='text-white text-xl col-4 ml-20'>
            I don't usually say too much about myself but will be sure to fill
            you all in with more information soon!
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Personal
