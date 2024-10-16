import React from 'react'
import MarqueeBE from './about/MarqueeBE'
import Marquee from './about/Marquee'

const TechStack = () => {
  return (
    <div id="techstack" className="w-full flex flex-col items-center justify-center gap-8 relative bg-[#212121] ">

      <Marquee />
      <MarqueeBE />
        
    </div>
  )
}

export default TechStack