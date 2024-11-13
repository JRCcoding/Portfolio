import { Icon } from '@iconify/react'
import React from 'react'
import Contact from '../components/Contact'
import Personal from '../components/Personal'
import ScrollButton from '../components/ScrollButton'
const HomeScreen = ({ isMobile }) => {
  return (
    <div className='min-h-screen'>
      <Icon
        icon='bx:code-alt'
        className='content-centet  w-20 h-20 mx-auto mt-40 ml-0'
        id='home'
      />{' '}
      <Personal style={{ marginBottom: '-50%' }} isMobile={isMobile} />
      <Icon
        icon='bx:code-alt'
        className='content-center text-white w-20 h-20 mx-auto'
        id='skills'
      />
      <h1 className='text-center text-3xl text-white' id='contact'>
        Contact
      </h1>
      <Contact />
      <ScrollButton />
    </div>
  )
}

export default HomeScreen
