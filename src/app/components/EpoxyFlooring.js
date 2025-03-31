"use client";
import { motion } from "framer-motion";
import styles from "../page.module.css";
import { FaPaintRoller } from "react-icons/fa";

export default function EpoxyFlooring() {
  const galleryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } },
  };

  return (
    <motion.section
      className={styles.fullSection}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.sectionContent}>
        <h1 className={styles.sectionTitle}><FaPaintRoller className={styles.icon} /> Epoxy Flooring</h1>
        <p className={styles.sectionText}>
          Our epoxy flooring solutions elevate interiors with durability and elegance, crafted with precision and an eye for timeless design.
        </p>
        <motion.div className={styles.gallery} variants={galleryVariants} initial="hidden" animate="visible">
          <motion.div variants={galleryVariants}>
            <img src="/images/epoxy-flooring.jpg" alt="Epoxy Flooring" className={styles.galleryImage} />
            <p className={styles.mediaLabel}>Finished Epoxy Flooring</p>
          </motion.div>
          <motion.div variants={galleryVariants}>
            <img src="/images/epoxy.jpg" alt="Epoxy Sample" className={styles.galleryImage} />
            <p className={styles.mediaLabel}>Epoxy Coating Sample</p>
          </motion.div>
          <motion.div variants={galleryVariants}>
            <img src="/images/epoxy2.jpg" alt="Epoxy Project" className={styles.galleryImage} />
            <p className={styles.mediaLabel}>Epoxy Project in Progress</p>
          </motion.div>
          <motion.div className={styles.videoWrapper} variants={galleryVariants}>
            <video controls className={styles.galleryVideo}>
              <source src="/images/epoxy.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className={styles.mediaLabel}>Epoxy Application Process</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}