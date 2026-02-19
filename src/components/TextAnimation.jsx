import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import image from '../assets/1053750-200.png';
const TextAnimation = () => {
  useEffect(() => {
    const onWheel = (e) => {
      if (e.deltaY > 0) {
        gsap.to('.child', {
          transform: 'translateX(-300%)',
          duration: 4,
          repeat: -1,
          ease: 'none',
          
        });

        gsap.to('.child img', {
          rotate: 180,
        });
      } else {
        gsap.to('.child', {
          transform: 'translateX(0%)',
          duration: 4,
          repeat: -1,
          ease: 'none',
          
        });

        gsap.to('.child img', {
          rotate: 0,
        });
      }
    };

    window.addEventListener('wheel', onWheel);
    return () => window.removeEventListener('wheel', onWheel);
  }, []);

  return (
      <div className=" Page2 h-full w-screen flex items-center overflow-hidden">
        <div className='main flex shrink-0 h-32 bg-[#1cd8d2]'>
          <div className='child text-black flex items-center gap-4 pl-5 pr-5 transform-translate-x(-100%)'>
            <h1 className='text-5xl'>THRIVE BEYOND LIMITS</h1>
            <img className='h-17' src={image} alt="Arrow" />
          </div>
          <div className='child text-black flex items-center gap-4 pl-5 pr-5 transform-translate-x(-100%)'>
            <h1 className='text-5xl'>THRIVE BEYOND LIMITS</h1>
            <img className='h-17' src={image} alt="Arrow" />
          </div>
          <div className='child text-black flex items-center gap-4 pl-5 pr-5 transform-translate-x(-100%)'>
            <h1 className='text-5xl'>THRIVE BEYOND LIMITS</h1>
            <img className='h-17' src={image} alt="Arrow" />
          </div>
          <div className='child text-black flex items-center gap-4 pl-5 pr-5 transform-translate-x(-100%)'>
            <h1 className='text-5xl'>THRIVE BEYOND LIMITS</h1>
            <img className='h-17' src={image} alt="Arrow" />
          </div>
          <div className='child text-black flex items-center gap-4 pl-5 pr-5 transform-translate-x(-100%)'>
            <h1 className='text-5xl'>THRIVE BEYOND LIMITS</h1>
            <img className='h-17' src={image} alt="Arrow" />
          </div>
          <div className='child text-black flex items-center gap-4 pl-5 pr-5 transform-translate-x(-100%)'>
            <h1 className='text-5xl'>THRIVE BEYOND LIMITS</h1>
            <img className='h-17' src={image} alt="Arrow" />
          </div>
          <div className='child text-black flex items-center gap-4 pl-5 pr-5 transform-translate-x(-100%)'>
            <h1 className='text-5xl'>THRIVE BEYOND LIMITS</h1>
            <img className='h-17' src={image} alt="Arrow" />
          </div>
          <div className='child text-black flex items-center gap-4 pl-5 pr-5 transform-translate-x(-100%)'>
            <h1 className='text-5xl'>THRIVE BEYOND LIMITS</h1>
            <img className='h-17' src={image} alt="Arrow" />
          </div>
          <div className='child text-black flex items-center gap-4 pl-5 pr-5 transform-translate-x(-100%)'>
            <h1 className='text-5xl'>THRIVE BEYOND LIMITS</h1>
            <img className='h-17' src={image} alt="Arrow" />
          </div>
          <div className='child text-black flex items-center gap-4 pl-5 pr-5 transform-translate-x(-100%)'>
            <h1 className='text-5xl'>THRIVE BEYOND LIMITS</h1>
            <img className='h-17' src={image} alt="Arrow" />
          </div>
          <div className='child text-black flex items-center gap-4 pl-5 pr-5 transform-translate-x(-100%)'>
            <h1 className='text-5xl'>THRIVE BEYOND LIMITS</h1>
            <img className='h-17' src='src/assets/1053750-200.png' alt="Arrow" />
          </div>
        </div>
      </div>
  )
}

export default TextAnimation
