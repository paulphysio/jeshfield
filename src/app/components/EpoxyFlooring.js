"use client";
import { motion } from "framer-motion";
import styles from "../page.module.css";
import { FaPaintRoller, FaPlay } from "react-icons/fa";
import { useRef, useState } from "react";

export default function EpoxyFlooring({ setSelectedImage, setImageList }) {
  const galleryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut", 
        staggerChildren: 0.2 
      } 
    },
  };

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const images = [
    { src: "/images/epoxy-flooring.jpg", label: "Finished Epoxy Flooring" },
    { src: "/images/epoxy.jpg", label: "Epoxy Coating Sample" },
    { src: "/images/epoxy2.jpg", label: "Epoxy Project in Progress" },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setImageList(images);
  };

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
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
          {images.map((image, index) => (
            <motion.div key={index} variants={galleryVariants} onClick={() => handleImageClick(image)}>
              <img src={image.src} alt={image.label} className={styles.galleryImage} />
              <p className={styles.mediaLabel}>{image.label}</p>
            </motion.div>
          ))}
          <motion.div className={styles.videoWrapper} variants={galleryVariants}>
            <video ref={videoRef} className={styles.galleryVideo} controls>
              <source src="/images/epoxy.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isPlaying && <FaPlay className={styles.playIcon} onClick={handlePlayPause} />}
            <p className={styles.mediaLabel}>Epoxy Application Process</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}