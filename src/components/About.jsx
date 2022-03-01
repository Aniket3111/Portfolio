import React from 'react'
import abtme from "../images/abtme.png"
import "./About.css"
function About() {
  return (
    <div id='about'>
        <div className='about-head'>About Me</div>
        <div className="about-info">
            <div className="about-image">
                <div className='abt-img-box'>
                <img src={abtme} alt="" />
                </div>
            </div>
            <div className="about-desc">
           <p className="about-p"><li> I am currently pursuing Bachelors of Enginnering from Sinhgad College of Engineering(Affivated with Savitribai Phule Pune University)</li></p>
          
           <p className="about-p"><li> Currently doing Web development and looking for new Opportunities</li></p>
           
            <p className="about-p"><li> I am a hardworker and honest individual.For me time is precious so I am a good timekeeper,as always willing to learn new skills.I am helpful and polite to others with good communication skills.</li></p>
          
            <p className="about-p"><li> According to me what matters the most is innovative ideas and i think i am good at it.</li></p>
            </div>
        </div>
    </div>
  )
}

export default About