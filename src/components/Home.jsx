import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import "./Home.css"
import resume from "../files/Aniket_Rajani_Resume.pdf"
import profileImgLight from "../images/aniket_portofolio_avatar_light.png"
import profileImgDark from "../images/aniket_portfolio_avatar_small.png"
import Navbar from './Navbar'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  })
}

const floatingIcons = [
  { icon: "react", x: "6%", y: "18%", size: 38, delay: 0 },
  { icon: "nodejs", x: "88%", y: "12%", size: 34, delay: 0.5 },
  { icon: "python", x: "14%", y: "72%", size: 32, delay: 1.2 },
  { icon: "typescript", x: "78%", y: "78%", size: 30, delay: 0.8 },
  { icon: "javascript", x: "92%", y: "45%", size: 36, delay: 1.5 },
  { icon: "html5", x: "4%", y: "45%", size: 28, delay: 2.0 },
  { icon: "css3", x: "82%", y: "88%", size: 28, delay: 1.8 },
  { icon: "docker", x: "18%", y: "88%", size: 30, delay: 0.3 },
  { icon: "git", x: "50%", y: "10%", size: 26, delay: 1.0 },
  { icon: "mongodb", x: "70%", y: "8%", size: 28, delay: 2.2 },
  { icon: "flask", x: "8%", y: "32%", size: 26, delay: 2.5 },
  { icon: "redux", x: "60%", y: "90%", size: 26, delay: 1.3 },
]

const getDeviconUrl = (icon) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`

function Home() {
  const [dark, setDark] = useState(
    document.documentElement.getAttribute("data-theme") === "dark"
  )

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDark(document.documentElement.getAttribute("data-theme") === "dark")
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] })
    return () => observer.disconnect()
  }, [])

  const profileImg = dark ? profileImgDark : profileImgLight

  return (
    <section className="hero" id="home">
      <Navbar />
      <div className="hero-floating-icons" aria-hidden="true">
        {floatingIcons.map((item, i) => (
          <motion.img
            key={i}
            src={getDeviconUrl(item.icon)}
            alt=""
            className="floating-icon"
            style={{ left: item.x, top: item.y, width: item.size, height: item.size }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + item.delay, duration: 0.6, ease: "easeOut" }}
          />
        ))}
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <motion.span
            className="hero-badge"
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Software Developer
          </motion.span>

          <motion.h1
            className="hero-title"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Hi, I'm <span className="hero-name">Aniket</span>
            <br />
            <span className="hero-name-light">Rajani.</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            I craft scalable web products with clean interfaces,
            thoughtful architecture, and solid engineering.
          </motion.p>

          {/* <motion.div
            className="hero-roles"
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            {["React", "TypeScript", "Flask", "MySQL", "Full Stack"].map((tag) => (
              <span className="hero-tag" key={tag}>{tag}</span>
            ))}
          </motion.div> */}

          <motion.div
            className="hero-actions"
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <a className="btn-primary" href={resume} download>
              Download Resume
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch →
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-image-wrapper">
            <img src={profileImg} alt="Aniket Rajani" />
            <div className="hero-image-glow" />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="scroll-line" />
      </motion.div>
    </section>
  )
}

export default Home
