import { useForm } from '@formspree/react'
import { Icon } from '@iconify/react'
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit'
import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import './Contact.css'

const Contact = () => {
  const [state, handleSubmit] = useForm('mlevgnlj')
  if (state.succeeded) {
    return (
      <div className='thanks_message'>
        Thank you for your interest! We will get back to you as soon as
        possible.
      </div>
    )
  }
  return (
    <div className='no-underline text-black visited:text-black hover:text-black container mb-20 '>
      <MDBCard className='contact_MDBCard animate__animated animate__fadeInLeft'>
        <MDBCardBody className='contact_form text-[#007bff]'>
          <Form onSubmit={handleSubmit}>
            <FloatingLabel label='Name:'>
              <input
                className='form-control mb-3'
                id='name'
                type='text'
                name='name'
                required
                placeholder='Name:'
              />
            </FloatingLabel>

            <FloatingLabel label='Number:'>
              <input
                className='form-control mb-3'
                id='number'
                type='text'
                name='number'
                required
                placeholder='Number:'
              />
            </FloatingLabel>

            <FloatingLabel label='Email:'>
              <input
                className='form-control mb-3'
                id='email'
                type='email'
                name='email'
                required
                placeholder='Email:'
              />
            </FloatingLabel>

            <FloatingLabel label='Message:'>
              <textarea
                className='form-control'
                id='message'
                type='text'
                name='message'
                required
                placeholder='Message:'
                rows='4'
                style={{ height: '175px', paddingTop: '40px', resize: 'none' }}
              ></textarea>
            </FloatingLabel>

            <div className='submit_container'>
              <button
                type='submit'
                className='contact_submit'
                disabled={state.submitting}
              >
                Send to Claxton Software
              </button>
            </div>
          </Form>
        </MDBCardBody>
      </MDBCard>
      {/* <p className='text-center'>
        There are many ways to contact me but here are the best options!
      </p>
      <ul className='flex flex-col flex-wrap h-20 w-100'>
        <li className='text-center'>
          <a
            href='mailto:jrccode@outlook.com'
            className='text-2xl no-underline text-black visited:text-black hover:text-green'
          >
            <Icon icon='ic:round-email' className='inline' />
            Email
          </a>
        </li>
        <li className='text-center'>
          <a
            href='https://github.com/jrccoding'
            className='text-2xl no-underline text-black visited:text-black hover:text-green'
          >
            <Icon icon='akar-icons:github-fill' className='inline' />
            &nbsp;Github
          </a>
        </li>
        <li className='text-center'>
          <a
            href='https://facebook.com/jrccode'
            className='text-2xl no-underline text-black visited:text-black hover:text-green'
          >
            <Icon icon='akar-icons:facebook-fill' className='inline' />
            Facebook
          </a>
        </li>
        <li className='text-center'>
          <a
            href='#call'
            className='inline text-2xl no-underline text-black visited:text-black hover:text-green'
          >
            <Icon icon='bi:phone-fill' className='inline' />
            (432)425-2593
          </a>
        </li>
      </ul> */}
    </div>
  )
}

export default Contact
