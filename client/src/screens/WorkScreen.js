import { Icon } from '@iconify/react'
import { Col, Row } from 'react-bootstrap'
import ghLogo from '../images/github-mark-white.png'
import kayla_ss from '../images/kayla_ss.png'
import kk_ss from '../images/kk_ss.png'
import lnc_ss from '../images/lnc_ss_2.png'
import nolimit_ss from '../images/nolimit_ss.png'
import poke_ss from '../images/poke_ss.png'
import swapi_ss from '../images/swapi_ss.png'
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
      <Row xs={1} sm={1} md={1} lg={2}>
        <Col className='mb-10'>
          <a
            href='https://lnctreats.com/'
            className='text-2xl no-underline text-white visited:text-white hover:text-green'
            target='_blank'
            rel='noreferrer'
          >
            <h2 className='text-white mt-20 text-center'>
              LNCtreats.com
              <a
                href='https://github.com/jrccoding/lnctreats'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src={ghLogo}
                  alt='Josh Claxton Github Repo'
                  className='ghLogo'
                />
              </a>
            </h2>
            <img
              src={lnc_ss}
              alt='Lauryns Next-door Cottage'
              className='work_img'
            />{' '}
          </a>
        </Col>

        <Col className='mb-10'>
          <a
            href='https://nolimitfitness.us'
            className='text-2xl no-underline text-white visited:text-white hover:text-green'
            target='_blank'
            rel='noreferrer'
          >
            <h2 className='text-white mt-20 text-center'>
              NoLimitFitness.us
              <a
                href='https://github.com/jrccoding/nolimitfitness'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src={ghLogo}
                  alt='Josh Claxton Github Repo'
                  className='ghLogo'
                />
              </a>
            </h2>
            <img src={nolimit_ss} alt='No Limit Fitness' className='work_img' />{' '}
          </a>
        </Col>

        <Col>
          <a
            href='https://jrccoding.github.io/KaitlynKing1.0/'
            className='text-2xl no-underline text-white visited:text-white hover:text-green'
            target='_blank'
            rel='noreferrer'
          >
            <h2 className='text-white mt-20 text-center'>
              Personal Site Template
              <a
                href='https://github.com/jrccoding/portfolio'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src={ghLogo}
                  alt='Josh Claxton Github Repo'
                  className='ghLogo'
                />
              </a>
            </h2>
            <img src={kk_ss} alt='kaitlyn king' className='work_img' />
          </a>
        </Col>
        <Col className='mb-10'>
          <a
            href='https://jrcpokeapp.surge.sh'
            className='text-2xl no-underline text-white visited:text-white hover:text-green'
            target='_blank'
            rel='noreferrer'
          >
            <h2 className='text-white mt-20 text-center'>
              PokeAPI App
              <a
                href='https://github.com/jrccoding/pokeapp'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src={ghLogo}
                  alt='Josh Claxton Github Repo'
                  className='ghLogo'
                />
              </a>
            </h2>
            <img
              src={poke_ss}
              alt='Pokemon App Josh Claxton'
              className='work_img'
            />{' '}
          </a>
        </Col>
        <Col>
          <a
            href='https://jrcswapi.surge.sh/'
            className='text-2xl no-underline text-white visited:text-white hover:text-green'
            target='_blank'
            rel='noreferrer'
          >
            <h2 className='text-white mt-20 text-center'>
              Star Wars API App
              <a
                href='https://github.com/jrccoding/swapi-t'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src={ghLogo}
                  alt='Josh Claxton Github Repo'
                  className='ghLogo'
                />
              </a>
            </h2>
            <img src={swapi_ss} alt='Star Wars API App' className='work_img' />
          </a>
        </Col>
      </Row>
    </section>
  )
}
