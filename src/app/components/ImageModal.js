"use client";
import { motion } from "framer-motion";
import styles from "../page.module.css";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

export default function ImageModal({ image, imageList, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(imageList.findIndex((i) => i.src === image.src));

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  return (
    <motion.div
      className={styles.modalOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.modalContent}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <FaTimes className={styles.closeIcon} onClick={onClose} />
        <FaChevronLeft className={styles.navIcon} onClick={handlePrev} />
        <img src={imageList[currentIndex].src} alt={imageList[currentIndex].label} className={styles.modalImage} />
        <p className={styles.modalLabel}>{imageList[currentIndex].label}</p>
        <FaChevronRight className={styles.navIcon} onClick={handleNext} />
      </motion.div>
    </motion.div>
  );
}