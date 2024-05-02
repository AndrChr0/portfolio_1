import "./App.css";
import Hero from "./componenter/Hero";
import Nav from "./componenter/Nav";
import About from "./componenter/About";
import Skills from "./componenter/Skills";

function App() {
  return (
    <>
      <Nav />
      <main>
       <Hero />
       <About />
        <Skills />
      </main>
    </>
  );
}

export default App;
