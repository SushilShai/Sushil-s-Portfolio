import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
    useGSAP(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          tl.restart();
        }
      })


      gsap.to('.main', {
        transform: 'translateX(-100%)',
        scrollTrigger: {
                trigger: "#experience",
                scroller: "body",
                // markers: true,
                start: "top 0%",
                end: "bottom 20%",
                scrub: 1,
                pin: true,
              },
    
      })
    }, [])
  return (
    <section id='experience' className='pt-2 h-screen flex flex-col gap-5 bg-black overflow-hidden'>
      <div className='main '>
        <div className=''>
          <h2 className='text-[9.5vw] uppercase text-[#1cd8d2]'>Experience</h2>
        </div>
        <div className='ex1 w-[30vw] h-[30vw] mb-4 flex gap-4 bg-gray-800 rounded-tl-[120px] rounded-br-[120px] mx-90 hover:rounded-tl-[120px] hover:rounded-tr-[120px] hover:rounded-bl-[120px] transition-all duration-500'>
        </div>
        <div className='ex2 w-[30vw] h-[30vw] mb-4 flex gap-4 bg-gray-800 rounded-tl-[120px] rounded-br-[120px] mx-280 -mt-180 hover:rounded-tl-[120px] hover:rounded-tr-[120px] hover:rounded-bl-[120px] transition-all duration-500'>
        </div>
        <div className='ex3 w-[30vw] h-[30vw] mb-4 flex gap-4 bg-gray-800 rounded-tl-[120px] rounded-br-[120px] mx-480 -mt-100 hover:rounded-tl-[120px] hover:rounded-tr-[120px] hover:rounded-bl-[120px] transition-all duration-500'>
        </div>
        <div className='ex4 w-[30vw] h-[30vw] mb-4 flex gap-4 bg-gray-800 rounded-tl-[120px] rounded-br-[120px] mx-680 -mt-100 hover:rounded-tl-[120px] hover:rounded-tr-[120px] hover:rounded-bl-[120px] transition-all duration-500'>

        </div>
      </div>
    </section>
  )
}

export default Experience
