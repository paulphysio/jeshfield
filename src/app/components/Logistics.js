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
        <h1 className={styles.sectionTitle}><FaTruck className={styles.icon} /> Logistics Services</h1>
        <p className={styles.sectionText}>
          Dependable logistics solutions that ensure your goods travel seamlessly, delivered with efficiency and care.
        </p>
        <motion.div className={styles.gallery} variants={galleryVariants} initial="hidden" animate="visible">
          <motion.div variants={galleryVariants}>
            <img src="/images/dried-fish-ready-for-export.jpg" alt="Export Ready Fish" className={styles.galleryImage} />
            <p className={styles.mediaLabel}>Dried Fish Ready for Export</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}