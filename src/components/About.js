import React from 'react'
import { Icon } from '@iconify/react'
import computer from '../images/computer.png'
import { Button, Container } from 'react-bootstrap'

const About = () => {
  return (
    <Container>
      <Container>
        <div className='text-white mt-60 mb-20' id='about'>
          <div className='flex place-content-between'>
            <div className='ml-10 mt-10'>
              <Icon
                icon='line-md:coffee-twotone-loop'
                className='inline text-white w-20 h-20 mx-0'
              />
              <h1 className='inline ml-10 md:inline tracking-tight md:tracking-normal'>
                Josh Claxton
              </h1>
              <p className='-mt-5 pt-10 text-xl text-left md:text-left'>
                I love to build beautifully functional websites.
                <br></br>
                Connect with me and let's make some magic!
              </p>
              <Button variant='success' className='inline'>
                Contact me!
              </Button>
            </div>

            <img
              className='max-w-md -mt-20  hidden lg:block'
              src={computer}
              alt='computer'
            ></img>
          </div>
          <span id='skills'></span>
          <Icon
            icon='bx:code-alt'
            className='content-center text-white w-20 h-20 mx-auto mt-80'
          />
          <h1 className='text-center'>Skills</h1>
        </div>
      </Container>
    </Container>
  )
}

export default About
