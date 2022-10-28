import React from 'react'
import { skills } from '../data'
import { Icon } from '@iconify/react'

const Skills = () => {
  return (
    <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-80'>
      {skills.map((skill) => (
        <div key={skill} className='p-2 sm:w-1/2 w-full'>
          <div className='rounded flex p-4 items-center border bg-black'>
            <Icon
              icon='heroicons-outline:badge-check '
              className='text-white w-6 h-20 md:h-6 flex-shrink-0 mr-4'
            />
            <span className='title-font font-medium text-white'>{skill}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skills
