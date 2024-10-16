import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import catImage from '../assets/icon/icons8-cat-100.png';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const MarqueeText = ({ mode = 'grayscale' }) => {
  const containerRef = useRef(null);

  const texts = [
    'Frontend Developer',
    'Backend Developer',
    'Mobile Developer',
    'Fullstack Developer',
    'Frontend Developer',
    'Backend Developer',
    'Mobile Developer',
    'Fullstack Developer',
  ];

  useEffect(() => {
    const container = containerRef.current;
    const totalWidth = (container.scrollWidth / 2); // Setengah dari total panjang container (karena kita duplikat)
    
    // GSAP Timeline untuk animasi seamless
    gsap.timeline({ repeat: -1, defaults: { ease: 'none', duration: 90 } })
      .fromTo(
        container, 
        { x: 0 }, // Mulai dari posisi awal
        { x: -totalWidth } // Bergerak sampai setengah total width
      )
      .set(container, { x: 0 }); // Set ulang ke posisi awal tanpa delay
    
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full bg-black text-white">
      <div className="overflow-hidden relative w-full">
        <div
          ref={containerRef}
          className="flex whitespace-nowrap"
        >
          {texts.map((text, index) => (
            <div key={index} className="flex-shrink-0 relative rounded-lg flex items-center">

              <h2 className='text-7xl font-bold mx-8 my-8 uppercase'>
                { text }
              </h2>

                <FaArrowAltCircleLeft className='text-4xl' />
              {/* <img src={catImage} /> */}

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeText;