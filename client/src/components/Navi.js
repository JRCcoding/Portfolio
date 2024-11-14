import { Icon } from '@iconify/react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
} from 'mdb-react-ui-kit'
import React from 'react'
import { Link } from 'react-router-dom'

export default function App({ isMobile }) {
  return (
    <MDBNavbar
      class='fixed-top'
      style={{
        borderBottom: '1px solid #007bff',
        display: 'fixed',
        background: 'black',
        opacity: '75%',
      }}
    >
      <MDBContainer fluid>
        <MDBNavbarNav
          className='text-lg flex text-offwhite flex-row justify-center '
          style={{ width: '100%', alignItems: 'center' }}
        >
          <Link to='/' style={{ marginRight: 'auto' }} className='link-hover'>
            <p
              style={{
                fontSize: isMobile ? 30 : 50,
                margin: isMobile ? 5 : 15,
              }}
            >
              Claxton Software
            </p>
          </Link>
          <MDBNavbarItem>
            <MDBNavbarLink>
              <Link
                to='/services'
                style={{
                  textDecoration: 'none',
                  fontSize: isMobile ? 15 : 20,
                }}
                className='link-hover'
              >
                &nbsp;&nbsp;What We Do&nbsp;&nbsp;
              </Link>
            </MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  )
}
