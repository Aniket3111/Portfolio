import React,{useState} from 'react'
import style from "./navbar.module.css"
import cross from "../images/cross.png"
import {HashLink as Link } from 'react-router-hash-link';
function Navbar() {
const [isVisisble, updateMenuVisible] = useState(false);
const menuopen=()=>{
    updateMenuVisible(true)
   }
   const menuclose = () => {
    updateMenuVisible(false);
  };
  return (

      <div className={style.navmain}>
              <div onClick={menuopen} className={`${style.hamburger} ${isVisisble && style.hide}`}>
    <div className='line' style={{height:"0.125rem",background:"black",width:"1.5rem",margin:"0.25rem 0" }}></div>
    <div  id='line' style={{height:"0.125rem",background:"black",width:"1.5rem",margin:"0.25rem 0" }}></div>
    <div  className='line' style={{height:"0.125rem",background:"black",width:"1.5rem",margin:"0.25rem 0" }}></div>
    </div>
    <div className={`${style.cross} ${isVisisble && style.show}`} onClick={menuclose}>
      <img src={cross} alt="" />
    </div>

    <div className = {`${style.nav} ${isVisisble && style.active}`}>
        <li className={style.navitem}><Link to ="/"> Home </Link></li>
        <li className={style.navitem}><Link to ="/#about" smooth> About</Link></li>
        <li className={style.navitem}><Link to ="/#skills" smooth>Skills</Link></li>
        <li className={style.navitem}><Link to ="/#experience" smooth>Experience</Link></li>
        <li className={style.navitem}><Link to ="/#contact" smooth>Contact</Link></li>
    </div>
    </div>

  );
}
export default Navbar