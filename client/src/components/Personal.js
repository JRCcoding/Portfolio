import React from 'react'
import { Container } from 'react-bootstrap'

const Personal = () => {
  return (
    <Container>
      <div>
        <div
          className='flex flex-column mt-40 animate__animated animate__fadeInLeft'
          style={{ marginBottom: '15%', textAlign: 'center' }}
        >
          <p className='about_text mb-2' style={{ marginTop: '-90px' }}>
            <span style={{ fontSize: 35, fontWeight: 'bold' }}>
              WE ARE{' '}
              <pre className='inline' style={{ color: '#007bff ' }}>
                &lt;SoftwareEngineers&#47;&gt;
              </pre>
            </span>
            &nbsp;who specialize in crafting beautiful, functional websites that
            help small businesses thrive online. We're passionate about
            empowering small businesses with the digital tools they need to
            succeed.
          </p>
          <p className='about_text mb-2 mt-10'>
            We're always exploring new ways to help businesses grow, so stay
            tuned for exciting developments!
          </p>
          <p className='about_text mb-10 mt-10'>
            <span style={{ fontSize: 28, fontWeight: 'bold' }}>
              Contact us below
            </span>{' '}
            to get started in the right direction!
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Personal
