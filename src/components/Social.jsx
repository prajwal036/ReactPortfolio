import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";

const Social = () => {
  return (
    <div className="fixed h-auto md:w-10 w-8 left-0 top-[60vh] bg-blue-300 z-10 rounded-r-lg">
      <a href="https://github.com/prajwal036" target="_blank">
        <AiFillGithub className="w-full h-auto mb-1 p-1 hover:p-0" />
      </a>
      <a
        href="https://www.linkedin.com/in/prajwal-singh-ab0695117/"
        target="_blank"
      >
        <FaLinkedin className="w-full h-auto p-1 mb-1 hover:p-0" />
      </a>
      <a href="mailto:prajwal.singh890@gmail.com">
        <BiLogoGmail className="w-full h-auto p-1 mb-1 hover:p-0" />
      </a>
      <a href="./CV.pdf" download>
        <BsFillFileEarmarkArrowDownFill className="w-full h-auto p-1 mb-1 hover:p-0" />
      </a>
    </div>
  );
};

export default Social;
