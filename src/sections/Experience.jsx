import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PartidesBackground from "../components/PartidesBackground";

import fist from '../assets/1336647257.png'
gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#experience',
        scroller: 'body',
        // markers: true,
        start: 'top 0%',
        end: 'bottom 10%',
        scrub: 1,
        pin: true,
      }
    })

    // move the main container horizontally as the user scrolls
    tl.to('.main', {
      xPercent: -100,
      ease: 'none',
    })

    // after the main movement begins, smoothly zoom out ex3 & ex4
    tl.to(['.ex3', '.ex4'], {
      scale: 0.8,
      duration: 1.2,
      ease: 'power2.out',
      transformOrigin: '50% 50%'
    }, '+=0.15')

    // reveal ex5 and ex6 simultaneously with smoother easing
    tl.addLabel('revealEnd', '+=0.15')

    tl.fromTo('.ex5', {
      opacity: 0,
      x: -800,
      scale: 0.98,
    }, {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 1.1,
      ease: 'power2.out',
      onStart: () => {
        const el = document.querySelector('.endDiv')
        if (el) el.style.zIndex = '100'
      }
    }, 'revealEnd')

    tl.fromTo('.ex6', {
      opacity: 0,
      x: 800,
      scale: 0.98,
      zIndex: 0,
    }, {
      opacity: 1,
      x: 0,
      scale: 1,
      zIndex: 100,
      duration: 1.1,
      ease: 'power2.out',
      onStart: () => {
        const el = document.querySelector('.endDiv')
        if (el) el.style.zIndex = '100'
      }
    }, 'revealEnd')

  }, [])
  return (
    <section id='experience' className='pt-2 h-screen relative flex flex-col gap-5 bg-black overflow-hidden'>
      <PartidesBackground />
      <div className='main relative z-10'>
        <div className=''>
          <h2 className='text-[9.5vw] uppercase text-[#1cd8d2]'>Experience</h2>
        </div>
        <div className='ex1 overflow-hidden relative z-10 text-black flex-col w-[30vw] h-[30vw] mb-4 flex gap-4 bg-white rounded-tl-[120px] rounded-br-[120px] mx-90 hover:rounded-tl-[120px] hover:rounded-tr-[120px] hover:rounded-bl-[120px] hover:scale-105 hover:border-2 border-transparent hover:border-[#1cd8d2] transition-all duration-300'>
          <h2 className='ml-50 mt-6 text-5xl'>Backend Developer</h2>
          <div className='bg-cyan-400 mt-6 h-10 w-full overflow-hidden'></div>
          <h2 className='ml-2 mt-4 text-2xl'>Frontbase</h2>
          <ul>
            <li className='ml-5 mr-2 mt-2 text-sm'>Developed scalable backend services using Python and Spring Boot for web and mobile applications, ensuring robust data handling and API performance.</li>
            <li className='ml-5 mr-2 mt-2 text-sm'>Designed RESTful APIs with multi-threading optimizations, reducing response times by 35% for high-traffic platforms.</li>
            <li className='ml-5 mr-2 mt-2 text-sm'>Collaborated with frontend teams on ReactJS integrations and supported mobile app features for seamless cross-platform functionality.</li>
          </ul>
        </div>
        <div className='ex2 overflow-hidden relative z-10 cursor-pointer w-[30vw] h-[30vw] mb-4 flex flex-col gap-4 bg-gray-800 rounded-tl-[120px] rounded-br-[120px] mx-280 -mt-180 hover:rounded-tl-[120px] hover:rounded-tr-[120px] hover:rounded-bl-[120px] hover:scale-105 hover:border-2 border-transparent hover:border-[#1cd8d2] transition-all duration-300'>
          <h2 className='ml-50 mt-6 text-5xl'>Mapping Specialist</h2>
          <div className='bg-cyan-400 mt-6 h-10 w-full overflow-hidden'></div>
          <h2 className='ml-2 mt-4 text-2xl'>Galli Maps</h2>
          <ul>
            <li className='ml-5 mr-2 mt-2 text-sm'>Mapped and verified local streets, landmarks, and POIs in Chandragiri and Bagmati Province using GIS tools, ensuring 95%+ accuracy for Nepal's urban navigation app.</li>
            <li className='ml-5 mr-2 mt-2 text-sm'>Contributed to 500+ location updates, improving search functionality and user experience for daily commuters and businesses.</li>
            <li className='ml-5 mr-2 mt-2 text-sm'>Collaborated with dev team to integrate mapping data into ReactJS-based interfaces, blending geospatial work with frontend skills.</li>
          </ul>
        </div>
        <div className='ex3 overflow-hidden relative z-20 pointer-events-auto cursor-pointer w-[30vw] h-[30vw] mb-4 flex flex-col gap-4 bg-gray-800 rounded-tl-[120px] rounded-br-[120px] mx-480 -mt-100 hover:rounded-tl-[120px] hover:rounded-tr-[120px] hover:rounded-bl-[120px] hover:scale-105 hover:border-2 border-transparent hover:border-yellow-400 transition-all duration-300'>
          <h2 className='ml-50 mt-6 text-5xl'>Mapping Specialist</h2>
          <div className='bg-cyan-400 mt-6 h-10 w-full overflow-hidden'></div>
          <h2 className='ml-2 mt-4 text-2xl'>Galli Maps</h2>
          <ul>
            <li className='ml-5 mr-2 mt-2 text-sm'>Mapped and verified local streets, landmarks, and POIs in Chandragiri and Bagmati Province using GIS tools, ensuring 95%+ accuracy for Nepal's urban navigation app.</li>
            <li className='ml-5 mr-2 mt-2 text-sm'>Contributed to 500+ location updates, improving search functionality and user experience for daily commuters and businesses.</li>
            <li className='ml-5 mr-2 mt-2 text-sm'>Collaborated with dev team to integrate mapping data into ReactJS-based interfaces, blending geospatial work with frontend skills.</li>
          </ul>
        </div>
        <div className='ex4 overflow-hidden relative z-30 pointer-events-auto cursor-pointer w-[30vw] h-[30vw] mb-4 flex flex-col gap-4 bg-gray-800 rounded-tl-[120px] rounded-br-[120px] mx-680 -mt-100 hover:rounded-tl-[120px] hover:rounded-tr-[120px] hover:rounded-bl-[120px] hover:scale-105 hover:bg-gray-700 border-2 border-transparent hover:border-yellow-400 transition-all duration-300'>
          <h2 className='ml-50 mt-6 text-5xl'>Mapping Specialist</h2>
          <div className='bg-cyan-400 mt-6 h-10 w-full overflow-hidden'></div>
          <h2 className='ml-2 mt-4 text-2xl'>Galli Maps</h2>
          <ul>
            <li className='ml-5 mr-2 mt-2 text-sm'>Mapped and verified local streets, landmarks, and POIs in Chandragiri and Bagmati Province using GIS tools, ensuring 95%+ accuracy for Nepal's urban navigation app.</li>
            <li className='ml-5 mr-2 mt-2 text-sm'>Contributed to 500+ location updates, improving search functionality and user experience for daily commuters and businesses.</li>
            <li className='ml-5 mr-2 mt-2 text-sm'>Collaborated with dev team to integrate mapping data into ReactJS-based interfaces, blending geospatial work with frontend skills.</li>
          </ul>
        </div>
        <div className='endDiv relative z-50 pointer-events-none h-full'>
          
        <div className='ex5 relative z-60 pointer-events-none w-1/2 h-[55vw] mb-4 flex flex-col bg-white text-black  mx-420 -mt-205 items-center justify-center'>
            <h1 className='uppercase text-7xl ml-160'>Back</h1>
            <h1 className='uppercase text-7xl ml-165'>Deve</h1>
            <img src={fist} alt="fist" className="ml-167 w-1/4 h-1/4 mt-4" />
        </div>
        <div className='ex6 relative z-60 pointer-events-none w-1/2 h-[55vw] mb-4 flex flex-col bg-white text-black mx-630 -mt-238 items-center justify-center'>
            <h1 className='uppercase text-7xl mr-174 mt-1'>End</h1>
            <h1 className='uppercase text-7xl mr-155 '>loper</h1>
            <img src={fist} alt="fist" className="mr-165 w-1/4 h-1/4 mt-4 transform scale-x-[-1] " />
        </div>
        </div>
      </div>

    </section>
  )
}

export default Experience
