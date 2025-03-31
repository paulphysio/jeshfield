"use client";
import { motion } from "framer-motion";
import styles from "../page.module.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      className={styles.fullSection}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.sectionContent}>
        <h1 className={styles.sectionTitle}><FaEnvelope className={styles.icon} /> Contact Us</h1>
        <div className={styles.contactInfo}>
          <p><strong>Jeshfield Global</strong></p>
          <p><FaMapMarkerAlt className={styles.icon} /> Abuja: H6 Suite B1, Transpharm Plaza, Opp. Utako Motor Park, Jabi</p>
          <p><FaMapMarkerAlt className={styles.icon} /> Owerri: Road 5 ext. B1, Security Post, Imo Housing Estate</p>
          <p><FaMapMarkerAlt className={styles.icon} /> Aba: 134 Ikot-ekpene Road, Ogbor Hill, Abia State</p>
          <p><FaMapMarkerAlt className={styles.icon} /> Lagos: 12 Wole Ogunumi Street, Okpebi Allen, Ikeja</p>
          <p><FaPhone className={styles.icon} /> 08071465640, 07030276424</p>
          <p><FaEnvelope className={styles.icon} type="email" /> jeshfieldent@gmail.com</p>
          <p>
            <FaTwitter className={styles.icon} /> @jeshfield |{" "}
            <FaFacebookF className={styles.icon} />{" "}
            <a href="http://www.facebook.com/jeshfieldnigeria">Facebook</a>
          </p>
        </div>
      </div>
    </motion.section>
  );
}