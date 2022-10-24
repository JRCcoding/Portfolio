import React from 'react'

import { Icon } from '@iconify/react'

const About = () => {
  return (
    <div className='mb-40 pl-20 text-white' id='about'>
      <Icon
        icon='line-md:coffee-twotone-loop'
        className='inline text-white w-20 h-20 mx-auto mb-5'
      />
      <h1 className='inline pt-4'>Josh Claxton</h1>
      <p className='fixed left-0 ml-20 mt-3'>
        I love to build beautifully functional websites and applications
      </p>

      <Icon
        icon='bx:code-alt'
        className='block text-white w-20 h-20 mx-auto mt-40'
      />
    </div>
  )
}

export default About
