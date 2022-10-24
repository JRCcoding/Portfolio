import React, { useState } from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit'
import { Icon } from '@iconify/react'
// import { Link } from 'react-router-dom'

export default function Navi() {
  // const [showBasic, setShowBasic] = useState(false)

  return (
    <MDBNavbar expand='sm' light className='mb-10 bg-black'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#' className='ml-40 text-white'>
          jrcCode
          <Icon icon='bx:code-alt' className='inline text-white w-5 h-5' />
        </MDBNavbarBrand>

        {/* <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <Icon icon='bytesize:menu' className='text-white' />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink
                active
                aria-current='page'
                href='#'
                className='text-white'
              >
                About
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink to={Link} href='#' className='text-white'>
                Portfolio
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink to={Link} href='#contact' className='text-white'>
                Contact
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse> */}
      </MDBContainer>
    </MDBNavbar>
  )
}
