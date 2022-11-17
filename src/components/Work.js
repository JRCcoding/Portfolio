// import Iframe from 'react-iframe'
import { Icon } from '@iconify/react'
import { Row, Col, Image } from 'react-bootstrap'
// import { useState } from 'react'
// import { MDBCollapse } from 'mdb-react-ui-kit'
import kk_ss from '../images/kk_ss.png'
import she_ss from '../images/she_ss.png'

export default function Projects() {
  // const [showShow, setShowShow] = useState(false)

  // const toggleShow = () => setShowShow(!showShow)
  return (
    <section className='mb-80'>
      {/* <div className=' py-10 text-center lg:px-40'>
        <div className='flex flex-col w-full mb-20 mx-auto'>
          <div className='text-white'>
            <div className='title' id='work'>
              <Icon
                icon='bx:code-alt'
                className='content-center text-white w-20 h-20 mx-auto mt-40'
              />
              <h1 className='text-center text-white'>Work</h1>
            </div>
            <p className='lg:w-2/3 leading-relaxed text-base lg:mx-60'>
              Here are some examples of my work, from live websites to templates
              created just for you!
            </p>
          </div>
          <div className='flex flex-wrap -m-4 lg:mx-60'>
            {projects.map((project) => (
              <a
                href={project.link}
                key={project.image}
                className='sm:w-1/2 w-100 p-4'
              >
                <div className='flex relative'>
                  <img
                    alt='gallery'
                    className='absolute inset-0 w-full h-full object-cover object-center'
                    src={project.image}
                  />
                  <div className='px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100'>
                    <h2 className='tracking-widest text-sm title-font font-medium text-white mb-1'>
                      {project.subtitle}
                    </h2>
                    <h1 className='title-font text-lg font-medium text-white mb-3'>
                      {project.title}
                    </h1>
                    <p className='leading-relaxed'>{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div> */}
      <Icon
        icon='bx:code-alt'
        className='content-center text-white w-20 h-20 mx-auto mt-80 ml-0'
        id='work'
      />{' '}
      <h1 className='text-center text-white'>Work</h1>
      <Row>
        {/* <Col className='mb-10'>
          <Iframe
            url='https://jrchub.herokuapp.com'
            width='600px'
            height='400px'
            className='mx-auto'
            display='block'
            position='relative'
          />
        </Col> */}
        {/* <Button onClick={toggleShow}>
          <h1> Show All </h1>
        </Button> */}
        <Col className='mb-10'>
          <a
            href='https://stonyhill.herokuapp.com/'
            className='text-2xl no-underline text-white visited:text-white hover:text-green'
            target='_blank'
            rel='noreferrer'
          >
            <h2 className='text-white mt-20 text-center'>Ecommerce</h2>
            <img src={she_ss} alt='ecommerce' />{' '}
          </a>

          {/* <MDBCollapse show={showShow}> */}
          {/* <Iframe
              url='https://stonyhill.herokuapp.com/'
              width='600px'
              height='800px'
              className='mx-auto'
              display='block'
              position='relative'
            /> */}
          {/* </MDBCollapse> */}
        </Col>
        <Col>
          <a
            href='https://jrccoding.github.io/KaitlynKing1.0/'
            className='text-2xl no-underline text-white visited:text-white hover:text-green'
            target='_blank'
            rel='noreferrer'
          >
            <h2 className='text-white mt-20 text-center'>Personal</h2>
            <img src={kk_ss} alt='kaitlyn king' />
          </a>

          {/* <MDBCollapse show={showShow}> */}
          {/* <Iframe
              url='https://jrccoding.github.io/KaitlynKing1.0/'
              width='600px'
              height='800px'
              className='mx-auto'
              display='block'
              position='relative'
            /> */}
          {/* </MDBCollapse> */}
        </Col>
      </Row>
      {/* <Row>
        <Col className='mb-10'>
          <Iframe
            url='https://jrccoding.github.io/KaitlynKing1.0/'
            width='600px'
            height='400px'
            className='mx-auto'
            display='block'
            position='relative'
          />
        </Col> */}
      {/* <Col className='mb-10'>
          <Iframe
            url='https://lnctreats.com'
            width='900px'
            height='600px'
            className='mx-auto'
            display='block'
            position='relative'
          />
        </Col> */}
      {/* </Row> */}
    </section>
  )
}
