import React from 'react'
import { skills } from '../data'
import { Icon } from '@iconify/react'
import 'animate.css'
import Fade from 'react-reveal/Fade'

const Skills = () => {
  return (
    <div>
      <Icon
        icon='bx:code-alt'
        className='content-center text-white w-20 h-20 mx-auto mt-80 ml-0'
        id='skills'
      />{' '}
      <h1 className='text-center text-white'>Skills</h1>
      <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-80'>
        {skills.map((skill) => (
          <div key={skill} className='p-2 sm:w-1/2 w-full'>
            <Fade left>
              <div className='rounded flex p-4 items-center border bg-black'>
                <Icon
                  icon='heroicons-outline:badge-check '
                  className='text-white w-6 h-20 md:h-6 flex-shrink-0 mr-4'
                />
                <span className='title-font font-medium text-white'>
                  {skill}
                </span>
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
