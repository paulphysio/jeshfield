"use client";
import { motion } from "framer-motion";
import styles from "../page.module.css";
import { FaHome } from "react-icons/fa";

export default function About() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.section
      className={styles.fullSection}
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.sectionContent}>
        <h1 className={styles.sectionTitle}><FaHome /> Welcome to Jeshfield Global</h1>
        <p className={styles.sectionText}>
          Jeshfield Global is a premier enterprise redefining excellence in Nigeria. We specialize in crafting exceptional epoxy flooring that transforms spaces into works of art, cultivating premium farm products—snails, catfish, birds, cassava, vegetables, periwinkle, and crayfish—with unmatched dedication, and delivering reliable logistics services that connect communities with precision and care. Our commitment to quality and innovation sets us apart as a trusted name in every endeavor we undertake.
        </p>
        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <img src="/images/snail farm.jpeg" alt="Snail Farm" className={styles.featureImage} />
        </motion.div>
      </div>
    </motion.section>
  );
}