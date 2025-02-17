import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./Projects";

function Home() {
  return (
    <>
      <main className='bg-black text-white'>
        <Hero />
        <Projects />
        <About />
      </main>
    </>
  );
}

export default Home;
