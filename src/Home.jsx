import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Project from "./components/Project";
import { useEffect, useState } from "react";
import Projects from "./Projects";
import Process from "./Process";

function Home() {
  return (
    <>
      <main className='bg-black text-white'>
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
}

export default Home;
