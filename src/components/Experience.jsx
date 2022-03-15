import React from 'react'
import q from "../images/q.jpg"
import lgm from "../images/lgm.jpg"
import "./Experience.css"
function Experience() {
  return (
      <div className='exp' id="experience">
      <div className='ehead'>Experience</div>
      <div className="cardc">
    <div className='item'>
    <div className="cr">
      <div className="wi">
<img src={q} alt="" />
</div>
<div className="desci">
<span className='ch'>Acadque</span><br/>
<span className='chd'>Web Development Intern</span>
<p>Here I developed their website named Acadque from scratch using React Js and its libraries
      </p>
      <span>Duration: 45 Days</span>
</div>

</div>
    </div>
    <div className='item'>
    <div className="cr">
      <div className="wi">
<img src={lgm} alt="" />
</div>
<div className="desci">
<span className='ch'>Lets Grow More</span><br/>
<span className='chd'>Web Development Intern</span>
<p>Here I was given some basic tasks which i have to perform using web technologies.
      </p>
      <span>Duration: 30 Days</span>
</div>

</div>
    </div>
    </div>
    </div>
  )
}

export default Experience