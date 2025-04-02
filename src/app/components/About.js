"use client";
import { motion } from "framer-motion";
import styles from "../page.module.css";
import { FaHome, FaPlay } from "react-icons/fa";
import { useRef, useState } from "react";

export default function About() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.sectionContent}>
        <h1 className={styles.sectionTitle}><FaHome className={styles.icon} /> Welcome to Jeshfield Global</h1>
        <p className={styles.sectionText}>
          Jeshfield Global stands as a beacon of excellence in Nigeria, masterfully blending innovation with tradition. We craft exceptional epoxy flooring that transforms spaces into timeless masterpieces, nurture premium farm products—snails, catfish, birds, cassava, vegetables, periwinkle, and crayfish—with unwavering dedication, and provide reliable logistics services that bridge distances with precision and care. Our legacy is built on quality, trust, and a passion for exceeding expectations.
        </p>
        <motion.div
          className={styles.heroVideo}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <div className={styles.videoWrapper}>
            <video ref={videoRef} className={styles.featureVideo} controls>
              <source src="/images/jeshfield-global-about.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isPlaying && <FaPlay className={styles.playIcon} onClick={handlePlayPause} />}
            <p className={styles.mediaLabel}>Jeshfield Global Overview</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}