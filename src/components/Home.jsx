import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import resume from "../files/Aniket_Rajani_Resume.pdf";
import profileImgLight from "../images/aniket_portofolio_avatar_light.png";
import profileImgDark from "../images/aniket_portfolio_avatar_small.png";
import Navbar from "./Navbar";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const floatingIcons = [
  { icon: "react", x: "6%", y: "18%", size: 38, delay: 0 },
  { icon: "nodejs", x: "88%", y: "12%", size: 34, delay: 0.5 },
  { icon: "python", x: "14%", y: "72%", size: 32, delay: 1.2 },
  { icon: "typescript", x: "36%", y: "24%", size: 24, delay: 0.9 },
  { icon: "docker", x: "44%", y: "58%", size: 26, delay: 0.7 },
  { icon: "mongodb", x: "58%", y: "26%", size: 24, delay: 1.9 },
  { icon: "mysql", x: "78%", y: "78%", size: 30, delay: 0.8 },
  { icon: "javascript", x: "92%", y: "45%", size: 36, delay: 1.5 },
  { icon: "html5", x: "4%", y: "45%", size: 28, delay: 2.0 },
  { icon: "css3", x: "82%", y: "88%", size: 28, delay: 1.8 },
  { icon: "git", x: "18%", y: "88%", size: 30, delay: 0.3 },
  { icon: "flask", x: "50%", y: "10%", size: 26, delay: 1.0 },
  { icon: "redux", x: "64%", y: "72%", size: 26, delay: 1.3 },
  { icon: "postman", x: "8%", y: "32%", size: 26, delay: 2.5 },
];

const getDeviconUrl = (icon) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`;

const getInitialDarkMode = () => {
  const saved = localStorage.getItem("theme");
  if (saved) return saved === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const buildFloatAnimation = (item, index, dark, extraX = 0, extraY = 0, extraScale = 1) => ({
  opacity: dark ? 0.42 : 0.32,
  scale: extraScale,
  x: [extraX, extraX + 10, extraX - 8, extraX],
  y: [extraY, extraY - 12, extraY + 8, extraY],
  rotate: [0, 4, -3, 0],
  transition: {
    opacity: { duration: 0.25 },
    scale: { duration: 0.35, ease: "easeOut" },
    x: {
      delay: 1 + item.delay,
      duration: 7 + (index % 4),
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
    y: {
      delay: 0.9 + item.delay,
      duration: 6 + (index % 3),
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
    rotate: {
      delay: 1.1 + item.delay,
      duration: 8 + (index % 5),
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
});

const getMagneticOffset = (item, bounds, pointer) => {
  if (!bounds || !pointer) return { x: 0, y: 0 };

  const baseX = (parseFloat(item.x) / 100) * bounds.width;
  const baseY = (parseFloat(item.y) / 100) * bounds.height;
  const dx = pointer.x - baseX;
  const dy = pointer.y - baseY;
  const distance = Math.hypot(dx, dy);
  const influence = Math.max(0, 1 - distance / 340);

  return {
    x: dx * 0.12 * influence,
    y: dy * 0.12 * influence,
    influence,
  };
};

function Home() {
  const [dark, setDark] = useState(getInitialDarkMode);
  const heroRef = useRef(null);
  const floatingBoundsRef = useRef(null);
  const [pointer, setPointer] = useState(null);
  const [bounds, setBounds] = useState(null);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

  useEffect(() => {
    const updateTheme = () => {
      setDark(document.documentElement.getAttribute("data-theme") === "dark");
    };

    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    window.addEventListener("themechange", updateTheme);

    return () => {
      observer.disconnect();
      window.removeEventListener("themechange", updateTheme);
    };
  }, []);

  useEffect(() => {
    const updateBounds = () => {
      if (heroRef.current) {
        setBounds(heroRef.current.getBoundingClientRect());
      }
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const profileImg = dark ? profileImgDark : profileImgLight;
  const updatePointer = (clientX, clientY) => {
    if (!bounds || isMobile) return;
    setPointer({ x: clientX - bounds.left, y: clientY - bounds.top });
  };

  return (
    <section
      className="hero"
      id="home"
      ref={heroRef}
      onMouseMove={(e) => {
        updatePointer(e.clientX, e.clientY);
      }}
      onMouseEnter={(e) => {
        updatePointer(e.clientX, e.clientY);
      }}
      onMouseLeave={() => setPointer(null)}
      onTouchEnd={() => setPointer(null)}
      onTouchCancel={() => setPointer(null)}
    >
      <Navbar />
      <div
        className="hero-floating-icons"
        aria-hidden="true"
        ref={floatingBoundsRef}
      >
        <div
          className={`hero-pointer-glow ${pointer ? "active" : ""}`}
          style={pointer ? { left: `${pointer.x}px`, top: `${pointer.y}px` } : undefined}
        />
        {floatingIcons.map((item, i) => (
          (() => {
            const magnetic = pointer ? getMagneticOffset(item, bounds, pointer) : null;
            return (
              <motion.img
                key={i}
                src={getDeviconUrl(item.icon)}
                alt=""
                className="floating-icon"
                style={{ left: item.x, top: item.y, width: item.size, height: item.size }}
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  magnetic
                    ? buildFloatAnimation(item, i, dark, magnetic.x, magnetic.y, 1 + magnetic.influence * 0.08)
                    : buildFloatAnimation(item, i, dark)
                }
                drag
                dragConstraints={floatingBoundsRef}
                dragElastic={0.08}
                dragMomentum={false}
                whileHover={{ scale: 1.18, opacity: dark ? 0.68 : 0.58 }}
                whileTap={{ scale: 1.2, cursor: "grabbing" }}
              />
            );
          })()
        ))}
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <motion.span className="hero-badge" custom={0} variants={fadeUp} initial="hidden" animate="visible">
            Software Developer
          </motion.span>

          <motion.h1 className="hero-title" custom={1} variants={fadeUp} initial="hidden" animate="visible">
            Hi, I&apos;m <span className="hero-name">Aniket</span>
            <br />
            <span className="hero-name-light">Rajani.</span>
          </motion.h1>

          <motion.p className="hero-subtitle" custom={2} variants={fadeUp} initial="hidden" animate="visible">
            I craft scalable web products with clean interfaces,
            thoughtful architecture, and solid engineering.
          </motion.p>

          <motion.div className="hero-actions" custom={4} variants={fadeUp} initial="hidden" animate="visible">
            <a className="btn-primary" href={resume} download>
              Download Resume
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch -&gt;
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
  );
}

export default Home;
