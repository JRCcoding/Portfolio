import React from 'react'
import { Icon } from '@iconify/react'
import Iframe from 'react-iframe'

const Hub = () => {
  return (
    <div>
      <Icon
        icon='bx:code-alt'
        className='content-center text-white w-20 h-20 mx-auto mt-80 ml-0'
        id='hub'
      />{' '}
      <h1 className='text-center text-white'>Hub</h1>
      <Iframe
        url='https://jrchub.herokuapp.com'
        width='800px'
        height='600px'
        className='mx-auto'
        display='block'
        position='relative'
      />
    </div>
  )
}

export default Hub
