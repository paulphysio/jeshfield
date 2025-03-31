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
        <h1 className={styles.sectionTitle}><FaPaintRoller /> Epoxy Flooring</h1>
        <p className={styles.sectionText}>
          Elevate your spaces with our exquisite epoxy flooring solutions, crafted with precision and paired with expert designs.
        </p>
        <motion.div className={styles.gallery} variants={galleryVariants} initial="hidden" animate="visible">
          <motion.img src="/images/epoxy-flooring.jpg" alt="Epoxy Flooring" className={styles.galleryImage} variants={galleryVariants} />
          <motion.img src="/images/epoxy.jpg" alt="Epoxy Sample" className={styles.galleryImage} variants={galleryVariants} />
          <motion.img src="/images/epoxy2.jpg" alt="Epoxy Project" className={styles.galleryImage} variants={galleryVariants} />
          <motion.div className={styles.videoWrapper} variants={galleryVariants}>
            <video controls className={styles.galleryVideo}>
              <source src="/images/epoxy.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}