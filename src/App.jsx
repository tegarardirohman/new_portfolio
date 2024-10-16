import gsap from "gsap"
import About from "./components/About"
import Achievement from "./components/Achievement"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import _ScrollTrigger from "gsap/ScrollTrigger"
import TechStack from "./components/TechStack"
import MarqueeText from "./components/MarqueeText"
import useSmoothScroll from "./hooks/useSmoothScroll"
import useLocomotiveScroll from "./hooks/useLocomotiveScroll"


// register plugins
gsap.registerPlugin(_ScrollTrigger, ScrollToPlugin);

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MarqueeText />
      <Project />
      <Achievement />
      <Contact />
      <Footer />
    </>
  )
}

export default App
