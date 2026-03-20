'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  HiOutlineBadgeCheck,
  HiOutlineThumbUp,
  HiOutlineCog,
  HiOutlineMap
} from 'react-icons/hi';

const reasons = [
  {
    icon: HiOutlineBadgeCheck,
    title: 'Quality Assurance',
    description: 'Every project undergoes rigorous quality checks to ensure we deliver nothing but the best. Our commitment to excellence is unwavering.',
    stat: '100%',
    statLabel: 'Quality Score',
  },
  {
    icon: HiOutlineThumbUp,
    title: 'Trusted Expertise',
    description: 'Over a decade of experience across multiple industries. Our team brings proven expertise and deep industry knowledge to every engagement.',
    stat: '10+',
    statLabel: 'Years Experience',
  },
  {
    icon: HiOutlineCog,
    title: 'Modern Techniques',
    description: 'We leverage cutting-edge technology and innovative methods while respecting traditional values that have stood the test of time.',
    stat: '50+',
    statLabel: 'Innovations',
  },
  {
    icon: HiOutlineMap,
    title: 'Nationwide Reach',
    description: 'From Lagos to Abuja, Port Harcourt to Kano, our services span across Nigeria, bringing excellence to every corner of the nation.',
    stat: '36',
    statLabel: 'States Covered',
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium tracking-wider uppercase text-sm">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mt-3 mb-6">
              The <span className="text-gradient">Jeshfield</span> Difference
            </h2>
            <div className="gold-line mb-8" />
            <p className="text-dark/70 text-lg leading-relaxed mb-8">
              We don&apos;t just deliver services—we deliver excellence. Our unique blend of 
              traditional values and modern innovation sets us apart in every industry we touch.
            </p>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img 
                  src="/images/logo.png" 
                  alt="Jeshfield Global"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-dark">Trusted by 500+ Clients</p>
                <p className="text-sm text-dark/60">Across Nigeria and beyond</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{reason.title}</h3>
                <p className="text-sm text-dark/60 mb-4">{reason.description}</p>
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-2xl font-bold text-gradient">{reason.stat}</span>
                  <span className="text-xs text-dark/50 ml-2">{reason.statLabel}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
