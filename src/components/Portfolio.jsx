import React from "react";
import { motion as m } from "framer-motion";

const Portfolio = () => {
  const Links = [
    {
      name: "Watchify",
      link: "https://prajwal036.github.io/Watchify/",
      scr: "./watchifyy.png",
    },
    {
      name: "Bucci Store",
      link: "https://buccistore.onrender.com/",
      scr: "./bucci.png",
    },
  ];
  return (
    <div
      className="h-auto w-full justify-center relative bg-blue-100"
      id="portfolio"
    >
      <div className="w-full h-48 text-5xl flex items-end pl-12 underline">
        <p>Portfolio</p>
      </div>
      <div className="w-full h-auto py-20 ">
        <div className="flex flex-col lg:flex-row gap-10 mx-10 px-10">
          {Links.map((link) => (
            <m.div
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center cursor-pointer overflow-hidden rounded-2xl"
            >
              <h1 className="text-5xl text-white absolute z-10">{link.name}</h1>
              <a href={link.link} target="_blank">
                <m.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  src={link.scr}
                  alt="website pic"
                  className="h-full rounded-2xl z-10 bg-black filter brightness-75 blur-sm"
                />
              </a>
            </m.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
