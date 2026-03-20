'use client';

import { motion } from 'framer-motion';
import { HiArrowRight, HiOutlinePlay } from 'react-icons/hi';

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animated-gradient" />
      
      {/* Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("/images/newlogo.png")`,
        }}
      />

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/20 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/20 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Logo - visible on all screen sizes */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <img 
              src="/images/logo.png" 
              alt="Jeshfield Global"
              className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-accent/30"
            />
          </motion.div>
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium tracking-wider uppercase mb-6">
            Premium Nigerian Enterprise
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 leading-tight"
        >
          Crafting{' '}
          <span className="text-gradient">Excellence</span>
          <br />
          Across Industries
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-cream/80 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          From luxury epoxy flooring to premium agriculture and precision logistics, 
          Jeshfield Global delivers unmatched quality. We blend innovation with tradition 
          to redefine excellence in Nigeria and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#services"
            onClick={(e) => handleScroll(e, '#services')}
            className="btn-primary flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Services
            <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="btn-secondary flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '500+', label: 'Projects Completed' },
            { value: '3', label: 'Industries' },
            { value: '100%', label: 'Satisfaction' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-cream/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-accent/50 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
