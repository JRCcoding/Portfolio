import React from 'react'

import { Icon } from '@iconify/react'
// import computer from '../images/computer.png'
import Button from 'react-bootstrap/Button'

const About = () => {
  return (
    <div className='mb-20 pt-20 mx-20 md:mx-60 xl:mx-80 text-white' id='about'>
      <Icon
        icon='line-md:coffee-twotone-loop'
        className='inline text-white w-20 h-20  mb-5'
      />
      <h1 className='inline md:pt-4 tracking-tight md:tracking-normal'>
        Josh Claxton
      </h1>
      <p className='-mt-5 text-lg'>
        I love to build beautifully functional websites and applications.
        <br></br>
        Connect with me and let's make some magic!
      </p>
      <Button variant='success' className='inline'>
        Contact me!
      </Button>

      {/* <img
        className='w-50 h-50  absolute right-0 xl:top-10 lg:right-0 top-60 xl:right-10 '
        src={computer}
        alt='computer'
      ></img> */}

      <Icon
        icon='bx:code-alt'
        className='block text-white w-20 h-20 mx-auto mt-40'
      />
      <h1 className='text-center'>Skills</h1>
    </div>
  )
}

export default About
