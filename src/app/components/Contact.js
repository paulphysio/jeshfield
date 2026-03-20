'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  HiMail, 
  HiPhone, 
  HiLocationMarker,
  HiArrowRight,
  HiCheck
} from 'react-icons/hi';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

const contactInfo = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'jeshfieldent@gmail.com',
    href: 'mailto:jeshfieldent@gmail.com',
  },
  {
    icon: HiPhone,
    label: 'Phone',
    value: '08071465640, 07030276424',
    href: 'tel:08071465640',
  },
];

const locations = [
  { city: 'Abuja', address: 'H6 Suite B1, Transpharm Plaza, Opp. Utako Motor Park, Jabi' },
  { city: 'Owerri', address: 'Road 5 ext. B1, Security Post, Imo Housing Estate' },
  { city: 'Aba', address: '134 Ikot-ekpene Road, Ogbor Hill, Abia State' },
  { city: 'Lagos', address: '12 Wole Ogunumi Street, Okpebi Allen, Ikeja' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="section-padding bg-dark relative overflow-hidden">
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
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream mt-3 mb-6">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <div className="gold-line mx-auto" />
          <p className="text-cream/70 mt-6 max-w-2xl mx-auto">
            Ready to start your project? Have questions about our services? 
            We&apos;re here to help. Reach out to us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-cream mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <HiCheck className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-bold text-cream mb-2">Message Sent!</h4>
                  <p className="text-cream/70">We&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-cream/80 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-cream/80 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-cream/80 mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-input min-h-[150px] resize-none"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                    <HiArrowRight className="w-5 h-5" />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div>
              <h3 className="text-2xl font-bold text-cream mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-cream/60">{item.label}</p>
                      <p className="text-cream font-medium">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Locations */}
            <div>
              <h3 className="text-xl font-bold text-cream mb-4">Our Locations</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {locations.map((location) => (
                  <div
                    key={location.city}
                    className="p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <HiLocationMarker className="w-4 h-4 text-accent" />
                      <span className="font-semibold text-cream">{location.city}</span>
                    </div>
                    <p className="text-sm text-cream/60">{location.address}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold text-cream mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <motion.a
                  href="http://www.facebook.com/jeshfieldnigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cream hover:bg-accent hover:text-dark hover:border-accent transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaFacebookF className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cream hover:bg-accent hover:text-dark hover:border-accent transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTwitter className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}