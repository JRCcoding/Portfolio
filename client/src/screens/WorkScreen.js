import { Icon } from '@iconify/react'
import { Col, Row } from 'react-bootstrap'
import kk_ss from '../images/kk_ss.png'
import lnc_ss from '../images/lnc_ss.png'
import she_ss from '../images/she_ss.png'
import '../styles/Work.css'

export default function Projects() {
  return (
    <section className='mb-80'>
      <Icon
        icon='bx:code-alt'
        className='content-center text-white w-20 h-20 mx-auto mt-40 ml-0'
        id='work'
      />{' '}
      <h1 className='text-center text-3xl text-white'>Work</h1>
      <Row xs={1} sm={1} md={1} lg={1}>
        <Col className='mb-10'>
          <a
            href='https://lnctreats.com/'
            className='text-2xl no-underline text-white visited:text-white hover:text-green'
            target='_blank'
            rel='noreferrer'
          >
            <h2 className='text-white mt-20 text-center'>LNCtreats.com</h2>
            <img
              src={lnc_ss}
              alt='Lauryns Next-door Cottage'
              className='work_img'
            />{' '}
          </a>
        </Col>
        <Col className='mb-10'>
          <a
            href='https://stonyhill.herokuapp.com/'
            className='text-2xl no-underline text-white visited:text-white hover:text-green'
            target='_blank'
            rel='noreferrer'
          >
            <h2 className='text-white mt-20 text-center'>Ecommerce</h2>
            <img src={she_ss} alt='ecommerce' className='work_img' />{' '}
          </a>
        </Col>
        <Col>
          <a
            href='https://jrccoding.github.io/KaitlynKing1.0/'
            className='text-2xl no-underline text-white visited:text-white hover:text-green'
            target='_blank'
            rel='noreferrer'
          >
            <h2 className='text-white mt-20 text-center'>Personal</h2>
            <img src={kk_ss} alt='kaitlyn king' className='work_img' />
          </a>
        </Col>
      </Row>
    </section>
  )
}
