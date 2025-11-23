import { motion } from "framer-motion";
import sushil from "../assets/sushil.jpg";

export default function About() {
  const glows = [
    "-top-10 -left-10 w-[260px] h-[260px] opacity-20 blur-[100px]",
    "bottom-0 right-10 w-[340px] h-[340px] opacity-15 blur-[120px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] opacity-10 blur-[90px]",
  ];

  return (
    <section
      id="about"
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

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center gap-10 max-w-6xl w-full z-10 mx-auto">

        {/* Top Row - Photo + Intro */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">

          {/* Photo */}
          <motion.div
            className="shrink-0 flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 1.03 }} 
          >
            <img
              src={sushil}
              alt="Sushil Shai"
              className="
                w-36 h-36 
                sm:w-44 sm:h-44
                md:w-56 md:h-56 
                lg:w-64 lg:h-64 
                rounded-full object-cover border-4 border-white shadow-xl
              "
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="max-w-xl text-center md:text-left space-y-4 flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Hi, I'm Sushil Shai
            </h2>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I turn complex ideas into seamless, high-impact web experiences —
              building modern, scalable, and lightning-fast applications.
            </p>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I explore new technologies, design game systems, and push my creative boundaries in both web and game development.
            </p>
          </motion.div>

        </div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="
            mt-6 w-full max-w-4xl mx-auto
            grid grid-cols-1 sm:grid-cols-3 gap-6
            bg-white/5 backdrop-blur-xl border border-white/10
            rounded-2xl p-6 sm:p-8 shadow-xl
          "
        >
          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold">Experience</h3>
            <p className="text-gray-300 text-sm sm:text-base">2+ Years in Web Development</p>
          </div>

          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold">Speciality</h3>
            <p className="text-gray-300 text-sm sm:text-base">Frontend React, Animations & UI/UX</p>
          </div>

          <div className="text-center space-y-2">
            <h3 className="text-xl font-semibold">Current Focus</h3>
            <p className="text-gray-300 text-sm sm:text-base">Learning Game Dev & Full-Stack Skills</p>
          </div>
        </motion.div>

        {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mt-8 text-center md:text-left px-2"
      >
        <h3 className="text-2xl font-semibold mb-3">About Me</h3>

        <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
          I'm a developer who loves creating clean, interactive, and meaningful digital 
          experiences — from modern web apps to small game systems. I enjoy bringing ideas 
          to life with smooth UI, animations, and creative problem-solving.
        </p>

        <p className="text-gray-300 leading-relaxed text-base sm:text-lg mt-3">
          I'm always learning, experimenting, and building new things that help me grow 
          both as a web developer and a future game creator.
        </p>
      </motion.div>

      </div>
    </section>
  );
}
