import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Projects from "./OLDProjects";
import Home from "./Home";
import RubiksGame from "./RubiksGame";
import Process from "./Process";

function App() {
  return (
    // <Router>
    <div className='App'>
      {/* <Nav /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:project' element={<Process />} />
        {/* <Route path='/projects' element={<Projects />} /> */}
        <Route path='*' element={<h1>Not Found</h1>} />
        {/* <Route path='/rubiks' element={<RubiksGame />} /> */}
      </Routes>
      <Footer />
    </div>
    // </Router>
  );
}

export default App;
