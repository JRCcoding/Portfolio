import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
} from 'mdb-react-ui-kit'
// import { Icon } from '@iconify/react'

export default function App() {
  return (
    <MDBNavbar dark className=' bg-black opacity-95 text-white lg:scale-125'>
      <MDBContainer fluid>
        <MDBNavbarNav className='text-white text-lg flex flex-row place-content-center '>
          {/* <a href='/'>
            <Icon icon='bx:code-alt' className='text-white w-5 h-5 mt-2.5' />
          </a> */}
          <MDBNavbarItem>
            <MDBNavbarLink href='#about'>
              &nbsp;&nbsp;About&nbsp;&nbsp;
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href='#skills'>
              &nbsp;&nbsp;Skills&nbsp;&nbsp;
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href='#work'>
              &nbsp;&nbsp;Work&nbsp;&nbsp;
            </MDBNavbarLink>
          </MDBNavbarItem>

          <MDBNavbarItem>
            <MDBNavbarLink href='#contact'>
              &nbsp;&nbsp;Contact&nbsp;&nbsp;
            </MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  )
}
