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

export default function App() {
  return (
    <MDBNavbar dark className=' bg-black opacity-95 text-white lg:scale-125'>
      <MDBContainer fluid>
        <MDBNavbarNav className='text-white text-lg flex flex-row place-content-center '>
          {/* <a href='/'> */}
          <Link to='/' style={{ marginTop: 'auto', marginBottom: 'auto' }}>
            <Icon icon='bx:code-alt' className='text-white w-5 h-5' />
          </Link>

          {/* </a> */}
          {/* <MDBNavbarItem>
            <MDBNavbarLink href='#about'>
              &nbsp;&nbsp;About&nbsp;&nbsp;
            </MDBNavbarLink>
          </MDBNavbarItem> */}

          <MDBNavbarItem>
            <MDBNavbarLink>
              <Link
                to='/blogs'
                style={{ textDecoration: 'none', color: '#f2f2f2' }}
              >
                &nbsp;&nbsp;Blog&nbsp;&nbsp;
              </Link>
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink>
              <Link
                to='/skills'
                style={{ textDecoration: 'none', color: '#f2f2f2' }}
              >
                &nbsp;&nbsp;Skills&nbsp;&nbsp;
              </Link>
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink>
              <Link
                to='/work'
                style={{ textDecoration: 'none', color: '#f2f2f2' }}
              >
                &nbsp;&nbsp;Work&nbsp;&nbsp;
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
