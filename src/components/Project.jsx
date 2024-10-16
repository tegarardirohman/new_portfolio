import React from 'react'
import ProjectItem from './projects/ProjectItem'

const Project = () => {
  return (
    <section id='project' className='w-full relative bg-white'>
      <div className="w-full max-w-screen-xl mx-auto pt-48 pb-16">

        <div className="w-full flex gap-8">
          <h2 className='text-4xl font-semibold'>SOME OF THE MOST IMPRESSIVE PROJECT I HAVE DONE</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi officiis doloribus harum, tempora facere dignissimos totam dolores debitis voluptatibus libero, distinctio similique corrupti fugiat perferendis maiores dolore rem consequatur!</p>

        </div>

        <div className="w-full pt-10">

          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />


        </div>





      </div>
      


    </section>
  )
}

export default Project