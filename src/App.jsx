import Navbar from "./components/Navbar"
import Home from "./sections/Home"
import About from "./sections/About"
import Skills from "./sections/Skills"
import TextAnimation from "./components/TextAnimation"
import Projects from "./sections/Projects"
import Experience from "./sections/Experience"
import BackEnd from "./sections/BackEnd"
import Testimonials from "./sections/Testimonials"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import CustomCursor from "./components/CustomCursor"
import React from "react"
import IntroAnimation from "./components/IntroAnimation"
import ReactLenis from "lenis/react"

// import PartidesBackground from "./components/PartidesBackground"

export default function App(){
  const [introDone , setInroDone] = React.useState(false);
  return(
    <>
    {!introDone && <IntroAnimation onFinish={() => setInroDone(true)}/>}

    {introDone && (
    <div className="relative gradient text-white">
      <CustomCursor/>
      {/* <PartidesBackground/> */}
      <ReactLenis
      root 
        options={{
          lerp: 0.1,
          duration: 1.2,
          orientation: "vertical",
          smoothWheel: true,
          smoothTouch: false,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        }}
      >
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <TextAnimation />
      <Projects/>
      <Experience/>
      <BackEnd/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      </ReactLenis>
  
    </div>
    )}
    </>
  )
}