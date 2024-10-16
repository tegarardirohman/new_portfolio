import React from 'react'

const TechStack = ({ images, mode = 'grayscale' }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full mb-4 ">
      <div className="overflow-hidden relative w-full m-10">

        <div
          className="grid grid-cols-4 gap-4 w-full"
        >
          {/* Duplicate the images to create seamless scrolling */}
          {images && images.map((src, index) => (
            <div key={index} className="relative p-7 aspect-square rounded-lg hover:p-4 transition-all duration-300 cursor-grab">
              <div className="w-full h-full top-0 bottom-0 left-0 right-0 absolute bg-black opacity-10 rounded-lg z-10"></div>
              <img
                className={`h-full w-full object-cover object-center m-auto relative z-10 transition duration-300`}
                src={src}
                alt={`Icon ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStack