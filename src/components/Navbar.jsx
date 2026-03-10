import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import style from "./navbar.module.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const theme = dark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    window.dispatchEvent(new Event("themechange"));
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.history.replaceState(null, "", href);
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const scrollTo = (e, href) => {
    e.preventDefault();
    scrollToSection(href);
  };

  const handleMobileNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        scrollToSection(href);
      });
    });
  };

  return (
    <motion.nav
      className={`${style.nav} ${scrolled ? style.scrolled : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={style.navInner}>
        <a href="#home" className={style.logo} onClick={(e) => scrollTo(e, "#home")}>
          Aniket Rajani
        </a>

        <div className={style.navRight}>
          <ul className={style.navLinks}>
            {navLinks.map((link, i) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
              >
                <a href={link.href} onClick={(e) => scrollTo(e, link.href)}>
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.button
            type="button"
            className={style.themeToggle}
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.span
              key={dark ? "sun" : "moon"}
              className={style.themeIcon}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {dark ? <LightModeRoundedIcon fontSize="inherit" /> : <DarkModeRoundedIcon fontSize="inherit" />}
            </motion.span>
          </motion.button>

          <button
            type="button"
            className={`${style.menuBtn} ${isOpen ? style.menuOpen : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={style.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => handleMobileNavClick(e, link.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
                className={style.mobileLink}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
