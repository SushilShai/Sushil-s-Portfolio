import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import pythonIcon from "../assets/icon/5968350.png";
import phpIcon from "../assets/icon/5968332.png";
import reactIcon from "../assets/icon/React-icon.svg.png";
import rustIcon from "../assets/icon/rust-logo-512x512.png";
import htmlIcon from "../assets/icon/html 5.png";
import cssIcon from "../assets/icon/bootstrap-social-media-icons-html-css-js-logo-11563293145uql7yehdq3.png";
import jsIcon from "../assets/icon/javascript.png";
import tailwindIcon from "../assets/icon/Tailwind_CSS_Logo.svg.png";
import nodeIcon from "../assets/icon/Node.js_logo.svg.png";
import expressIcon from "../assets/icon/express-js.png";

gsap.registerPlugin(ScrollTrigger);

const glows = [
  "-top-10 -left-10 w-[260px] h-[260px] opacity-20 blur-[100px]",
  "bottom-0 right-10 w-[340px] h-[340px] opacity-15 blur-[120px] delay-300",
  "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] opacity-10 blur-[90px]",
];

const Skills = () => {
  useEffect(() => {
    gsap.fromTo(
      ".skill",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "sine.inOut",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".skill-container",
          start: "top 60%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".skill-heading",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: ".skill-heading",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      id="skills"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden px-4 sm:px-6 md:px-10"
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

      <div className="skill-container relative flex flex-col items-center justify-center gap-40 max-w-6xl w-full z-10 mx-auto h-full py-20">
        <h2 className="skill-heading text-4xl text-[#1cd8d2] font-bold mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 w-full">
          {/* Example Skill Item */}
          <div className="skill group hover:z-10 cursor-pointer flex flex-col items-center gap-1 p-2 bg-transparent rounded-lg shadow-md">
            <div className="transform transition-transform duration-300 ease-out group-hover:scale-110 flex flex-col items-center">
              <img src={pythonIcon} alt="Python" className="w-12 h-12" />
              <span className="text-sm font-medium">Python</span>
            </div>
          </div>

          <div className="skill group hover:z-10 cursor-pointer flex flex-col items-center gap-1 p-2 bg-transparent rounded-lg shadow-md">
            <div className="transform transition-transform duration-300 ease-out group-hover:scale-110 flex flex-col items-center">
              <img src={phpIcon} alt="PHP" className="w-12 h-12" />
              <span className="text-sm font-medium">PHP</span>
            </div>
          </div>

          <div className="skill group hover:z-10 cursor-pointer flex flex-col items-center gap-1 p-2 bg-transparent rounded-lg shadow-md">
            <div className="transform transition-transform duration-300 ease-out group-hover:scale-110 flex flex-col items-center">
              <img src={reactIcon} alt="React" className="w-13 h-12" />
              <span className="text-sm font-medium">React</span>
            </div>
          </div>

          {/* Repeat for other skills */}
          <div className="skill group hover:z-10 cursor-pointer flex flex-col items-center gap-1 p-2">
            <img src={rustIcon} alt="Rust" className="w-12 h-12" />
            <span className="text-sm font-medium">Rust</span>
          </div>

          <div className="skill group hover:z-10 cursor-pointer flex flex-col items-center gap-1 p-2">
            <img src={htmlIcon} alt="HTML" className="w-12 h-12" />
            <span className="text-sm font-medium">HTML</span>
          </div>

          <div className="skill group hover:z-10 cursor-pointer flex flex-col items-center gap-1 p-2">
            <img src={cssIcon} alt="CSS" className="w-12 h-12" />
            <span className="text-sm font-medium">CSS</span>
          </div>

          <div className="skill group hover:z-10 cursor-pointer flex flex-col items-center gap-1 p-2">
            <img src={jsIcon} alt="JavaScript" className="w-12 h-12" />
            <span className="text-sm font-medium">JavaScript</span>
          </div>

          <div className="skill group hover:z-10 cursor-pointer flex flex-col items-center gap-1 p-2">
            <img src={tailwindIcon} alt="Tailwind CSS" className="w-15 h-12" />
            <span className="text-sm font-medium">Tailwind CSS</span>
          </div>

          <div className="skill group hover:z-10 cursor-pointer flex flex-col items-center gap-1 p-2">
            <img src={nodeIcon} alt="Node.js" className="w-18 h-12" />
            <span className="text-sm font-medium">Node.js</span>
          </div>

          <div className="skill group hover:z-10 cursor-pointer flex flex-col items-center gap-1 p-2">
            <img src={expressIcon} alt="Express.js" className="w-12 h-12" />
            <span className="text-sm font-medium">Express.js</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
