import React,{useState} from 'react'
import style from "./navbar.module.css"
import cross from "../images/cross.png"
import About from './About';

import Home from './Home';
function Navbar() {
const [isVisisble, updateMenuVisible] = useState(false);
const menuopen=()=>{
    updateMenuVisible(true)
   }
   const menuclose = () => {
    updateMenuVisible(false);
  };
  return (

      <div className='navmain'>
              <div onClick={menuopen} className={`${style.hamburger} ${isVisisble && style.hide}`}>
    <div className='line' style={{height:"0.125rem",background:"black",width:"1.5rem",margin:"0.25rem 0" }}></div>
    <div  id='line' style={{height:"0.125rem",background:"black",width:"1.5rem",margin:"0.25rem 0" }}></div>
    <div  className='line' style={{height:"0.125rem",background:"black",width:"1.5rem",margin:"0.25rem 0" }}></div>
    </div>
    <div className={`${style.cross} ${isVisisble && style.show}`} onClick={menuclose}>
      <img src={cross} alt="" />
    </div>
    <div className = {`${style.nav} ${isVisisble && style.active}`}>
        <li className={style.navitem}><a  href ="/"> Home </a></li>
        <li className={style.navitem}><a href ="/about"> About</a></li>
        <li className={style.navitem}><a href ="/">Skills</a></li>
        <li className={style.navitem}><a href ="/">Experience</a></li>
        <li className={style.navitem}><a href ="/">Contact</a></li>
    </div>
    </div>
  );
}
export default Navbar