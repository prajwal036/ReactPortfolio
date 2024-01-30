import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Social from "./components/Social";
import Portfolio from "./components/Portfolio";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <AnimatePresence>
        <Navbar />
        <div className="w-full scroll-smooth h-screen bg-blue-100">
          <Hero className="bg-gradient-to-r from-violet-500 to-fuchsia-500" />
          <About />
          <Social />
          <Portfolio />
          <Footer />
        </div>
      </AnimatePresence>
    </>
  );
}

export default App;
