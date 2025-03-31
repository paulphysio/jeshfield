"use client";
import { motion } from "framer-motion";
import styles from "../page.module.css";
import { FaTruck } from "react-icons/fa";

export default function Logistics() {
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
        <h1 className={styles.sectionTitle}><FaTruck /> Logistics Services</h1>
        <p className={styles.sectionText}>
          Seamless and dependable logistics solutions, ensuring your goods reach their destination with efficiency and care.
        </p>
        <motion.div className={styles.gallery} variants={galleryVariants} initial="hidden" animate="visible">
          <motion.img src="/images/dried-fish-ready-for-export.jpg" alt="Export Ready Fish" className={styles.galleryImage} variants={galleryVariants} />
        </motion.div>
      </div>
    </motion.section>
  );
}