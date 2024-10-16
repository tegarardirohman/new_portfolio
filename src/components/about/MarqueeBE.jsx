import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import springboot from '../../assets/icon/icons8-spring-boot-96.png';
import javaIcon from '../../assets/icon/icons8-java-96.png';
import dockerIcon from '../../assets/icon/icons8-docker-96.png';
import graphqlIcon from '../../assets/icon/icons8-graphql-96.png';
import laravelIcon from '../../assets/icon/icons8-laravel-96.png';
import phpIcon from '../../assets/icon/icons8-php-80.png';
import mysqlIcon from '../../assets/icon/icons8-mysql-96.png';
import postgresIcon from '../../assets/icon/icons8-postgres-96.png';
import mongoIcon from '../../assets/icon/icons8-mongo-db-96.png';

const MarqueeBE = ({ mode = 'grayscale' }) => {
  const containerRef = useRef(null);

  const images = [
    springboot,
    javaIcon,
    dockerIcon,
    graphqlIcon,
    laravelIcon,
    phpIcon,
    mysqlIcon,
    postgresIcon,
    mongoIcon,
    // springboot,
    // javaIcon,
    // dockerIcon,
    // graphqlIcon,
    // laravelIcon,
    // phpIcon,
    // mysqlIcon,
    // postgresIcon,
    // mongoIcon,
    // springboot,
    // javaIcon,
    // dockerIcon,
    // graphqlIcon,
    // laravelIcon,
    // phpIcon,
    // mysqlIcon,
    // postgresIcon,
    // mongoIcon,
  ];

  useEffect(() => {
    const container = containerRef.current;

    // Menghitung total lebar untuk animasi
    const totalWidth = container.scrollWidth / 2;

    // GSAP Timeline untuk animasi dari kiri ke kanan
    gsap.timeline({ repeat: -1, defaults: { ease: 'none', duration: 90 } })
      .fromTo(
        container,
        { x: 0 }, // Mulai dari posisi kiri
        { x: totalWidth } // Bergerak ke arah kanan
      )
      .set(container, { x: 0 }); // Reset ke posisi kiri saat selesai
    
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="overflow-hidden relative w-full">
        <div
          ref={containerRef}
          className="flex whitespace-nowrap gap-8 justify-center"
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

export default MarqueeBE;
