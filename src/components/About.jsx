import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import aboutLight from "../images/aniket-rajani-about-light.png"
import aboutDark from "../images/aniket-rajani-about-dark.jpg"
import "./About.css"

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}

const highlights = [
  { emoji: "🛠", text: "Full stack products with focus on usability, maintainability, and performance." },
  { emoji: "🧩", text: "Solving real business problems with practical architecture and clean execution." },
  { emoji: "🤝", text: "Collaborative teams, consistent delivery under tight deadlines." },
  { emoji: "📈", text: "Continuously learning, improving, and exploring new technologies." },
]

function About() {
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

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          className="about-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <span className="section-label">About</span>
          <h2 className="section-title">A bit about me.</h2>
          <p className="section-subtitle">
            Computer Engineering graduate from Pune University,
            currently building products as a Software Developer at Drivers4Me.
          </p>
        </motion.div>

        <motion.div
          className="about-banner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={dark ? aboutDark : aboutLight} alt="Aniket Rajani" />
        </motion.div>

        <motion.div
          className="about-highlights"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {highlights.map((item, i) => (
            <motion.div className="about-card" key={i} variants={fadeInUp}>
              <span className="about-card-emoji">{item.emoji}</span>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
