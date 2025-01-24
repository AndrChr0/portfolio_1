import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";

function Home() {
  return (
    <>
      <main className='bg-black text-white'>
        <Hero />
        <div className='h-screen'>
          <About />
          <Skills />
        </div>
      </main>
    </>
  );
}

export default Home;
