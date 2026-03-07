import React from 'react'
import { motion } from 'framer-motion'
import "./Skills.css"

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons"

const skillIcons = {
  "React.js": `${DI}/react/react-original.svg`,
  "Redux Toolkit": `${DI}/redux/redux-original.svg`,
  "JavaScript": `${DI}/javascript/javascript-original.svg`,
  "TypeScript": `${DI}/typescript/typescript-original.svg`,
  "HTML5": `${DI}/html5/html5-original.svg`,
  "CSS3": `${DI}/css3/css3-original.svg`,
  "Tailwind CSS": `${DI}/tailwindcss/tailwindcss-original.svg`,
  "Node.js": `${DI}/nodejs/nodejs-original.svg`,
  "Express.js": `${DI}/express/express-original.svg`,
  "Flask": `${DI}/flask/flask-original.svg`,
  "Python": `${DI}/python/python-original.svg`,
  "C++": `${DI}/cplusplus/cplusplus-original.svg`,
  "MySQL": `${DI}/mysql/mysql-original.svg`,
  "MongoDB": `${DI}/mongodb/mongodb-original.svg`,
  "Git": `${DI}/git/git-original.svg`,
  "GitHub": `${DI}/github/github-original.svg`,
  "Bitbucket": `${DI}/bitbucket/bitbucket-original.svg`,
  "Docker": `${DI}/docker/docker-original.svg`,
  "Postman": `${DI}/postman/postman-original.svg`,
  "Jira": `${DI}/jira/jira-original.svg`,
  "AWS (EC2, S3)": `${DI}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
}

const skillGroups = [
  {
    title: "Frontend",
    icon: "◆",
    items: ["React.js", "Redux Toolkit", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    title: "Backend",
    icon: "◈",
    items: ["Node.js", "Express.js", "Flask", "REST APIs", "Web Sockets", "JWT Auth"]
  },
  {
    title: "Databases",
    icon: "◇",
    items: ["MySQL", "MongoDB"]
  },
  {
    title: "Languages",
    icon: "▸",
    items: ["Python", "C++", "JavaScript", "TypeScript", "SQL"]
  },
  {
    title: "Tools & Cloud",
    icon: "☁",
    items: ["Git", "GitHub", "Bitbucket", "Postman", "Jira", "Docker", "AWS (EC2, S3)"]
  },
  {
    title: "Core Concepts",
    icon: "◎",
    items: ["DSA", "OOPS", "DBMS"]
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
}

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Skills</span>
          <h2 className="section-title">Tech stack I work with.</h2>
          <p className="section-subtitle">
            Technologies I use to design, build, and ship products from concept to production.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <motion.article
              className="skill-card"
              key={group.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="skill-card-header">
                <span className="skill-card-icon">{group.icon}</span>
                <h3>{group.title}</h3>
              </div>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>
                    {skillIcons[item] && (
                      <img src={skillIcons[item]} alt="" className="skill-tag-icon" />
                    )}
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
