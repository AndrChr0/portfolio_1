import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./Home";
import RubiksGame from "./RubiksGame";
import Process from "./Process";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rubiks' element={<RubiksGame />} />

        <Route path='/:project' element={<Process />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
