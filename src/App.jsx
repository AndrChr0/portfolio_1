import "./App.css";
import Hero from "./componenter/Hero";
import Nav from "./componenter/Nav";
import About from "./componenter/About";
import Skills from "./componenter/Skills";
import Footer from "./componenter/Footer";

function App() {
  return (
    <>
      <Nav />
      <main>
       <Hero />
       <About />
        <Skills />
      </main>
      <Footer />
    </>
  );
}

export default App;
