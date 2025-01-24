import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Projects from "./Projects";
import Home from "./Home";
import RubiksGame from "./RubiksGame";

function App() {
  return (
    // <Router>
    <div className='App overflow-x-hidden'>
      {/* <Nav /> */}
      <Routes>
        <Route path='/' element={<Home />} />
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
