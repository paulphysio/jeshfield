"use client";
import { motion } from "framer-motion";
import styles from "../page.module.css";
import { FaFish, FaPlay } from "react-icons/fa";
import { useState, useRef } from "react";

export default function FarmProducts({ setSelectedImage, setImageList }) {
  const [category, setCategory] = useState("All");
  const [isCatfishPlaying, setIsCatfishPlaying] = useState(false);
  const [isCassavaPlaying, setIsCassavaPlaying] = useState(false);

  const catfishVideoRef = useRef(null);
  const cassavaVideoRef = useRef(null);

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

  const farmMedia = {
    All: [
      { type: "image", src: "/images/snail farm.jpeg", label: "Snail Farm Cultivation", category: "Snail" },
      { type: "image", src: "/images/catfish.jpeg", label: "Fresh Catfish", category: "Fish" },
      { type: "image", src: "/images/bird.jpeg", label: "Livestock Birds", category: "Birds" },
      { type: "image", src: "/images/cassava.jpeg", label: "Cassava Harvest", category: "Cassava" },
      { type: "image", src: "/images/vegetables.jpeg", label: "Fresh Vegetables", category: "Vegetables" },
      { type: "image", src: "/images/periwinkle.jpeg", label: "Periwinkle Catch", category: "Crayfish and Periwinkle" },
      { type: "image", src: "/images/crayfish.jpeg", label: "Fresh Crayfish", category: "Crayfish and Periwinkle" },
      { type: "image", src: "/images/dried-snail.jpg", label: "Dried Snails", category: "Snail" },
      { type: "image", src: "/images/dried-fish-ready-for-export.jpg", label: "Dried Fish for Export", category: "Fish" },
      { type: "image", src: "/images/smoked-catfish.jpg", label: "Smoked Catfish", category: "Fish" },
      { type: "image", src: "/images/smokedcatfish.jpg", label: "Smoked Catfish Variant", category: "Fish" },
      { type: "image", src: "/images/sealed-crayfish-ready-for-export.jpg", label: "Sealed Crayfish for Export", category: "Crayfish and Periwinkle" },
      { type: "image", src: "/images/turkey.jpeg", label: "Livestock Turkeys", category: "Birds" },
      { type: "video", src: "/images/catfish.mp4", label: "Catfish Farming Process", category: "Fish", ref: catfishVideoRef, isPlaying: isCatfishPlaying, setIsPlaying: setIsCatfishPlaying },
      { type: "video", src: "/images/cassava-farm.mp4", label: "Cassava Farm Tour", category: "Cassava", ref: cassavaVideoRef, isPlaying: isCassavaPlaying, setIsPlaying: setIsCassavaPlaying },
    ],
    Snail: [
      { type: "image", src: "/images/snail farm.jpeg", label: "Snail Farm Cultivation", category: "Snail" },
      { type: "image", src: "/images/dried-snail.jpg", label: "Dried Snails", category: "Snail" },
    ],
    Fish: [
      { type: "image", src: "/images/catfish.jpeg", label: "Fresh Catfish", category: "Fish" },
      { type: "image", src: "/images/dried-fish-ready-for-export.jpg", label: "Dried Fish for Export", category: "Fish" },
      { type: "image", src: "/images/smoked-catfish.jpg", label: "Smoked Catfish", category: "Fish" },
      { type: "image", src: "/images/smokedcatfish.jpg", label: "Smoked Catfish Variant", category: "Fish" },
      { type: "video", src: "/images/catfish.mp4", label: "Catfish Farming Process", category: "Fish", ref: catfishVideoRef, isPlaying: isCatfishPlaying, setIsPlaying: setIsCatfishPlaying },
    ],
    Birds: [
      { type: "image", src: "/images/bird.jpeg", label: "Livestock Birds", category: "Birds" },
      { type: "image", src: "/images/turkey.jpeg", label: "Livestock Turkeys", category: "Birds" },
    ],
    Cassava: [
      { type: "image", src: "/images/cassava.jpeg", label: "Cassava Harvest", category: "Cassava" },
      { type: "video", src: "/images/cassava-farm.mp4", label: "Cassava Farm Tour", category: "Cassava", ref: cassavaVideoRef, isPlaying: isCassavaPlaying, setIsPlaying: setIsCassavaPlaying },
    ],
    Vegetables: [
      { type: "image", src: "/images/vegetables.jpeg", label: "Fresh Vegetables", category: "Vegetables" },
    ],
    "Crayfish and Periwinkle": [
      { type: "image", src: "/images/periwinkle.jpeg", label: "Periwinkle Catch", category: "Crayfish and Periwinkle" },
      { type: "image", src: "/images/crayfish.jpeg", label: "Fresh Crayfish", category: "Crayfish and Periwinkle" },
      { type: "image", src: "/images/sealed-crayfish-ready-for-export.jpg", label: "Sealed Crayfish for Export", category: "Crayfish and Periwinkle" },
    ],
  };

  const categories = ["All", "Snail", "Fish", "Birds", "Cassava", "Vegetables", "Crayfish and Periwinkle"];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setImageList(farmMedia[image.category].filter((item) => item.type === "image"));
  };

  const handlePlayPause = (ref, setIsPlaying) => {
    const video = ref.current;
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
        <h1 className={styles.sectionTitle}><FaFish className={styles.icon} /> Farm Products</h1>
        <p className={styles.sectionText}>
          Savor the finest farm-fresh offerings—snails, catfish, birds, cassava, vegetables, periwinkle, and crayfish—nurtured with tradition and delivered with pride.
        </p>
        <div className={styles.categoryTabs}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.categoryButton} ${category === cat ? styles.activeCategory : ""}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <motion.div className={styles.gallery} variants={galleryVariants} initial="hidden" animate="visible">
          {farmMedia[category].map((item, index) =>
            item.type === "image" ? (
              <motion.div key={index} variants={galleryVariants} onClick={() => handleImageClick(item)}>
                <img src={item.src} alt={item.label} className={styles.galleryImage} />
                <p className={styles.mediaLabel}>{item.label}</p>
              </motion.div>
            ) : (
              <motion.div key={index} className={styles.videoWrapper} variants={galleryVariants}>
                <video ref={item.ref} className={styles.galleryVideo} controls>
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {!item.isPlaying && (
                  <FaPlay
                    className={styles.playIcon}
                    onClick={() => handlePlayPause(item.ref, item.setIsPlaying)}
                  />
                )}
                <p className={styles.mediaLabel}>{item.label}</p>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}