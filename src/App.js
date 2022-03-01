import "../src/components/Home.css"
import React from 'react';
import About from './components/About';
import FloatingActionButtons from './components/fab';
import Home from './components/Home';
import Navbar from "./components/Navbar"
const App = () => {
  return (
    <>
   <Navbar/>
   <Home/>
   <div className="fab">
    <FloatingActionButtons/>
    </div>
   <About/>
   </>
  );
}

export default App;
