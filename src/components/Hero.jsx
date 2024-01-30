import React from "react";
import { motion as m } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full h-screen relative flex justify-center">
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0.6, scale: 0.7 },
        }}
        className="top-20 grid md:grid-cols-2 md:px-5 grid-cols-1 px-4"
      >
        <m.div className="flex flex-col md:justify-center justify-end">
          <h1 className="text-5xl">Hey! Im Prajwal.</h1>
          <h2 className="text-3xl">I'm a Full Stack Developer.</h2>
          <p>Welcome to my Page</p>
        </m.div>
        <div className="my-auto mr-0 max-h-[500px] max-w-[500px] rounded-[8%] overflow-hidden">
          <img src="./freshEdit.jpg" alt="my pic" />
        </div>
      </m.div>
      <svg class="animate-bounce w-6 h-6 "></svg>
    </div>
  );
};

export default Hero;
