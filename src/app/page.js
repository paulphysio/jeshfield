"use client";
// app/page.js
import { motion } from "framer-motion";
import styles from "./page.module.css";
import { FaFacebook, FaTwitter, FaPhone, FaEnvelope, FaFish, FaTruck, FaPaintRoller, FaBug, FaBroom, FaHome, FaRocket, FaStar, FaBars, FaArrowUp } from "react-icons/fa";
import { useRef, useState } from "react";

export default function Home() {
  const aboutRef = useRef(null);
  const epoxyRef = useRef(null);
  const fishRef = useRef(null);
  const logisticsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const menuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const arrowVariants = {
    animate: { y: [-10, 0, -10], opacity: [0, 1, 0], transition: { duration: 1.5, repeat: Infinity } },
  };

  return (
    <div className={styles.page}>
      {/* Animated Background */}
      <motion.div
        className={styles.backgroundAnimation}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <motion.div
          className={styles.logoHero}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <FaRocket className={styles.logoIcon} />
          <span className={styles.companyName}>Jeshfield</span>
        </motion.div>
        <div className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            <li onClick={() => scrollToSection(aboutRef)}>About</li>
            <li onClick={() => scrollToSection(epoxyRef)}>Epoxy Floors</li>
            <li onClick={() => scrollToSection(fishRef)}>Fish Farming</li>
            <li onClick={() => scrollToSection(logisticsRef)}>Logistics</li>
            <li onClick={() => scrollToSection(servicesRef)}>Services</li>
            <li onClick={() => scrollToSection(contactRef)}>Contact</li>
          </ul>
        </div>
        <FaBars className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)} />
        {isMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <ul className={styles.mobileNavLinks}>
              <li onClick={() => scrollToSection(aboutRef)}>About</li>
              <li onClick={() => scrollToSection(epoxyRef)}>Epoxy Floors</li>
              <li onClick={() => scrollToSection(fishRef)}>Fish Farming</li>
              <li onClick={() => scrollToSection(logisticsRef)}>Logistics</li>
              <li onClick={() => scrollToSection(servicesRef)}>Services</li>
              <li onClick={() => scrollToSection(contactRef)}>Contact</li>
            </ul>
            <motion.div
              className={styles.menuGraphic}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <motion.h1
          animate={{ y: [0, -20, 0], textShadow: ["0 0 10px #FFD700", "0 0 20px #FF00FF", "0 0 10px #FFD700"] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Jeshfield Enterprises Nigeria
        </motion.h1>
        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          {"Transforming homes with stunning epoxy floors. Delivering fresh and dry fish straight from our farms. Moving your goods with reliable logistics."}
        </motion.p>
        <motion.div className={styles.scrollPrompt}>
          <p>Scroll Down</p>
          <motion.div variants={arrowVariants} animate="animate">
            <FaArrowUp className={styles.arrow} />
          </motion.div>
          <motion.div variants={arrowVariants} animate="animate" transition={{ delay: 0.3 }}>
            <FaArrowUp className={styles.arrow} />
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.heroGraphic}
          animate={{ scale: [1, 1.3, 1], rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </motion.section>

      {/* About Us Section */}
      <motion.section
        ref={aboutRef}
        className={styles.section}
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, type: "spring" }}
      >
        <h2><FaHome className={styles.icon} /> About Jeshfield</h2>
        <p>
          Jeshfield Enterprises Nigeria brings creativity and quality to life. We craft beautiful epoxy floors, raise fresh fish on our farms, and deliver goods across Nigeria with care and efficiency.
        </p>
        <div className={styles.imagePlaceholder}>[Image: Team or Farm]</div>
        <motion.div
          className={styles.sectionGraphic1}
          animate={{ x: [-50, 50, -50], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </motion.section>

      {/* Epoxy Floors & Decorations */}
      <motion.section
        ref={epoxyRef}
        className={styles.section}
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, type: "spring" }}
      >
        <h2><FaPaintRoller className={styles.icon} /> Epoxy Floors & Decorations</h2>
        <p>
          Our epoxy floors turn any space into a masterpiece. With expert roofing and stylish POP designs, we bring beauty and durability to homes and businesses alike.
        </p>
        <div className={styles.imagePlaceholder}>[Image: Epoxy Floor Sample]</div>
        <div className={styles.imagePlaceholder}>[Image: Decoration Project]</div>
        <motion.div
          className={styles.sectionGraphic2}
          animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.section>

      {/* Fish Farming */}
      <motion.section
        ref={fishRef}
        className={styles.section}
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, type: "spring" }}
      >
        <h2><FaFish className={styles.icon} /> Fresh & Dry Fish</h2>
        <p>
          From our farms to your table, we offer the finest fresh and dry fish. Raised with dedication, our products promise quality you can taste in every bite.
        </p>
        <div className={styles.imagePlaceholder}>[Image: Fresh Fish]</div>
        <div className={styles.videoPlayer}>
          <video controls>
            <source src="/videos/fish-farming.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <motion.div
          className={styles.sectionGraphic3}
          animate={{ y: [0, -30, 0], rotate: [0, 360, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </motion.section>

      {/* Logistics */}
      <motion.section
        ref={logisticsRef}
        className={styles.section}
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, type: "spring" }}
      >
        <h2><FaTruck className={styles.icon} /> Logistics Services</h2>
        <p>
          We move your goods with speed and reliability. Connecting Abuja, Lagos, and beyond, our logistics services ensure your deliveries arrive on time, every time.
        </p>
        <div className={styles.imagePlaceholder}>[Image: Logistics Truck]</div>
        <motion.div
          className={styles.sectionGraphic4}
          animate={{ rotate: [0, 360, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </motion.section>

      {/* Additional Services */}
      <motion.section
        ref={servicesRef}
        className={styles.section}
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, type: "spring" }}
      >
        <h2><FaRocket className={styles.icon} /> More Services</h2>
        <ul>
          <li><FaBroom className={styles.icon} /> Industrial Cleaning: Spotless results.</li>
          <li><FaBug className={styles.icon} /> Pest Control: Keep pests away.</li>
          <li><FaHome className={styles.icon} /> House Keeping: A tidy home, always.</li>
          <li><FaPaintRoller className={styles.icon} /> Painting: Fresh, vibrant finishes.</li>
          <li><FaStar className={styles.icon} /> General Contracting: Building made simple.</li>
        </ul>
        <div className={styles.imagePlaceholder}>[Image: Cleaning Crew]</div>
        <div className={styles.videoPlayer}>
          <video controls>
            <source src="/videos/pest-control.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <motion.div
          className={styles.sectionGraphic5}
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.section>

      {/* Contact Section */}
      <motion.section
        ref={contactRef}
        className={styles.contact}
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, type: "spring" }}
      >
        <h2><FaEnvelope className={styles.icon} /> Contact Us</h2>
        <p><strong>Jeshfield Enterprises Nigeria</strong></p>
        <p>Abuja: H6 Suite B1, Transpharm Plaza, Opp. Utako Motor Park, Jabi Abuja</p>
        <p>Owerri: Road 5 ext. B1, Security Post, Imo Housing Estate, Umuguma Owerri West L.G.A.</p>
        <p>Aba: 134 Ikot-ekpene Road, Ogbor Hill Aba, Abia State</p>
        <p>Lagos: 12 Wole Ogunumi Street, Okpebi Allen, Ikeja Lagos State</p>
        <p><FaPhone className={styles.icon} /> Contacts: 08071465640, 07030276424</p>
        <p><FaEnvelope className={styles.icon} /> Email: jeshuacasey@yahoo.co.uk</p>
        <p>
          <FaTwitter className={styles.icon} /> @jeshfield
          <span> | </span>
          <FaFacebook className={styles.icon} />{" "}
          <a href="http://www.facebook.com/jeshfieldnigeria">Facebook</a>
        </p>
        <motion.div
          className={styles.sectionGraphic6}
          animate={{ x: [-100, 100, -100], rotate: [0, 180, 0] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
      </motion.section>
    </div>
  );
}