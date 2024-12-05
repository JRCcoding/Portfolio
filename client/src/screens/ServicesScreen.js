import { Icon } from '@iconify/react'
import 'animate.css'
import React, { useState } from 'react'
import { skills } from '../data'
import { Button, Col, Container, Row } from 'react-bootstrap'
import '../styles/Work.css'
import ScrollButton from '../components/ScrollButton'
import Contact from '../components/Contact'
import '../App.css'
import ui from '../images/ui.jpg'
import adminDashboard from '../images/admin-dashboard.png'
import ps from '../images/ps.jpg'
import bcs from '../images/bcs.webp'
import im from '../images/im.png'
import ae from '../images/ae.webp'
import logo from '../images/logot.png'

const Skills = () => {
  const [hidden, setHidden] = useState(true)
  const [activeCard, setActiveCard] = useState(null)

  const onClickContact = () => {
    setHidden(!hidden)
  }
  const handleCardClick = (skill) => {
    setActiveCard(activeCard === skill ? null : skill)
  }

  const skillDetails = {
    'User Interface': {
      title: 'User Interface',
      description:
        'Craft beautiful and intuitive user interfaces that delight your users.',
      image: ui,
    },
    'Product Sales': {
      title: 'Product Sales',
      description:
        'Develop e-commerce solutions to boost your product sales and reach a wider audience.',
      image: ps,
    },
    'Business Card Site': {
      title: 'Business Card Site',
      description:
        'Create a professional online presence with a sleek and informative business card site.',
      image: bcs,
    },
    'Admin Dashboard': {
      title: 'Admin Dashboard',
      description:
        'Manage your operations efficiently with a custom-built admin dashboard tailored to your needs.',
      image: adminDashboard,
    },
    'Inventory Management': {
      title: 'Inventory Management',
      description:
        'Keep track of your inventory with ease and accuracy using a robust inventory management system.',
      image: im,
    },
    'Anything Else!': {
      title: 'Anything Else!',
      description:
        "Have a unique project in mind? Let's discuss your needs and bring your vision to life!",
      image: ae,
    },
  }

  return (
    <div className='min-h-screen'>
      <Container>
        <img
          src={logo}
          alt='Claxton Software logo'
          style={{
            height: 250,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 100,
            marginBottom: 0,
          }}
        />{' '}
        <div>
          <div
            className='flex flex-column mt-40'
            style={{ marginBottom: '15%' }}
          >
            <p
              className='about_text mb-2  animate__animated animate__fadeInLeft'
              style={{ marginTop: '-90px' }}
            >
              We build all kinds of websites! You think it, we can build it.
              Simple business card website? <b>No problem</b>! Want to sell your
              products on your own website? <b>Easy</b>. We can build out your
              own <i>admin dashboard</i> to log into to check your orders,{' '}
              <i>product inventory</i> management, <i>shipping</i>, every online
              aspect of your business!
            </p>
            <p
              className='about_text mb-2 animateDelay1  animate__animated animate__fadeInRight'
              style={{ marginTop: 50 }}
            >
              We don't just build websites; we craft stunning online
              experiences. From sleek, modern designs that captivate your
              audience to intuitive navigation that keeps them engaged, we'll
              ensure your website is a joy to use and leaves a lasting
              impression.
            </p>
            <p
              className='about_text mb-2 animateDelay2  animate__animated animate__fadeInLeft'
              style={{ marginTop: 50 }}
            >
              Want to take it a step further? We can integrate interactive
              elements, animations, and cutting-edge technology to create a
              truly immersive digital journey for your visitors. Let us help you
              transform your vision into a breathtaking online reality.
            </p>
            <Button
              variant='primary'
              size='lg'
              onClick={onClickContact}
              hidden={!hidden}
              style={{
                marginTop: 175,
                height: 55,
                marginLeft: '20%',
                marginRight: '20%',
                background: 'black',
                border: 'white 1px solid',
              }}
            >
              Contact Us Now!
            </Button>
            <div hidden={hidden}>
              <Contact />
            </div>
          </div>
        </div>
      </Container>
      {/*<Icon
        icon='bx:code-alt'
        className='content-center  w-20 h-20 mx-auto mt-40 ml-0'
        id='skills'
      />{' '}
      <h1 className='text-center text-3xl mb-20 '>Features</h1>
       <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-80'>
        {skills.map((skill) => (
          <div key={skill} className='p-2 sm:w-full lg:w-1/2'>
            <div
              className='rounded flex p-4 items-center border bg-black cursor-pointer'
              onClick={() => handleCardClick(skill)}
            >
              <Icon
                icon='akar-icons:circle-check-fill'
                className='h-5 w-5 md:h-6 flex-shrink-0 mr-4'
              />
              <span className='title-font font-medium'>{skill}</span>
            </div>
            {activeCard === skill && (
              <div className='mt-2 border bg-black rounded p-4 animate__animated animate__fadeInUp'>
                <h3>{skillDetails[skill].title}</h3>
                <p>{skillDetails[skill].description}</p>
                {skillDetails[skill].image && (
                  <img src={skillDetails[skill].image} alt={skill} />
                )}
              </div>
            )}
          </div>
        ))}
      </div> */}
      {/* <section className='mb-80'>
        <Icon
          icon='bx:code-alt'
          className='content-center  w-20 h-20 mx-auto mt-40 ml-0'
          id='work'
        />{' '}
        <h1 className='text-center text-3xl '>Work</h1>
        <Row xs={1} sm={1} md={1} lg={2}>
          <Col className='mb-10'>
            <a
              href='https://lnctreats.com/'
              className='text-2xl no-underline  visited: hover:text-blue'
              target='_blank'
              rel='noreferrer'
            >
              <h2 className=' mt-20 text-center'>LNCtreats.com</h2>
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
              className='text-2xl no-underline  visited: hover:text-blue'
              target='_blank'
              rel='noreferrer'
            >
              <h2 className=' mt-20 text-center'>NoLimitFitness.us</h2>
              <img
                src={nolimit_ss}
                alt='No Limit Fitness'
                className='work_img'
              />{' '}
            </a>
          </Col>

          <Col>
            <a
              href='https://jrccoding.github.io/KaitlynKing1.0/'
              className='text-2xl no-underline  visited: hover:text-blue'
              target='_blank'
              rel='noreferrer'
            >
              <h2 className=' mt-20 text-center'>Personal Site Template</h2>
              <img src={kk_ss} alt='kaitlyn king' className='work_img' />
            </a>
          </Col>
        </Row>
      </section>
      <section className='mb-80'>
        <Icon
          icon='bx:code-alt'
          className='content-center  w-20 h-20 mx-auto mt-40 ml-0'
          id='work'
        />{' '}
        <h1 className='text-center text-3xl '>Fun</h1>
        <Row xs={1} sm={1} md={1} lg={2}>
          <Col className='mb-10'>
            <a
              href='https://jrcpokeapp.surge.sh'
              className='text-2xl no-underline  visited: hover:text-blue'
              target='_blank'
              rel='noreferrer'
            >
              <h2 className=' mt-20 text-center'>PokeAPI App (2 hr)</h2>
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
              className='text-2xl no-underline  visited: hover:text-blue'
              target='_blank'
              rel='noreferrer'
            >
              <h2 className=' mt-20 text-center'>Star Wars API App (1 hr)</h2>
              <img
                src={swapi_ss}
                alt='Star Wars API App'
                className='work_img'
              />
            </a>
          </Col>
        </Row>
      </section> */}
      <ScrollButton />
    </div>
  )
}

export default Skills
