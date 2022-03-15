import "../src/components/Home.css"
import React from 'react';
import About from './components/About';
import FloatingActionButtons from './components/fab';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
const App = () => {
  return (
    <BrowserRouter>
    <>
   <Home/>
   <div className="fab">
    <FloatingActionButtons/>
    </div>
   
   <About/>
   <Skills/>
   <Experience/>
   <Contact/>
   <Routes>
    <Route path="/#about" element={<About/>}>
      </Route>
      </Routes>
      <Routes>
    <Route path="/#skills" element={<Skills/>}>
      </Route>
      </Routes>
      <Routes>
    <Route path="/#experience" element={<Experience/>}>
      </Route>
      </Routes>
      <Routes>
    <Route path="/#contact" element={<Contact/>}>
      </Route>
      </Routes>
   </>
   </BrowserRouter>

  );
}

export default App;
