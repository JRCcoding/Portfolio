import React from 'react'
import { Container } from 'react-bootstrap'
import consultation from '../images/consultation.jpg'

const Personal = ({ isMobile }) => {
  return (
    <Container>
      <div>
        <div
          className='flex flex-column mt-40 animate__animated animate__fadeInLeft'
          style={{
            marginBottom: '15%',
            textAlign: 'center',
            color: '#F3EFF5',
          }}
        >
          <p className='about_text mb-2' style={{ marginTop: '-90px' }}>
            <span
              style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: 34 }}
            >
              Empowering Small Businesses with Stunning Websites
            </span>
            <br />
            <br />
            &nbsp;We specialize in crafting beautiful, functional websites that
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
              - Free Consultation -
            </span>{' '}
            <img
              src={consultation}
              alt='Free Consultation'
              style={{
                width: 'auto',
                maxHeight: 350,
                borderRadius: 5,
                border: '2px solid #72b01d',
                marginLeft: 'auto',
                marginRight: 'auto',
                boxShadow: '3px 5px 10px rgb(115, 108, 100)',
              }}
            />
            <br />
            Contact us below to get started in the right direction!
          </p>
        </div>
      </div>
    </Container>
  )
}

export default Personal
