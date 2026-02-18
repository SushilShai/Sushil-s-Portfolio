import React from 'react'

const ProjectCard = (props) => {
  return (
        <>
            <div className='w-1/2 h-full group relative transition-all rounded-none hover:rounded-[70px] overflow-hidden bg-amber-700'>
              <img className='w-full h-full object-cover' src={props.image1} alt="Project1" />
              <div className='absolute opacity-0 group-hover:opacity-100 transition-all top-0 left-0 h-full w-full bg-black/10 flex items-center justify-center'>
                <h2 className='uppercase text-6xl border-4 p-2 text-white rounded-full px-4 '>View Project</h2>
              </div>
            </div>
            <div className='w-1/2 h-full group relative transition-all rounded-none hover:rounded-[70px] overflow-hidden bg-amber-700'>
              <img className='w-full h-full object-cover' src={props.image2} alt="Project2" />
              <div className='absolute opacity-0 group-hover:opacity-100 transition-all top-0 left-0 h-full w-full bg-black/10 flex items-center justify-center'>
                <h2 className='uppercase text-6xl border-4 p-2 text-white rounded-full px-4 '>View Project</h2>
              </div>
            </div>
        </>
  )
}

export default ProjectCard
