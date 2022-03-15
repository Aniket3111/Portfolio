import React from 'react'
import "./contact.css"
import contactimg from "../images/5124556.jpg"
function Contact() {
  return (
    <div className='c' id="contact">
            <div className="contacthead">
                Contact
            </div>
            <div className="lr">
            <div className="leftt">
<img src={contactimg} alt="" />
            </div>
            <div className="rightt">
         <div className="righthead">
             <span className='rhb'>Want</span> to work on a              <span className='rhb'>Project</span> Together
             <br/>
             or
             <div> <span className='rhb'>Want</span> to Know more about  <span className='rhb'>me</span></div>
             </div>
             <div className="rightlow">
                 <div className="mail">Mail me at: <span className='rhb'> aniketrajani03@gmail.com</span></div>
                 <div className="mail">You can look my work  at: <span className='rhb'>https://github.com/Aniket3111 </span></div>
                 <div className="mail">Connect with me on LinkedIn <span className='rhb'>https://www.linkedin.com/in/aniket-rajani-9487b6191</span></div>

             </div>
         </div>
            </div>
        </div>
  )
}

export default Contact