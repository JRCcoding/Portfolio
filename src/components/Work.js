import { Icon } from '@iconify/react'
import { projects } from '../data'

export default function Projects() {
  return (
    <section className='text-gray-400 bg-gray-900 body-font my-60'>
      <div className=' py-10 text-center lg:px-40'>
        <div className='flex flex-col w-full mb-20 mx-auto'>
          <div className='text-white'>
            <div className='title' id='work'>
              <Icon
                icon='bx:code-alt'
                className='content-center text-white w-20 h-20 mx-auto mt-40'
              />
              <h1 className='text-center text-white'>Work</h1>
            </div>
            <p className='lg:w-2/3 leading-relaxed text-base mx-60'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo facilis repellat ab cupiditate alias vero aliquid
              obcaecati quisquam fuga dolore.
            </p>
          </div>
          <div className='flex flex-wrap -m-4'>
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
      </div>
    </section>
  )
}
