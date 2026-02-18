import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import ContactImg from "../assets/icon/Contact-Us.png";
import { motion } from "framer-motion";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const form = useRef();
  useEffect(() => {
    gsap.fromTo(".details > *", {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power4.inOut",
      stagger: {
        each: 0.2,

      },
      scrollTrigger: {
        trigger: ".details",
        start: "top -110%",
        end: "bottom -80%",
        // markers: true,
        toggleActions: "play none none reverse",
      },
    });

    gsap.fromTo(".form", {
      opacity: 0,
      x: 50,
    }, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".form",
        start: "top -110%",
        end: "bottom -80%",
        // markers: true,
        toggleActions: "play none none reverse",
      },
    });
  }, [])
  const socials = [
    { Icon: FaFacebook, label: "FB", href: "https://www.facebook.com/sushil.shahi.7311" },
    { Icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/h4ku_dai/" },
    { Icon: FaLinkedin, label: "Linkedin", href: "https://www.linkedin.com/in/sushil-shai-1511b1329/" },
    { Icon: FaGithub, label: "Github", href: "https://github.com/SushilShai" }
  ]

  const glows = [
    "-top-10 -left-10 w-[260px] h-[260px] opacity-20 blur-[100px]",
    "bottom-0 right-10 w-[340px] h-[340px] opacity-15 blur-[120px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] opacity-10 blur-[90px]",
  ];

  // framer-motion variants for social icons glow effect
  const glowVariants = {
    initial: { opacity: 0.9, scale: 1 },
    hover: { opacity: 1, scale: 1.12, transition: { type: 'spring', stiffness: 300 } },
    tap: { scale: 0.95 },
  };


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pmj87kk', 'template_pkaayng', form.current, {
        publicKey: 'rjBsoq6S_QQDvgSzc',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section
      id="contact"
      className="h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden px-5 py-20 "
    >
      {/* Glowing Background */}
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-linear-to-r from-[#302b63] via-[#1cd8d2] animate-pulse ${c}`}
          ></div>
        ))}
      </div>
      {/* Details */}
      <div className="details absolute top-20 left-30 flex flex-col items-center gap-3">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text
            bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg">Contact</h2>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text
            bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg">REACH OUT ME</h2>
         <p></p>   
        <img src="src/assets/icon/Contact-Us.png" className='h-90' alt="contact" />    
        <h2 className="text-4xl font-bold text-transparent bg-clip-text
            bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg ">+977 9812345678</h2>
        <h4 className="text-5xl text-[#1cd8d2]">sushilshahi123@gmail.com</h4>
        <div className="mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start">
              {socials.map(({ Icon, label, href }) => (
                <motion.a
                  href={href}
                  key={label}
                  target="_blank"
                  aria-label={label}
                  rel="noopener noreferrer"
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="text-white hover:text-[#1cd8d2] transition-colors"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
      </div>
      {/* Form  */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className='form absolute right-20 top-1/2 transform -translate-y-1/2 z-20 w-[320px] sm:w-[420px] md:w-[480px] p-6 flex flex-col items-start gap-4 border border-[#1cd8d2] rounded-2xl bg-black/60'
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg">ANY PROJECT?</h2>
        <label className='text-[#1cd8d2]'>Name</label>
        <input className='w-full border border-[#1cd8d2] rounded-md p-2 bg-transparent' type="text" name="from_name" required />
        <label className='text-[#1cd8d2]'>Email</label>
        <input className='w-full border border-[#1cd8d2] rounded-md p-2 bg-transparent' type="email" name="from_email" required />
        <label className='text-[#1cd8d2]'>Message</label>
        <textarea className='w-full border border-[#1cd8d2] rounded-md p-2 bg-transparent h-40' name="message" required />
        <input
          className='mt-2 self-end px-6 py-3 rounded-full text-lg font-medium text-white bg-linear-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] shadow-lg hover:scale-105 transition-all'
          type="submit"
          value="Send"
        />
      </form>
    
      
    </section>
  );
};

export default Contact;

