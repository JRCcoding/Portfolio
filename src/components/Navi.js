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

import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  // MDBNavbarBrand,
  // MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  // MDBCollapse,
} from 'mdb-react-ui-kit'
import { Icon } from '@iconify/react'

export default function App() {
  // const [showNav, setShowNav] = useState(false)

  return (
    <MDBNavbar dark className=' bg-black opacity-95 text-white lg:scale-125'>
      <MDBContainer fluid>
        {/* <MDBNavbarBrand href='#' className='text-white mx-auto scale-125'>
          jrcCode
          <Icon icon='bx:code-alt' className='inline text-white w-5 h-5' />
        </MDBNavbarBrand> */}
        {/* <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <Icon icon='bytesize:menu' className='text-white' />
        </MDBNavbarToggler> */}
        {/* <MDBCollapse navbar show={showNav}> */}
        <MDBNavbarNav className='text-white text-lg inline flex flex-row place-content-center '>
          <a href='/'>
            <Icon icon='bx:code-alt' className='text-white w-5 h-5 mt-2.5' />
          </a>

          <MDBNavbarItem>
            <MDBNavbarLink href='#personal'>
              &nbsp;&nbsp;About&nbsp;&nbsp;
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href='#skills'>
              &nbsp;&nbsp;Skills&nbsp;&nbsp;
            </MDBNavbarLink>
          </MDBNavbarItem>
          {/* <MDBNavbarItem>
            <MDBNavbarLink href='#work'>
              &nbsp;&nbsp;Work&nbsp;&nbsp;
            </MDBNavbarLink>
          </MDBNavbarItem> */}
          <MDBNavbarItem>
            <MDBNavbarLink href='#contact'>
              &nbsp;&nbsp;Contact&nbsp;&nbsp;
            </MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
        {/* </MDBCollapse> */}
      </MDBContainer>
    </MDBNavbar>
  )
}
