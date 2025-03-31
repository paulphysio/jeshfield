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

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "epoxy":
        return <EpoxyFlooring />;
      case "farm":
        return <FarmProducts />;
      case "logistics":
        return <Logistics />;
      case "services":
        return <Services />;
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
    </div>
  );
}