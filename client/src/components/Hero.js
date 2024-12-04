import React, { useRef, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import consultation from '../images/consultation.jpg'
import lnc from '../images/lnc_ss_2.png'
import kaitlyn from '../images/kaitlyn.png'
import nolimit from '../images/nolimit.png'
import {
  FaArrowCircleDown,
  FaArrowCircleLeft,
  FaArrowCircleRight,
} from 'react-icons/fa'

const Personal = ({ isMobile }) => {
  const imageContainerRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (imageContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          imageContainerRef.current
        setShowLeftArrow(scrollLeft > 0)
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth)
      }
    }

    if (imageContainerRef.current) {
      imageContainerRef.current.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (imageContainerRef.current) {
        imageContainerRef.current.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const scrollLeft = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollTo({
        left: imageContainerRef.current.scrollLeft - 300, // Adjust scroll amount as needed
        behavior: 'smooth',
      })
    }
  }

  const scrollRight = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollTo({
        left: imageContainerRef.current.scrollLeft + 300, // Adjust scroll amount as needed
        behavior: 'smooth',
      })
    }
  }

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
          <div style={{ position: 'relative' }}>
            {showLeftArrow && (
              <button
                onClick={scrollLeft}
                style={{
                  position: 'absolute',
                  left: '10px', // Adjust as needed
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 1, // Ensure it's above the images
                }}
              >
                <FaArrowCircleLeft style={{ color: 'white', fontSize: 30 }} />
              </button>
            )}
            <div
              ref={imageContainerRef}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '100%',
                marginLeft: 0,
                marginRight: 0,
                overflowX: 'auto',
                whiteSpace: 'nowrap',
                gap: 15,
                overflow: 'hidden',
              }}
            >
              <img
                src={lnc}
                alt='Lauryns Next-door Cottage Website'
                style={{ maxHeight: isMobile ? 150 : 250 }}
              />
              <img
                src={kaitlyn}
                alt='Kaitlyns Esthetician Website'
                style={{ maxHeight: isMobile ? 150 : 250 }}
              />
              <img
                src={nolimit}
                alt='No Limit Fitness Website'
                style={{ maxHeight: isMobile ? 150 : 250 }}
              />
            </div>
            {showRightArrow && (
              <button
                onClick={scrollRight}
                style={{
                  position: 'absolute',
                  right: '10px', // Adjust as needed
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 1, // Ensure it's above the images
                }}
              >
                <FaArrowCircleRight style={{ color: 'white', fontSize: 30 }} />
              </button>
            )}
          </div>
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
          <a href='#contact'>
            <FaArrowCircleDown
              style={{
                color: '#72b01d',
                marginLeft: 'auto',
                marginRight: 'auto',
                fontSize: 50,
              }}
            />
          </a>
        </div>
      </div>
    </Container>
  )
}

export default Personal
