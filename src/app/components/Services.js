'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  HiColorSwatch, 
  HiOutlineTruck, 
  HiOutlineHome,
  HiArrowRight
} from 'react-icons/hi';

const services = [
  {
    icon: HiColorSwatch,
    title: 'Epoxy Flooring',
    subtitle: 'Luxury Interior Solutions',
    description: 'Stunning, durable epoxy floors for homes and businesses.',
    features: ['Metallic Epoxy Finishes', '3D Floor Designs', 'Industrial Coatings', 'Decorative Flakes'],
    color: 'from-accent/20 to-accent/5',
    borderColor: 'border-accent/30',
  },
  {
    icon: HiOutlineHome,
    title: 'Agriculture',
    subtitle: 'Premium Farm Products',
    description: 'Fresh snails, catfish, poultry, vegetables & more. Farm to table.',
    features: ['Live Snails & Catfish', 'Fresh Vegetables', 'Poultry Products', 'Seafood & Crayfish'],
    color: 'from-primary/20 to-primary/5',
    borderColor: 'border-primary/30',
  },
  {
    icon: HiOutlineTruck,
    title: 'Logistics',
    subtitle: 'Precision Delivery Services',
    description: 'Fast, reliable delivery across Nigeria. Your goods, our priority.',
    features: ['Express Delivery', 'Bulk Transportation', 'Warehousing', 'Nationwide Coverage'],
    color: 'from-dark/20 to-dark/5',
    borderColor: 'border-dark/30',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding bg-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212,175,55,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

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
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream mt-3 mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <div className="gold-line mx-auto" />
          <p className="text-cream/70 mt-6 max-w-2xl mx-auto">
            Excellence across three core industries. Each service delivered with precision, 
            passion, and an unwavering commitment to quality.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`group relative bg-gradient-to-b ${service.color} backdrop-blur-sm rounded-2xl p-8 border ${service.borderColor} hover:border-accent/50 transition-all duration-500`}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>

                {/* Title */}
                <span className="text-accent/60 text-sm font-medium uppercase tracking-wider">
                  {service.subtitle}
                </span>
                <h3 className="text-2xl font-bold text-cream mt-2 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-cream/70 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-cream/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  className="flex items-center gap-2 text-accent font-medium group/btn"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <HiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-cream/60 mb-6">
            Need a custom solution for your project?
          </p>
          <motion.a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Free Quote
            <HiArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}