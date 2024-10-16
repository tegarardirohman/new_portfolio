import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import reactIcon from '../../assets/icon/icons8-react-native-100.png';
import jsIcon from '../../assets/icon/icons8-javascript-96.png';
import htmlIcon from '../../assets/icon/icons8-html-96.png';
import cssIcon from '../../assets/icon/icons8-css-96.png';
import tailwindIcon from '../../assets/icon/icons8-tailwind-css-96.png';
import bootstrapIcon from '../../assets/icon/icons8-bootstrap-96.png';
import figmaIcon from '../../assets/icon/icons8-figma-96.png';

const Marquee = ({ mode = 'grayscale' }) => {
  const containerRef = useRef(null);

  const images = [
    reactIcon,
    jsIcon,
    htmlIcon,
    cssIcon,
    tailwindIcon,
    bootstrapIcon,
    figmaIcon,
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
    <div className="flex flex-col items-center justify-center w-full [clip-path: ellipse(50% 75% at 50% 50%)]">
      <div className="overflow-hidden relative w-full">
        <div
          ref={containerRef}
          className="flex whitespace-nowrap gap-8"
        >
          {/* Duplicate the images to create seamless scrolling */}
          {[...images, ...images].map((src, index) => (
            <div key={index} className="flex-shrink-0 relative p-4 rounded-lg">
              <div className="w-full h-full top-0 bottom-0 left-0 right-0 absolute bg-white opacity-5 rounded-lg -z-10"></div>
              <img
                className={`h-20 w-20 object-cover ${mode === 'grayscale' ? 'grayscale hover:grayscale-0' : 'grayscale-0'} transition duration-1000`}
                src={src}
                alt={`Icon ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;