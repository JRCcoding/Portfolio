import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  // MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  // MDBCollapse,
} from 'mdb-react-ui-kit'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

export default function Navi() {
  // const [showBasic, setShowBasic] = useState(false)

  return (
    <MDBNavbar expand='xxl' light className='mb-10 bg-black sticky-top'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#' className='lg:mx-20 text-white'>
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
  */}

        <MDBNavbarNav className=''>
          <MDBNavbarItem>
            <MDBNavbarLink href='#skills' className='text-white'>
              Skills
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink to={Link} href='#work' className='text-white'>
              Work
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink to={Link} href='#contact' className='text-white'>
              Contact
            </MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  )
}
