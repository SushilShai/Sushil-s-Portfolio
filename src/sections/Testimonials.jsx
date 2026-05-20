import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import pcImg from "../assets/grand-theft-auto-v-scenic-red-sky-silhouette-wallpaper-preview.jpg"
import PartidesBackground from "../components/PartidesBackground"

gsap.registerPlugin(ScrollTrigger)


const Testimonials = () => {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.test',
        scroller: 'body',
        start: 'top top',
        end: '+=100',
        scrub: 1,
        pin: true,
      }
    })
    
    tl.to('.maindiv div', {
      scale: 0.7,
      duration: 1,
      ease: 'power2.out',
      onComplete: () => {
        const cards = document.querySelectorAll('.maindiv div')
        cards.forEach(card => {
          const heading = card.querySelector('h2')
          const para = card.querySelector('p')
          if (heading) {
            heading.style.opacity = '1'
            heading.style.transform = 'rotateY(180deg)'
          }
          if (para) {
            para.style.opacity = '1'
            para.style.transform = 'rotateY(180deg)'
          }
        })
      }
    })

      // rotate complent then remove background image
     
      const cards = gsap.utils.toArray('.maindiv div')
      const startAfter = tl.duration()

      cards.forEach((card, i) => {
        // capture original/computed background styles so we can restore them
        const comp = window.getComputedStyle(card)
        const orig = {
          backgroundImage: card.style.backgroundImage || comp.backgroundImage,
          backgroundSize: card.style.backgroundSize || comp.backgroundSize,
          backgroundPosition: card.style.backgroundPosition || comp.backgroundPosition,
          backgroundRepeat: card.style.backgroundRepeat || comp.backgroundRepeat,
        }

        tl.to(card, {
          rotationY: 180,
          duration: 1,
          ease: 'power2.out',
          transformOrigin: 'center center',
          onStart: () => {
            card.style.backgroundImage = 'none'
          },
          onComplete: () => {
            // reveal the inner heading when rotation completes and counter-rotate it
            const heading = card.querySelector('h2')
            if (heading) {
              heading.style.opacity = '1'
              heading.style.transform = 'rotateY(180deg)'
            }
            const para = card.querySelector('p')
            if (para) {
              para.style.opacity = '1'
              para.style.transform = 'rotateY(180deg)'
            }
            card.style.backgroundImage = 'none'
          },
          onReverseComplete: () => {
            // hide the heading again and restore background
            const heading = card.querySelector('h2')
            if (heading) {
              heading.style.opacity = '0'
              heading.style.transform = 'rotateY(0deg)'
            }
            const para = card.querySelector('p')
            if (para) {
              para.style.opacity = '0'
              para.style.transform = 'rotateY(0deg)'
            }
            card.style.backgroundImage = orig.backgroundImage
            card.style.backgroundSize = orig.backgroundSize
            card.style.backgroundPosition = orig.backgroundPosition
            card.style.backgroundRepeat = orig.backgroundRepeat
          }
        })
      })
    
  }, [])
  
  return (
    <section className='test h-screen w-full bg-black flex flex-col items-center pt-20 gap-40'>
      <PartidesBackground />
      <h1 className='text-7xl text-[#1cd8d2] uppercase'>Testimonials</h1>
      <div className='maindiv flex flex-row'>
        <div
          className='h-120 w-90 bg-white flex flex-col relative'
          style={{
            backgroundImage: `url(${pcImg})`,
            backgroundSize: '300% 100%',
            backgroundPosition: '0% 50%',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h2 className="text-2xl text-black absolute opacity-0 mt-5 ml-25 transition duration-200 transform" style={{backfaceVisibility: 'visible'}}>Testimonial 1</h2>
          <p className="absolute left-4 text-black mt-25 opacity-0 transition duration-200 transform" style={{backfaceVisibility: 'visible'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. </p>
        </div>

        <div
          className='h-120 w-90 bg-red-500 flex flex-col relative'
          style={{
            backgroundImage: `url(${pcImg})`,
            backgroundSize: '300% 100%',
            backgroundPosition: '50% 50%',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h2 className="text-2xl text-white absolute opacity-0 mt-5 ml-25 transition duration-200 transform" style={{backfaceVisibility: 'visible'}}>Testimonial 2</h2>
          <p className="absolute left-4 text-white mt-25 opacity-0 transition duration-200 transform" style={{backfaceVisibility: 'visible'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. </p>
        </div>

        <div
          className='h-120 w-90 bg-blue-500 flex flex-col relative'
          style={{
            backgroundImage: `url(${pcImg})`,
            backgroundSize: '300% 100%',
            backgroundPosition: '100% 50%',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h2 className="text-2xl text-white absolute opacity-0 mt-5 ml-25 transition duration-150 transform" style={{backfaceVisibility: 'visible'}}>Testimonial 3</h2>
          <p className="absolute left-4 text-white mt-25 opacity-0 transition duration-200 transform" style={{backfaceVisibility: 'visible'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. </p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
