"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import EpoxyFlooring from "./components/EpoxyFlooring";
import FarmProducts from "./components/FarmProducts";
import Logistics from "./components/Logistics";
import Services from "./components/Services";
import Contact from "./components/Contact";
import ImageModal from "./components/ImageModal";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageList, setImageList] = useState([]);

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "epoxy":
        return <EpoxyFlooring setSelectedImage={setSelectedImage} setImageList={setImageList} />;
      case "farm":
        return <FarmProducts setSelectedImage={setSelectedImage} setImageList={setImageList} />;
      case "logistics":
        return <Logistics setSelectedImage={setSelectedImage} setImageList={setImageList} />;
      case "services":
        return <Services setSelectedImage={setSelectedImage} setImageList={setImageList} />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSection]);

  return (
    <div className={styles.page}>
      <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />
      <div className={styles.content}>{renderSection()}</div>
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          imageList={imageList}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}