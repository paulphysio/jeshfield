"use client";
import { motion } from "framer-motion";
import styles from "../page.module.css";
import { FaBroom, FaBug, FaHome, FaPaintRoller, FaStar } from "react-icons/fa";

export default function Services() {
  const galleryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      className={styles.fullSection}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.sectionContent}>
        <h1 className={styles.sectionTitle}><FaStar className={styles.icon} /> Additional Services</h1>
        <ul className={styles.servicesList}>
          <li><FaBroom className={styles.icon} /> Industrial Cleaning</li>
          <li><FaBug className={styles.icon} /> Pest Control</li>
          <li><FaHome className={styles.icon} /> House Keeping</li>
          <li><FaPaintRoller className={styles.icon} /> Painting</li>
          <li><FaStar className={styles.icon} /> General Contracting</li>
        </ul>
        <motion.div className={styles.gallery} variants={galleryVariants} initial="hidden" animate="visible">
          <motion.div variants={galleryVariants}>
            <img src="/images/painting-block.jpg" alt="Painting Project" className={styles.galleryImage} />
            <p className={styles.mediaLabel}>Painting Project Showcase</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}