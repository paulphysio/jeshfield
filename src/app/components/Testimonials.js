'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiStar, HiChevronLeft, HiChevronRight, HiChatAlt2 } from 'react-icons/hi';

const testimonials = [
  {
    id: 1,
    name: 'Chinedu Okonkwo',
    role: 'CEO, Royal Interiors',
    content: 'Jeshfield Global transformed our office space with their exceptional epoxy flooring. The attention to detail and professionalism exceeded our expectations. Truly a premium service provider.',
    rating: 5,
    service: 'Epoxy Flooring',
  },
  {
    id: 2,
    name: 'Amara Okafor',
    role: 'Restaurant Owner',
    content: 'We have been sourcing fresh catfish and snails from Jeshfield for over 3 years. Their consistency in quality and timely delivery has made them an invaluable partner to our business.',
    rating: 5,
    service: 'Agriculture',
  },
  {
    id: 3,
    name: 'Michael Adeyemi',
    role: 'Supply Chain Manager',
    content: 'Their logistics service is second to none. Reliable, efficient, and professional. They have handled our nationwide distribution with remarkable precision and care.',
    rating: 5,
    service: 'Logistics',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      
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
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mt-3 mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <div className="gold-line mx-auto" />
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                {/* Quote Icon */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-8">
                  <HiChatAlt2 className="w-8 h-8 text-accent" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <HiStar key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-lg md:text-xl text-dark/80 leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-cream">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-dark">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-dark/60">{testimonials[currentIndex].role}</p>
                  <span className="mt-2 px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                    {testimonials[currentIndex].service}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-dark hover:bg-accent hover:text-dark transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <HiChevronLeft className="w-6 h-6" />
              </motion.button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-accent'
                        : 'bg-dark/20 hover:bg-dark/40'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-dark hover:bg-accent hover:text-dark transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <HiChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 pt-16 border-t border-dark/10"
        >
          {[
            { value: '500+', label: 'Happy Clients' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '98%', label: 'Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-dark/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
