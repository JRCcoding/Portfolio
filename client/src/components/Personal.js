import React from 'react'
// import { Icon } from '@iconify/react'
import { Container } from 'react-bootstrap'
// import face from '../images/face.png'

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
        <div className='flex flex-column mt-40'>
          {/* <img
            src={face}
            alt='Josh Claxton'
            className='-mt-40 mb-40 mx-auto'
            id='about'
          ></img> */}
          <p className='webdeveloper text-[rgb(0,175,145)]'>Web Developer</p>
          <p className='about_text'>
            I am a <pre className='inline'>&lt;SoftwareEngineer&#47;&gt;</pre>,
            Web Developer, Father. I love building beautifully functional
            websites and web applications. I enjoy solving the problems that
            everyone else has issues figuring out. I like making things work.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Personal
