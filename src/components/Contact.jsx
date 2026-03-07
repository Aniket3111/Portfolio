import React from 'react'
import { motion } from 'framer-motion'
import "./contact.css"

const links = [
  {
    label: "Email",
    value: "aniketrajani03@gmail.com",
    href: "mailto:aniketrajani03@gmail.com",
    icon: "✉"
  },
  {
    label: "GitHub",
    value: "github.com/Aniket3111",
    href: "https://github.com/Aniket3111",
    icon: "⌘"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aniket-rajani",
    href: "https://www.linkedin.com/in/aniket-rajani-9487b6191",
    icon: "◉"
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's work together.</h2>
          <p className="section-subtitle">
            Have a project in mind or want to know more? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          className="contact-links"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <span className="contact-icon">{link.icon}</span>
              <div>
                <span className="contact-label">{link.label}</span>
                <span className="contact-value">{link.value}</span>
              </div>
              <span className="contact-arrow">→</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="contact-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p>Designed & built by Aniket Rajani</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact