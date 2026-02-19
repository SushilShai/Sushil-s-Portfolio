
import { useGSAP } from '@gsap/react';
import ProjectCard from '../components/ProjectCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



 gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

  const projects = [{
    image1: '../src/assets/boy.jpg',
    image2: 'src/assets/Astra.png'
  },{
    image1: 'src/assets/avator.png',
    image2: 'src/assets/photo3.png'
  },{
    image1: 'src/assets/photo1.JPG',
    image2: 'src/assets/photo2.PNG'
  }
]

  const glows = [
    "-top-10 -left-10 w-[260px] h-[260px] opacity-20 blur-[100px]",
    "bottom-0 right-10 w-[340px] h-[340px] opacity-15 blur-[120px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] opacity-10 blur-[90px]",
  ];


  useGSAP(() => {
    gsap.from('.hero', {
      height:'50px',
      stagger:{
        amount: 0.2,
      },

      scrollTrigger:{
        trigger:'.parent',
        // markers: true,
        start:"top 100%",
        end:"top -150%",
        scrub: true,
        triggerActions: "play none none reverse",

      }
    })
  })
    

  return (

  <section className="h-[275vh] w-full bg-black  ">
    <div className="p-2 bg-black">
      <div className='pt-[25vh]'>
        <h2 className='text-[9.5vw] uppercase text-[#1cd8d2] flex justify-center'>Projets</h2>
      </div>
        <div className='-mt-12 parent'>
          {projects.map((elem, index) => (
             <div key={index} className='hero w-full h-[700px] mb-4 flex gap-4 relative '>
            <ProjectCard  image1={elem.image1} image2={elem.image2} />
          </div>
          ))}
      </div>
    </div>

    </section>
  
  )
}

export default Projects
