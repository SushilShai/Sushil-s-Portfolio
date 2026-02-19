import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const BackEnd = () => {
    useGSAP(() => {
        gsap.from('.ls', {
            x: '-100%',
            duration: 3,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: ".Back",
                scroller: "body",
                // markers: true,
                start: "top 90%",
                end: "bottom 100%",
                triggerActions: "play none none reverse",
                scrub: true,
                
            }

        })
        gsap.from('.rs', {
            x: '100%',
            duration: 3,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: ".Back",
                scroller: "body",
                // markers: true,
                start: "top 90%",
                end: "bottom 100%",  
                triggerActions: "play none none reverse",
                scrub: true,
            }
        })
    }, [])
  return (
    <section className='Back bg-black h-screen w-full flex flex-row'>
        <div className='ls h-screen w-full bg-gray-900 flex items-center'>
            <h1 className='text-7xl font-[font-1] ml-60 transition-all text-white'>BackEnd</h1>
        </div>
        <div className='rs h-screen w-full bg-gray-800 flex items-center '>
            <h1 className='text-7xl font-[font-1] ml-60 transition-all text-white'>Developer</h1>
        </div>
    </section>
  )
}

export default BackEnd
