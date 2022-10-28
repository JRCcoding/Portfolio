import React from 'react'
import { Icon } from '@iconify/react'

const Contact = () => {
  return (
    <div className='no-underline text-white visited:text-white hover:text-white container '>
      <Icon
        icon='bx:code-alt'
        className='content-center text-white w-20 h-20 mx-auto mt-80'
        id='skills'
      />
      <h1 className='text-center text-white'>Contact</h1>
      <p className='text-center'>
        There are many ways to contact me but here are the best options!
      </p>
      <ul className='flex flex-col flex-wrap h-20 w-100'>
        <li className='text-center'>
          <a
            href='mailto:jrccode@outlook.com'
            className='text-2xl no-underline text-white visited:text-white hover:text-green'
          >
            <Icon icon='ic:round-email' className='inline' />
            Email
          </a>
        </li>
        <li className='text-center'>
          <a
            href='https://github.com/jrccoding'
            className='text-2xl no-underline text-white visited:text-white hover:text-green'
          >
            <Icon icon='akar-icons:github-fill' className='inline' />
            &nbsp;Github
          </a>
        </li>
        <li className='text-center'>
          <a
            href='https://facebook.com/jrccode'
            className='text-2xl no-underline text-white visited:text-white hover:text-green'
          >
            <Icon icon='akar-icons:facebook-fill' className='inline' />
            Facebook
          </a>
        </li>
        <li className='text-center'>
          <a
            href='#call'
            className='inline text-2xl no-underline text-white visited:text-white hover:text-green'
          >
            <Icon icon='bi:phone-fill' className='inline' />
            (432)425-2593
          </a>
        </li>
        <li className='text-center'>
          <a
            href='#'
            className='text-2xl no-underline text-white visited:text-white hover:text-green'
          >
            <Icon icon='ant-design:instagram-filled' className='inline' />
            Instagram
          </a>
        </li>
        <li className='text-center'>
          <a
            href='#'
            className='inline text-2xl no-underline text-white visited:text-white hover:text-green'
          >
            <Icon icon='akar-icons:whatsapp-fill' className='inline' />
            What'sApp
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contact
