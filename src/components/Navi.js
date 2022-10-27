// import React from 'react'
// import {
//   MDBContainer,
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarToggler,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBCollapse,
// } from 'mdb-react-ui-kit'
// import { Icon } from '@iconify/react'
// import { Link } from 'react-router-dom'

// export default function Navi() {
//   const [showBasic, setShowBasic] = useState(false)

//   return (
//     <MDBNavbar expand='sm' light className=' bg-black opacity-80 sticky-top'>
//       <MDBContainer fluid>
//         <MDBNavbarBrand href='#' className='lg:mx-20 lg:pl-80 text-white'>
//           jrcCode
//           <Icon icon='bx:code-alt' className='inline text-white w-5 h-5' />
//         </MDBNavbarBrand>

//         <MDBNavbarToggler
//           aria-controls='navbarSupportedContent'
//           aria-expanded='false'
//           aria-label='Toggle navigation'
//           onClick={() => setShowBasic(!showBasic)}
//         >
//           <Icon icon='bytesize:menu' className='text-white' />
//         </MDBNavbarToggler>

//         <MDBNavbarNav className='divide-x ml-20'>
//           <MDBNavbarItem>
//             <MDBNavbarLink href='#skills' className='text-white'>
//               Skills
//             </MDBNavbarLink>
//           </MDBNavbarItem>
//           <MDBNavbarItem>
//             <MDBNavbarLink to={Link} href='#work' className='text-white'>
//               Work
//             </MDBNavbarLink>
//           </MDBNavbarItem>
//           <MDBNavbarItem>
//             <MDBNavbarLink to={Link} href='#contact' className='text-white'>
//               Contact
//             </MDBNavbarLink>
//           </MDBNavbarItem>
//         </MDBNavbarNav>
//       </MDBContainer>
//     </MDBNavbar>
//   )
// }

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

export default function App() {
  const [showNav, setShowNav] = useState(false)

  return (
    <MDBNavbar expand='lg' dark className='bg-black text-white'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#' className='text-white'>
          jrcCode
          <Icon icon='bx:code-alt' className='inline text-white w-5 h-5' />
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <Icon icon='bytesize:menu' className='text-white' />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav className='lg:divide-x text-white'>
            <MDBNavbarItem>
              <MDBNavbarLink href='#skills'>Skills</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#work'>Work</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                disabled
                href='#'
                tabIndex={-1}
                aria-disabled='true'
              >
                Contact
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  )
}
