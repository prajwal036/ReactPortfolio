import React from "react";
import { motion as m } from "framer-motion";

const About = () => {
  return (
    <div
      className="w-full h-full relative pt-20 flex justify-center"
      id="about"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1, y: 0 },
            hidden: { opacity: 0.6, y: 100 },
          }}
          className="flex flex-col relative z-10 justify-center px-10 md:pl-12"
        >
          <p className="text-5xl pb-10 underline">About</p>
          <p>
            Experienced and motivated full stack web developer with 1 year of
            experience in developing applications using React, Node.js,
            JavaScript, Tailwind CSS, MongoDB, PHP, Bootstrap, CSS, HTML, EJS,
            and Express. Skilled in developing high-quality websites with
            attention to detail and user experience.
          </p>
        </m.div>
        <m.div
          animate={{
            scale: [1, 1.1, 1.1, 1],
            x: [0, 5, 5, 0],
            y: [0, 5, 5, 0],
            rotate: [0, 20, 20, 0, -20, -20, 0],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <div className="w-full h-full flex justify-center items-center pb-24 lg:pb-0">
            <div className="w-56 h-56 bg-pink-200 relative left-[90px] top-[20px] rounded-full filter blur-lg"></div>
            <div className="w-56 h-56 bg-yellow-200 relative bottom-[100px] rounded-full filter blur-lg"></div>
            <div className="w-56 h-56 bg-red-300 relative right-[150px] top-[80px] rounded-full filter blur-lg "></div>
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default About;
