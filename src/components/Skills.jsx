import React from 'react'
import "./Skills.css"
import { CircularProgressbar } from 'react-circular-progressbar';
import VisibilitySensor from "react-visibility-sensor";
import 'react-circular-progressbar/dist/styles.css';
function Skills() {
  return (
      <div className="skills" id="skills">
  <div className='skhead'>Technical Skills</div>
  <div className='skhead1'><span style={{color:"#28BCC0"}}>Web</span> Development</div>

<div className="allskills">
  <div className="skillsn">
  <h2>Html</h2>
  <VisibilitySensor>
            {({ isVisible }) => {const percentage = isVisible ? 85 : 0;
return(
               <CircularProgressbar value={percentage} text={`${percentage}%`}  />);}}
               </VisibilitySensor>
</div>
<div className="skillsn">
  <h2>Css</h2>
  <VisibilitySensor>
            {({ isVisible }) => {const percentage = isVisible ? 85 : 0;
return(
               <CircularProgressbar value={percentage} text={`${percentage}%`}  />);}}
               </VisibilitySensor>
</div>
<div className="skillsn">
  <h2>Javascript</h2>
  <VisibilitySensor>
            {({ isVisible }) => {const percentage = isVisible ? 60 : 0;
return(
               <CircularProgressbar value={percentage} text={`${percentage}%`}  />);}}
               </VisibilitySensor>
</div>
<div className="skillsn">
  <h2>React Js</h2>
  <VisibilitySensor>
            {({ isVisible }) => {const percentage = isVisible ? 70 : 0;
return(
               <CircularProgressbar value={percentage} text={`${percentage}%`}  />);}}
               </VisibilitySensor>
</div>
<div className="skillsn">
  <h2>Node Js</h2>
  <VisibilitySensor>
            {({ isVisible }) => {const percentage = isVisible ? 50 : 0;
return(
               <CircularProgressbar value={percentage} text={`${percentage}%`}  />);}}
               </VisibilitySensor>
</div>

</div>
<div className='skhead1'><span style={{color:"#28BCC0"}}>Programming </span>Languages</div>
<div className="allskills">
<div className="skillsn">
  <h2>Python</h2>
  <VisibilitySensor>
            {({ isVisible }) => {const percentage = isVisible ? 75 : 0;
return(
               <CircularProgressbar value={percentage} text={`${percentage}%`}  />);}}
               </VisibilitySensor>
</div>
<div className="skillsn">
  <h2>C++</h2>
  <VisibilitySensor>
            {({ isVisible }) => {const percentage = isVisible ? 70 : 0;
return(
               <CircularProgressbar value={percentage} text={`${percentage}%`}  />);}}
               </VisibilitySensor>
</div>

</div>
</div>
  )
}

export default Skills