import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import reelspherePreview from "../images/reelsphere.png";

const projects = [
  {
    title: "ReelSphere",
    category: "Featured Project",
    description:
      "An AI-powered movie discovery platform with natural-language search, recommendation engine, film chat, and taste analysis in a cinematic UI.",
    url: "https://reelsphere.aniketrajani.com",
    cta: "Visit Live Project",
    stack: ["React 19", "Vite", "Node.js", "Vercel Functions", "Gemini API", "Watchmode API"],
    image: reelspherePreview,
    imageAlt: "ReelSphere project preview",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Projects</span>
          <h2 className="section-title">What I&apos;ve built.</h2>
          <p className="section-subtitle">
            A selection of products I&apos;ve worked on and launched.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.article
              className="project-card"
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="project-media">
                <img src={project.image} alt={project.imageAlt} className="project-image" />
              </div>

              <div className="project-body">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="project-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {project.cta}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
