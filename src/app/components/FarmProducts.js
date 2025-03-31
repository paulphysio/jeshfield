"use client";
import { motion } from "framer-motion";
import styles from "../page.module.css";
import { FaFish } from "react-icons/fa";

export default function FarmProducts() {
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
        <h1 className={styles.sectionTitle}><FaFish /> Farm Products</h1>
        <p className={styles.sectionText}>
          From our farms to your table, enjoy premium products including snails, catfish, birds, cassava, vegetables, periwinkle, and crayfish, all cultivated with care and tradition.
        </p>
        <motion.div className={styles.gallery} variants={galleryVariants} initial="hidden" animate="visible">
          <motion.img src="/images/snail farm.jpeg" alt="Snail Farm" className={styles.galleryImage} variants={galleryVariants} />
          <motion.img src="/images/catfish.jpeg" alt="Catfish" className={styles.galleryImage} variants={galleryVariants} />
          <motion.img src="/images/bird.jpeg" alt="Birds" className={styles.galleryImage} variants={galleryVariants} />
          <motion.img src="/images/cassava.jpeg" alt="Cassava" className={styles.galleryImage} variants={galleryVariants} />
          <motion.img src="/images/vegetables.jpeg" alt="Vegetables" className={styles.galleryImage} variants={galleryVariants} />
          <motion.img src="/images/periwinkle.jpeg" alt="Periwinkle" className={styles.galleryImage} variants={galleryVariants} />
          <motion.img src="/images/crayfish.jpeg" alt="Crayfish" className={styles.galleryImage} variants={galleryVariants} />
          <motion.img src="/images/dried-snail.jpg" alt="Dried Snail" className={styles.galleryImage} variants={galleryVariants} />
          <motion.img src="/images/dried-fish-ready-for-export.jpg" alt="Dried Fish" className={styles.galleryImage} variants={galleryVariants} />
          <motion.img src="/images/smoked-catfish.jpg" alt="Smoked Catfish" className={styles.galleryImage} variants={galleryVariants} />
          <motion.img src="/images/smokedcatfish.jpg" alt="Smoked Catfish Variant" className={styles.galleryImage} variants={galleryVariants} />
          <motion.img src="/images/sealed-crayfish-ready-for-export.jpg" alt="Sealed Crayfish" className={styles.galleryImage} variants={galleryVariants} />
          <motion.div className={styles.videoWrapper} variants={galleryVariants}>
            <video controls className={styles.galleryVideo}>
              <source src="/images/catfish.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <motion.div className={styles.videoWrapper} variants={galleryVariants}>
            <video controls className={styles.galleryVideo}>
              <source src="/images/cassava-farm.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}