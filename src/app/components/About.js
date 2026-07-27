'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  HiFlag, 
  HiOutlineEye, 
  HiOutlineHeart,
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineUsers
} from 'react-icons/hi';

const values = [
  {
    icon: HiOutlineShieldCheck,
    title: 'Excellence',
    description: 'Highest standards in every project.',
  },
  {
    icon: HiOutlineHeart,
    title: 'Integrity',
    description: 'Trust and transparency first.',
  },
  {
    icon: HiOutlineLightningBolt,
    title: 'Innovation',
    description: 'Modern solutions, proven methods.',
  },
  {
    icon: HiOutlineUsers,
    title: 'Partnership',
    description: 'Building lasting relationships.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-cream relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mt-3 mb-6">
            Building Excellence, <span className="text-gradient">One Project at a Time</span>
          </h2>
          <div className="gold-line mx-auto" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary to-primary-light" />
              {/* Logo covering entire area */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/images/logo.png" 
                  alt="Jeshfield Global"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-lg -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary rounded-lg -z-10" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-4">
              Excellence in Every Detail
            </h3>
            <p className="text-dark/70 text-lg mb-6">
              Premium epoxy flooring, sustainable agriculture, precision logistics, and general contracting. 
              We deliver quality that speaks for itself.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-accent"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <HiFlag className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-lg font-bold text-dark mb-2">Our Mission</h4>
                <p className="text-sm text-dark/70">
                  Transform spaces, nourish communities, connect businesses.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <HiOutlineEye className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-dark mb-2">Our Vision</h4>
                <p className="text-sm text-dark/70">
                  Africa&apos;s most trusted enterprise for excellence and innovation.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-dark text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h4 className="text-lg font-bold text-dark mb-2">{value.title}</h4>
                <p className="text-sm text-dark/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}