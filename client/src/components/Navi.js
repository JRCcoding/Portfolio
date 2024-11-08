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
    <MDBNavbar className='opacity-95'>
      <MDBContainer fluid>
        <MDBNavbarNav
          className='text-lg flex text-offwhite flex-row place-content-end '
          style={{ width: '100%' }}
        >
          {/* <a href='/'> */}
          <Link to='/' style={{ marginRight: 'auto' }} className='link-hover'>
            <p
              style={{
                fontSize: isMobile ? 30 : 50,
                margin: isMobile ? 5 : 15,
              }}
            >
              Claxton Software
            </p>
            {/* <Icon icon='bx:code-alt' className='text-white w-5 h-5' />
            <p
              style={{
                fontSize: '10px',
                textAlign: 'center',
                margin: -10,
                padding: 0,
                color: 'white',
              }}
            >
              Home
            </p> */}
          </Link>

          {/* </a> */}
          {/* <MDBNavbarItem>
            <MDBNavbarLink href='#about'>
              &nbsp;&nbsp;About&nbsp;&nbsp;
            </MDBNavbarLink>
          </MDBNavbarItem> */}

          {/* <MDBNavbarItem>
            <MDBNavbarLink>
              <Link
                to='/blogs'
                style={{ textDecoration: 'none', color: '#f2f2f2' }}
              >
                &nbsp;&nbsp;Blog&nbsp;&nbsp;
              </Link>
            </MDBNavbarLink>
          </MDBNavbarItem> */}
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

          {/* <MDBNavbarItem>
            <MDBNavbarLink>
              <Link
                to='/#contact'
                style={{ textDecoration: 'none', color: '#f2f2f2' }}
              >
                &nbsp;&nbsp;Contact&nbsp;&nbsp;
              </Link>
            </MDBNavbarLink>
          </MDBNavbarItem> */}
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  )
}
