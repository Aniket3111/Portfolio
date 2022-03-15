import React from 'react'
import "./Home.css"
import resume from "../files/AniketRajani_Resume.pdf"
import emoji from "../images/ar.png"
import FloatingActionButtons from './fab'
import Navbar from './Navbar'
function Home() {
  return (
    <div className='main' id="home">
      <Navbar/>
      <div className="i">
     <div className="left">
 <div className="left-wrapper">
 <h2 className='intro'> Hello My Name is</h2>
 <div className='name'>Aniket Rajani</div>
 <div className="i-title">
   <div className='i-am'>I am</div>
   <div className="i-title-wrapper">
     <div className="i-title-item">
       Front-End Developer
     </div>
     <div className="i-title-item">
       Software Developer
     </div>
     <div className="i-title-item">
       CS Student
     </div>
   </div>
 </div>
 <a className='resume' href={resume}><button className='download'>Download Resume</button></a>
 </div>
     </div>
     <div className="right">
       <div className="i-bg">
   <img  className="me" src={emoji} alt="" />
   </div>
     </div>
    </div>
    <div className="fab">
    <FloatingActionButtons/>
    </div>
    </div>
  )
}

export default Home