import React from 'react'
import { Icon } from '@iconify/react'
import { useForm } from '@formspree/react'
import { MDBCardBody, MDBCardTitle, MDBCard } from 'mdb-react-ui-kit'
import './Contact.css'

const Contact = () => {
  const [state, handleSubmit] = useForm('mlevgnlj')
  if (state.succeeded) {
    return (
      <div>
        Thank you so much for your interest! I will get back to you within as
        soon as possible!
      </div>
    )
  }
  return (
    <div className='no-underline text-black visited:text-black hover:text-black container mb-20'>
      <Icon
        icon='bx:code-alt'
        className='content-center text-white w-20 h-20 mx-auto'
        id='skills'
      />
      <h1 className='text-center text-white' id='contact'>
        Contact
      </h1>

      <MDBCard className='contact_MDBCard'>
        <MDBCardTitle className='contact_title mb-5 mt-2'>
          <h1 className='text-[rgb(0,175,145)]'>Quick Form:</h1>
        </MDBCardTitle>

        <MDBCardBody className='contact_form text-[rgb(0,175,145)]'>
          <form onSubmit={handleSubmit}>
            <label className='form-label' htmlFor='name'>
              Name:
            </label>
            <input
              className='form-control mb-3'
              id='name'
              type='text'
              name='name'
              required
            />
            <label className='form-label' htmlFor='number'>
              Number:
            </label>
            <input
              className='form-control mb-3'
              id='number'
              type='text'
              name='number'
              required
            />

            <label className='form-label' htmlFor='email'>
              Email:
            </label>
            <input
              className='form-control mb-3'
              id='email'
              type='email'
              name='email'
              required
            />

            <label className='form-label' htmlFor='message'>
              Message:
            </label>
            <input
              className='form-control '
              id='message'
              type='text'
              name='message'
              required
            ></input>
            <button
              type='submit'
              className='contact_submit'
              disabled={state.submitting}
            >
              Send to Josh!
            </button>
          </form>
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
