import React from 'react'
import project1 from '../../assets/projects/project-1.png'
import { FaArrowAltCircleRight, FaLongArrowAltRight, FaRegArrowAltCircleRight } from 'react-icons/fa'
import { MdArrowOutward } from 'react-icons/md'

const ProjectItem = () => {
  return (
    <div className='w-full flex py-24 border-t-2 border-slate-200 justify-between gap-24'>
        <div className='w-1/3 flex flex-col justify-between'>
            <div className='font-light'>
                <h3 className='text-xl font-semibold mb-4'>Barberbro</h3>
                <p> A modern and minimalistic barber shop website.</p>
            </div>

            <button className='text-start flex items-center gap-8 text-xl'>View Project <div className="border-2 p-4 rounded-full hover:bg-black hover:text-white transition-all duration-300">  <MdArrowOutward className='inline' size={28}/> </div>   </button>

        </div>

        <div className="w-full bg-red-300 aspect-video px-16 py-16 bg-center" style={{backgroundImage: `url(${project1})`}}>

            <img src={project1} alt="project 1" />

        </div>

    </div>
  )
}

export default ProjectItem