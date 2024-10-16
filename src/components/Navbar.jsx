import React from "react";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const handleScrollTo = (target) => {
    const targetElement = document.querySelector(target);
    const offset = target === "#hero" ? 0 : targetElement.offsetTop; // Atur offset untuk Hero ke 0

    gsap.to(window, {
      duration: 1, // Durasi scroll
      scrollTo: { y: offset, autoKill: false }, // Scroll ke target
    });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full mb-12 z-50">
      <nav className="flex justify-between bg-gray-500/40 backdrop-blur-lg rounded-full w-full max-w-lg mx-auto px-4 py-3 text-white text-sm">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("#hero");
          }}
          className="py-3 px-6 rounded-full hover:bg-gray-700/50 transition-colors duration-500"
        >
          Home
        </a>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("#about");
          }}
          className="py-3 px-6 rounded-full hover:bg-gray-700/50 transition-colors duration-500"
        >
          About
        </a>
        <a
          href="#project"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("#project");
          }}
          className="py-3 px-6 rounded-full hover:bg-gray-700/50 transition-colors duration-500"
        >
          Works
        </a>
        <a
          href="#achievement"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("#achievement");
          }}
          className="py-3 px-6 rounded-full hover:bg-gray-700/50 transition-colors duration-500"
        >
          Blogs
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("#contact");
          }}
          className="py-3 px-6 rounded-full hover:bg-gray-700/50 transition-colors duration-500"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
