"use client";
import { motion } from "framer-motion";
import styles from "../page.module.css";
import { FaBars, FaHome } from "react-icons/fa";
import { useState } from "react";

export default function Navbar({ setActiveSection, activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "epoxy", label: "Epoxy Flooring" },
    { id: "farm", label: "Farm Products" },
    { id: "logistics", label: "Logistics" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={styles.navbar}>
      <motion.div
        className={styles.logoHero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="/images/logo.png" alt="Jeshfield Global Logo" className={styles.logoImage} />
        <span className={styles.companyName}>Jeshfield Global</span>
      </motion.div>
      <div className={styles.desktopNav}>
        <ul className={styles.navLinks}>
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={activeSection === item.id ? styles.activeNav : ""}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      <FaBars className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)} />
      {isMenuOpen && (
        <motion.div
          className={styles.mobileMenu}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
        >
          <ul className={styles.mobileNavLinks}>
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={activeSection === item.id ? styles.activeNav : ""}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}