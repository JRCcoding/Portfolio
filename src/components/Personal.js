import React from 'react'
import { Icon } from '@iconify/react'
import face from '../face.png'
import { Container } from 'react-bootstrap'

const Personal = () => {
  return (
    <Container>
      <div>
        <Icon
          icon='bx:code-alt'
          className='content-center text-white w-20 h-20 mx-auto mt-80 ml-0'
          id='personal'
        />{' '}
        <h1 className='text-center text-white'>About</h1>
        <div className='flex flex-wrap mt-10'>
          <img src={face} alt='Josh Claxton' className='-mt-10'></img>
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
