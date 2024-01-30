import React from "react";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="w-full h-[50vh] bg-indigo-600 flex flex-col  gap-y-3 justify-center items-center" id="contact">
      <div className="pb-2">
        <h2 className="text-white text-6xl pb-2">Let's Talk!</h2>
      </div>
      <div className="flex gap-4 p-4 overflow-visible">
        <a href="https://github.com/prajwal036" target="_blank">
          <VscGithub className="text-4xl text-white hover:text-5xl duration-75" />
        </a>
        <a
          href="https://www.linkedin.com/in/prajwal-singh-ab0695117/"
          target="_blank"
        >
          <FaLinkedin className="text-4xl text-white hover:text-5xl duration-75" />
        </a>
        <a href="mailto:prajwal.singh890@gmail.com" target="_blank">
          <BiLogoGmail className="text-4xl text-white hover:text-5xl duration-75" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
