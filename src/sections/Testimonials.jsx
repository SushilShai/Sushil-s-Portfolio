import { useGSAP } from "@gsap/react"
import { time } from "framer-motion"
import { main } from "framer-motion/client"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const Testimonials = () => {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.test',
        scroller: 'body',
        markers: true,
        start: 'top top',
        end: '+=1000',
        scrub: 1,
        pin: true,
      }
    })

    tl.to('.maindiv div', {
      scale: 0.8,
      duration: 1,
      ease: 'power2.out'
    })

      tl.to('.maindiv div', {
        rotationY: 180,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
      })
    
  }, [])
  
  return (
    <section className='test h-screen w-full bg-black flex flex-col items-center pt-20 gap-40'>
      <h1 className='text-7xl text-[#1cd8d2] uppercase'>Testimonials</h1>
      <div className='maindiv flex flex-row'>
        <div className='h-120 w-90 bg-gray-800'>

        </div>
        <div className='h-120 w-90 bg-gray-800'>

        </div>
        <div className='h-120 w-90 bg-gray-800'></div>
      </div>
    </section>
  )
}

export default Testimonials
