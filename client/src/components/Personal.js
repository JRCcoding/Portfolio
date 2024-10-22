import React from 'react'
// import { Icon } from '@iconify/react'
import { Container } from 'react-bootstrap'
// import face from '../images/face.png'

const Personal = () => {
  return (
    <Container>
      <div>
        <div
          className='flex flex-column mt-40'
          style={{ marginBottom: '50%', textAlign: 'center' }}
        >
          <p className='about_text mb-2' style={{ marginTop: '-90px' }}>
            WE ARE <pre className='inline'>&lt;SoftwareEngineers&#47;&gt;</pre>
            &nbsp;who specialize in crafting beautiful, functional websites that
            help small businesses thrive online. We're passionate about
            empowering small businesses with the digital tools they need to
            succeed. We're always exploring new ways to help businesses grow, so
            stay tuned for exciting developments!
            <br />
            Contact us below to get started in the right direction!
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Personal
