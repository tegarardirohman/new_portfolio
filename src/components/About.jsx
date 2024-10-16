import React, { useEffect, useState } from "react";
import Marquee from "./about/Marquee";
import MarqueeBE from "./about/MarqueeBE";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import TechStack from "./about/TechStack";

// images
import reactIcon from "../assets/icon/icons8-react-native-100.png";
import jsIcon from "../assets/icon/icons8-javascript-96.png";
import htmlIcon from "../assets/icon/icons8-html-96.png";
import cssIcon from "../assets/icon/icons8-css-96.png";
import tailwindIcon from "../assets/icon/icons8-tailwind-css-96.png";
import bootstrapIcon from "../assets/icon/icons8-bootstrap-96.png";
import figmaIcon from "../assets/icon/icons8-figma-96.png";

// images be
import springboot from "../assets/icon/icons8-spring-boot-96.png";
import javaIcon from "../assets/icon/icons8-java-96.png";
import dockerIcon from "../assets/icon/icons8-docker-96.png";
import graphqlIcon from "../assets/icon/icons8-graphql-96.png";
import laravelIcon from "../assets/icon/icons8-laravel-96.png";
import phpIcon from "../assets/icon/icons8-php-80.png";
import mysqlIcon from "../assets/icon/icons8-mysql-96.png";
import postgresIcon from "../assets/icon/icons8-postgres-96.png";
import mongoIcon from "../assets/icon/icons8-mongo-db-96.png";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import gitIcon from "../assets/icon/icons8-github-128.png";
import gitLab from "../assets/icon/icons8-gitlab-96.png"; 


gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imagesFe = [
    jsIcon,
    reactIcon,
    tailwindIcon,
    bootstrapIcon,
    htmlIcon,
    cssIcon,
    figmaIcon,
  ];

  const imagesBe = [
    javaIcon,
    springboot,
    phpIcon,
    laravelIcon,
    graphqlIcon,
    postgresIcon,
    mysqlIcon,
    mongoIcon,
  ];

  const imagesDev = [
    dockerIcon,
    gitIcon,
    gitLab,
  ];

  // const [marqueeMode, setMarqueeMode] = useState('grayscale');
  // const [marqueeBEMode, setMarqueeBEMode] = useState('grayscale');

  // useEffect(() => {
  //   gsap.to({}, {
  //     scrollTrigger: {
  //       trigger: '.marquee-trigger',
  //       start: 'top center',
  //       onEnter: () => setMarqueeMode('normal'),
  //       onLeaveBack: () => setMarqueeMode('grayscale'),
  //       scrub: true
  //     }
  //   });

  //   gsap.to({}, {
  //     scrollTrigger: {
  //       trigger: '.marquee-trigger',
  //       start: 'top center',
  //       onEnter: () => setMarqueeBEMode('normal'),
  //       onLeaveBack: () => setMarqueeBEMode('grayscale'),
  //       scrub: true
  //     }
  //   });

  // }, []);

  useEffect(() => {
    gsap.fromTo(
      ".circle-1",
      {
        xPercent: -100, // Memulai dari posisi di luar layar sebelah kiri
        scale: 0, // Memulai dengan skala lebih besar
      },
      {
        xPercent: 0, // Masuk ke tengah layar saat elemen terlihat
        scale: 1, // Skala kembali normal
        ease: "power3.inOut", // Tidak ada easing
        transitionDuration: "0.7s",
        scrollTrigger: {
          trigger: "#about", // Memicu animasi saat elemen about terlihat
          start: "top 120%", // Animasi dimulai ketika elemen top 80% terlihat (20% bagian bawah viewport)
          end: "top 0%", // Animasi berakhir saat elemen berada di 50% bagian atas viewport
          scrub: true, // Animasi mengikuti scroll
          toggleActions: "restart pause reverse pause",
          invalidateOnRefresh: true,
        },
      }
    );

    gsap.fromTo(
      ".circle-2",
      {
        xPercent: 100, // Memulai dari posisi di luar layar sebelah kiri
        scale: 0, // Memulai dengan skala lebih besar
      },
      {
        xPercent: 0, // Masuk ke tengah layar saat elemen terlihat
        scale: 1, // Skala kembali normal
        ease: "power3.inOut", // Tidak ada easing
        transitionDuration: "0.7s",
        transitionProperty: "all",
        scrollTrigger: {
          trigger: "#about", // Memicu animasi saat elemen about terlihat
          start: "top 100%", // Animasi dimulai ketika elemen top 80% terlihat (20% bagian bawah viewport)
          end: "top 0%", // Animasi berakhir saat elemen berada di 50% bagian atas viewport
          scrub: true, // Animasi mengikuti scroll
          toggleActions: "restart pause reverse pause",
          invalidateOnRefresh: true,
        },
      }
    );
  }, []);

  return (
    <div
      id="about"
      className="w-full h-full min-h-screen mt-[100vh] relative bg-white text-gray-950 overflow-hidden"
    >
      {/* <div className="circle-1 absolute -top-[21rem] -left-[21rem] rounded-full w-1/2 h-auto aspect-square bg-white opacity-5 border-8 border-white"></div> */}
      {/* <div className="circle-2 absolute -top-[21rem] -right-[21rem] rounded-full w-1/2 h-auto aspect-square opacity-5 border-[2rem] border-black shadow-2xl shadow-white"></div> */}

      <div className="w-full max-w-screen-xl mx-auto mt-24">

        <div className="flex gap-8">
          {/* about me */}
          <div className="w-full bg-black bg-opacity-5 p-8 rounded-2xl">
            <h2 className="text-2xl w-full uppercase font-bold mb-4">ABOUT ME</h2>
            <p className="text-xl w-full">
              Hi! I’m Tegar Ardi Rohman. I honed my skills in Java Spring, React,
              and React Native through a specialized bootcamp, building robust web
              applications. I'm passionate about leveraging modern technologies to
              create impactful solutions and thrive in collaborative environments
              tackling complex challenges!
            </p>
          </div>

          {/* social */}
          <div className="w-1/4 bg-black bg-opacity-5 p-8 rounded-2xl">
            <div className="w-full flex gap-8 py-4 mt-4 justify-evenly">
              <a
                href="https://github.com/tegarardirohman"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={28} className="hover:text-black transition-all duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/tegarardi-rohman/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={28} className="hover:text-blue-700 transition-all duration-300" />
              </a>
              <a
                href="https://instagram.com/tegarardirohman"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={28} className="hover:text-pink-500 transition-all duration-300" />
              </a>
            </div>

            <button className="w-full px-8 py-3 bg-black text-white rounded-full mt-8 hover:opacity-50 transition duration-300">
            View Resume
          </button>

          </div>


        </div>

        <div className="flex justify-between mt-8 gap-8">
          <div className="w-full bg-black bg-opacity-5 rounded-lg p-8">
            <h2 className="text-2xl w-full uppercase font-bold mb-4">
              FRONTEND
            </h2>
            <TechStack images={imagesFe} />
          </div>

          <div className="w-full bg-black bg-opacity-5 rounded-lg p-8">
            <h2 className="text-2xl w-full uppercase font-bold mb-4">
              Backend
            </h2>

            <TechStack images={imagesBe} />
          </div>

          <div className="w-full bg-black bg-opacity-5 rounded-lg p-8">
            <h2 className="text-2xl w-full uppercase font-bold mb-4">
              DEV-OPS
            </h2>

            <TechStack images={imagesDev} />
          </div>
        </div>
      </div>

      <div className="w-full max-w-screen-xl my-auto h-full m-auto p-6 flex items-center justify-between gap-10">
        {/* <div className="absolute top-0 left-0 right-0 bottom-0">
          <TechStack images={imagesFe} />
        </div> */}



      </div>

      {/* <div className="absolute top-4 marquee-trigger [clip-path:ellipse(100%_70%_at_50%_50%)]">
        <Marquee mode={marqueeMode} />
      </div>
    
      <div className="absolute bottom-4 marqueeBE-trigger">
        <MarqueeBE mode={marqueeBEMode} />
      </div> */}
    </div>
  );
};

export default About;
