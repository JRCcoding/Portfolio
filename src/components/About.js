import React from 'react'
import { Icon } from '@iconify/react'
import computer from '../images/computer.png'
// import { Container } from 'react-bootstrap'
import 'animate.css'

const About = () => {
  return (
    <div
      className='text-white mt-20 lg:mt-60 animate__animated animate__fadeIn'
      id='about'
    >
      <div className='flex sm:flex-col-reverse lg:flex-row md:ml-60 lg:ml-0'>
        <div className='mt-10 mx-10 lg:mx-80'>
          <Icon
            // icon='line-md:coffee-twotone-loop'
            icon='logos:create-react-app'
            className='inline text-white w-20 h-20 mx-0'
          />
          <h1 className='inline ml-10 lg:text-4xl tracking-tight md:tracking-normal'>
            J. Claxton
          </h1>
          <p className='-mt-5 pt-10 text-xl text-left md:text-left mb-80'>
            I love to build beautifully functional websites.
            <br></br>
            Connect with me and let's make some magic!
          </p>
          {/* <Button variant='success' className='inline'>
              Contact me!
            </Button> ALSO WILL HAVE TO BRING IMPORT FOR BUTTON BACK WITH REACT-BS*/}
        </div>

        <img
          className='max-w-md mt-20 lg:mt-0 sm:-mt-10'
          src={computer}
          alt='computer'
        ></img>
      </div>
      {/* <span id='skills'></span> */}
      <Icon
        icon='bx:code-alt'
        className='content-center text-white w-20 h-20 mx-auto mt-80 ml-0'
        id='skills'
      />{' '}
      <h1 className='text-center'>Skills</h1>
    </div>
  )
}

export default About
