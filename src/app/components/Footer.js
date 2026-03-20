'use client';

import { motion } from 'framer-motion';
import { HiArrowUp } from 'react-icons/hi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'Epoxy Flooring',
  'Agriculture',
  'Logistics',
  'Consulting',
];

const socialLinks = [
  { icon: FaFacebookF, href: 'http://www.facebook.com/jeshfieldnigeria', label: 'Facebook' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark relative overflow-hidden">
      {/* Top Border Gradient */}
      <div className="h-1 bg-gradient-to-r from-accent via-accent-light to-accent" />

      {/* Main Footer Content */}
      <div className="section-padding pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src="/images/logo.png" 
                    alt="Jeshfield Global"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-xl font-bold text-cream">Jeshfield</span>
                  <span className="text-xs text-accent block -mt-1 tracking-widest uppercase">
                    Global
                  </span>
                </div>
              </div>
              <p className="text-cream/60 text-sm leading-relaxed mb-6">
                Crafting excellence across epoxy flooring, agriculture, and logistics. 
                Your trusted partner for premium solutions in Nigeria.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cream/60 hover:bg-accent hover:text-dark hover:border-accent transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-cream mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-cream/60 hover:text-accent transition-colors text-sm inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold text-cream mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      onClick={(e) => handleNavClick(e, '#services')}
                      className="text-cream/60 hover:text-accent transition-colors text-sm inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold text-cream mb-6">Contact</h4>
              <ul className="space-y-4 text-sm">
                <li className="text-cream/60">
                  <span className="block text-cream font-medium mb-1">Phone</span>
                  08071465640, 07030276424
                </li>
                <li className="text-cream/60">
                  <span className="block text-cream font-medium mb-1">Email</span>
                  jeshfieldent@gmail.com
                </li>
                <li className="text-cream/60">
                  <span className="block text-cream font-medium mb-1">Head Office</span>
                  H6 Suite B1, Transpharm Plaza, Abuja
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-cream/40 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Jeshfield Global. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-cream/40">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-accent text-dark flex items-center justify-center shadow-lg shadow-accent/30 z-40"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <HiArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
