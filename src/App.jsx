import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./componenter/Nav";
import Footer from "./componenter/Footer";
import Projects from "./Projects";
import Home from "./Home";

function App() {
  return (
    // <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    // </Router>
  );
}

export default App;
