import { Icon } from '@iconify/react'
import 'animate.css'
import React from 'react'
import { skills } from '../data'

const Skills = () => {
  return (
    <div className='min-h-screen'>
      <Icon
        icon='bx:code-alt'
        className='content-center text-white w-20 h-20 mx-auto mt-40 ml-0'
        id='skills'
      />{' '}
      <h1 className='text-center text-3xl text-white'>Skills</h1>
      <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-80'>
        {skills.map((skill) => (
          <div key={skill} className='p-2 sm:w-full lg:w-1/2'>
            <div className='rounded flex p-4 items-center border bg-black'>
              <Icon
                icon='akar-icons:circle-check-fill'
                className='text-white h-5 w-5  md:h-6 flex-shrink-0 mr-4'
              />
              <span className='title-font font-medium text-white animate__animated animate__fadeInLeft'>
                {skill}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
