"use client";
import { motion } from "framer-motion";
import styles from "../page.module.css";
import { FaEnvelope, FaPhone, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      className={styles.fullSection}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.sectionContent}>
        <h1 className={styles.sectionTitle}><FaEnvelope /> Contact Us</h1>
        <div className={styles.contactInfo}>
          <p><strong>Jeshfield Global</strong></p>
          <p>Abuja: H6 Suite B1, Transpharm Plaza, Opp. Utako Motor Park, Jabi</p>
          <p>Owerri: Road 5 ext. B1, Security Post, Imo Housing Estate</p>
          <p>Aba: 134 Ikot-ekpene Road, Ogbor Hill, Abia State</p>
          <p>Lagos: 12 Wole Ogunumi Street, Okpebi Allen, Ikeja</p>
          <p><FaPhone /> 08071465640, 07030276424</p>
          <p><FaEnvelope /> jeshuacasey@yahoo.co.uk</p>
          <p>
            <FaInstagram /> @jeshfield | <FaFacebook />{" "}
            <a href="http://www.facebook.com/jeshfieldnigeria">Facebook</a>
          </p>
        </div>
      </div>
    </motion.section>
  );
}