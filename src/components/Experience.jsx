import React from 'react'
import { motion } from 'framer-motion'
import "./Experience.css"
import drivers4meLogo from "../images/drivers4me.png"
import abzoobaLogo from "../images/abzooba.png"
import acadqueLogo from "../images/q.jpg"

const experiences = [
  {
    company: "Drivers4Me",
    role: "SDE-1",
    period: "Apr 2024 — Present",
    logo: drivers4meLogo,
    points: [
      "Built scalable admin and B2B affiliate portals using React, TypeScript, and Python Flask.",
      "Engineered real-time driver allocation with WebSockets for live updates and data sync.",
      "Integrated Google Maps, Mapbox, Gridlines, and built interactive data visualizations.",
      "Managed SQL and MongoDB databases with performance tuning under tight deadlines."
    ]
  },
  {
    company: "Abzooba",
    role: "Trainee",
    period: "Jul 2023 — Dec 2023",
    logo: abzoobaLogo,
    points: [
      "Developed proficiency in SQL for complex database management.",
      "Worked on advanced Linux technologies and command-line operations.",
      "Contributed to collaborative projects with Git for streamlined code management.",
      "Applied Python for data analysis and built responsive web interfaces."
    ]
  },
  {
    company: "Acadque",
    role: "Web Development Intern",
    period: "Nov 2021 — Dec 2021",
    logo: acadqueLogo,
    points: [
      "Developed company website using React.js and its ecosystem.",
      "Implemented infinite scroll which increased user retention by 40%.",
      "Completed work with proper documentation and testing within deadline."
    ]
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  })
}

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Experience</span>
          <h2 className="section-title">Where I've worked.</h2>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, i) => (
            <motion.div
              className="exp-card"
              key={exp.company}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="exp-card-left">
                <span className="exp-period">{exp.period}</span>
              </div>
              <div className="exp-card-divider">
                <div className="exp-dot" />
                {i < experiences.length - 1 && <div className="exp-line" />}
              </div>
              <div className="exp-card-right">
                <img src={exp.logo} alt="" className="exp-backdrop-logo" />
                <div className="exp-card-content">
                  <h3 className="exp-company">{exp.company}</h3>
                  <span className="exp-role">{exp.role}</span>
                  <ul className="exp-points">
                    {exp.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
