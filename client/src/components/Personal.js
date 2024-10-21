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
          <p className='webdeveloper' style={{ color: 'white' }}>
            Claxton Software
          </p>
          <p className='about_text'>
            We are <pre className='inline'>&lt;SoftwareEngineers&#47;&gt;</pre>.
            This is a broad term, but we use code as our tool to build anything
            you can think of.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Personal
