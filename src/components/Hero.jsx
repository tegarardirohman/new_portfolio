import React, { useEffect } from "react";
import myImg from "../assets/saya-cropped.png";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    // gsap.to(".parallax-bg", {
    //   yPercent: 0,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".parallax-bg",
    //     start: "top top",
    //     end: "bottom top",
    //     scrub: true,
    //     toggleActions: "restart none none none",
    //     invalidateOnRefresh: true,
    //   },
    // });

    gsap.to(".bg-text", {
      yPercent: -40,
      scale: 1.1,
      opacity: 0.8,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax-bg",
        start: "top top",
        end: "bottom top",
        scrub: true,
        toggleActions: "restart reverse restart reverse",
        invalidateOnRefresh: true,
      },
    });

    gsap.to(".my-img", {
      yPercent: -80,
      scale: 1.2,
      ease: "none",
      animationDuration: 1,
      scrollTrigger: {
        trigger: ".layer-out",
        start: "top top",
        end: "bottom top",
        scrub: true,
        toggleActions: "restart reverse restart reverse",
        invalidateOnRefresh: true,
      },
    });

    gsap.to(".layer-out", {
      paddingBottom: 0,
      paddingRight: 0,
      paddingLeft: 0,
      paddingTop: 0,
      scrollTrigger: {
        trigger: ".parallax-bg",
        start: "top top",
        end: "bottom top",
        scrub: true,
        toggleActions: "restart reverse restart reverse",
        invalidateOnRefresh: true,
      },
    });


  }, []);

  return (

    <section id="hero" className="fixed inset-0 bg-black p-12 parallax-bg bg-fixed -z-10 layer-out">
      <div className="bg-[#0d0d0d] w-full h-full rounded-xl">

        {/* Top Text */}
        <div className="w-full flex justify-between px-8 py-8">
          <div>
            <span className="text-xs font-bold text-white opacity-70">Hello, I am</span>
            <h3 className="text-base font-bold text-white opacity-90">Fullstack Web Developer</h3>
          </div>

          <div>
            <div className="text-xs font-bold text-white opacity-70 w-full text-end">Contact Me</div>
            <h3 className="text-base font-bold text-white opacity-90">tegarardirohman@gmail.com</h3>
          </div>
        </div>

        {/* Text Layer */}
        <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="bg-text relative text-center tracking-tighter leading-none overflow-hidden text-[4rem] xs:text-[6rem] sm:text-[10rem] md:text-[19rem] lg:text-[19rem] xl:text-[16rem] font-bold text-transparent bg-clip-text bg-white opacity-30 overflow-x-hidden">
            TEGAR ARDI ROHMAN
          </h1>
        </div>

        {/* Image Layer */}
        <div className="my-img absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-sm max-h-[36rem] rounded-full p-8 border-8 border-white border-opacity-30">
          <div className="bg-gray-500 rounded-full w-full h-full">
            <img
              src={myImg}
              alt="myImg"
              className="w-full h-full object-cover rounded-full object-left-top"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
