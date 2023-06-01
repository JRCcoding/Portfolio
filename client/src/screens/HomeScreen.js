import { Icon } from '@iconify/react'
import React from 'react'
import Contact from '../components/Contact'
import Personal from '../components/Personal'
import ScrollButton from '../components/ScrollButton'
const HomeScreen = () => {
  return (
    <div className='min-h-screen'>
      <Icon
        icon='bx:code-alt'
        className='content-centet text-white w-20 h-20 mx-auto mt-40 ml-0'
        id='home'
      />{' '}
      <h1 className='text-center text-7xl  text-white mb-40'>Josh Claxton</h1>
      <Personal />
      <Contact />
      <ScrollButton />
    </div>
  )
}

export default HomeScreen
