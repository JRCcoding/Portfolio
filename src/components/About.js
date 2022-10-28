import React from 'react'
import { Icon } from '@iconify/react'
import computer from '../images/computer.png'
// import { Container } from 'react-bootstrap'

const About = () => {
  return (
    <div className='text-white mt-20 lg:mt-60' id='about'>
      <div className='flex sm:flex-col lg:flex-row'>
        <div className='mt-10 mx-10 lg:mx-80'>
          <Icon
            icon='line-md:coffee-twotone-loop'
            className='inline text-white w-20 h-20 mx-0'
          />
          <h1 className='inline ml-10 lg:text-4xl md:inline tracking-tight md:tracking-normal'>
            Josh Claxton
          </h1>
          <p className='-mt-5 pt-10 text-xl text-left md:text-left'>
            I love to build beautifully functional websites.
            <br></br>
            Connect with me and let's make some magic!
          </p>
          {/* <Button variant='success' className='inline'>
              Contact me!
            </Button> ALSO WILL HAVE TO BRING IMPORT FOR BUTTON BACK WITH REACT-BS*/}
        </div>

        <img
          className='max-w-md mt-20 lg:mt-0'
          src={computer}
          alt='computer'
        ></img>
      </div>
      {/* <span id='skills'></span> */}
      <Icon
        icon='bx:code-alt'
        className='content-center text-white w-20 h-20 mx-auto mt-80'
        id='skills'
      />{' '}
      <h1 className='text-center'>Skills</h1>
    </div>
  )
}

export default About
