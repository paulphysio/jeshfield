'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  HiOutlineOfficeBuilding, 
  HiOutlineGlobe, 
  HiStar,
  HiUsers,
  HiChartBar,
  HiLightBulb,
  HiCalendar,
  HiMap,
  HiCheckCircle
} from 'react-icons/hi';

const milestones = [
  {
    year: '2014',
    title: 'Foundation',
    description: 'Jeshfield Global established with a vision to deliver excellence across multiple industries in Nigeria.',
    icon: HiOutlineOfficeBuilding,
  },
  {
    year: '2016',
    title: 'Agriculture Division',
    description: 'Launched premium farm products division, focusing on sustainable snail farming, catfish production, and organic vegetables.',
    icon: HiLightBulb,
  },
  {
    year: '2018',
    title: 'Logistics Expansion',
    description: 'Expanded operations with precision logistics services, establishing delivery networks across major Nigerian cities.',
    icon: HiOutlineGlobe,
  },
  {
    year: '2020',
    title: 'Epoxy Flooring',
    description: 'Introduced luxury epoxy flooring solutions, bringing world-class interior design and industrial coatings to Nigeria.',
    icon: HiStar,
  },
  {
    year: '2023',
    title: 'National Recognition',
    description: 'Recognized as a leading multi-industry enterprise with over 500 successful projects nationwide.',
    icon: HiChartBar,
  },
];

const leadership = [
  {
    name: 'Executive Management',
    role: 'Strategic Leadership',
    description: 'Experienced team with over 25 years combined expertise in construction, agriculture, and logistics.',
    icon: HiUsers,
  },
  {
    name: 'Technical Team',
    role: 'Industry Experts',
    description: 'Skilled professionals in epoxy application, agricultural science, and supply chain management.',
    icon: HiLightBulb,
  },
  {
    name: 'Customer Service',
    role: 'Client Excellence',
    description: 'Dedicated support team ensuring 100% client satisfaction across all service divisions.',
    icon: HiStar,
  },
];

const achievements = [
  '500+ Successfully Completed Projects',
  '10+ Years of Industry Excellence',
  'Operations in 4 Major Nigerian Cities',
  'Multi-Industry Service Portfolio',
  'ISO-Standard Quality Practices',
  'Sustainable & Eco-Friendly Operations',
  'Trusted by 200+ Corporate Clients',
  'Award-Winning Customer Service',
];

const certifications = [
  'Quality Management Systems',
  'Environmental Compliance',
  'Safety Standards Certified',
  'Industry Best Practices',
];

export default function CompanyProfile() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="company-profile" className="section-padding bg-cream relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent" />
      
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
            Company Profile
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mt-3 mb-6">
            Who We <span className="text-gradient">Are</span>
          </h2>
          <div className="gold-line mx-auto" />
        </motion.div>

        {/* Company Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 border-l-4 border-accent"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-4">
                Jeshfield Global Enterprises
              </h3>
              <p className="text-dark/70 text-lg leading-relaxed mb-6">
                Jeshfield Global is a premier Nigerian enterprise that has established itself as a leader 
                in four distinct yet complementary industries: luxury epoxy flooring, sustainable agriculture, 
                precision logistics, and general contracting & supplies. Founded with a commitment to excellence and innovation, we have 
                grown from a visionary startup into a trusted multi-industry powerhouse.
              </p>
              <p className="text-dark/70 text-lg leading-relaxed mb-6">
                Our success is built on a foundation of integrity, quality craftsmanship, and an unwavering 
                dedication to customer satisfaction. We believe in delivering not just products and services, 
                but complete solutions that transform spaces, nourish communities, and connect businesses.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-dark/60">
                  <HiMap className="w-5 h-5 text-accent" />
                  <span>Headquarters: Abuja, Nigeria</span>
                </div>
                <div className="flex items-center gap-2 text-dark/60">
                  <HiCalendar className="w-5 h-5 text-accent" />
                  <span>Established: 2014</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary to-primary-light rounded-2xl overflow-hidden">
                <img 
                  src="/images/newlogo.png" 
                  alt="Jeshfield Global Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            </div>
          </div>
        </motion.div>

        {/* Mission, Vision, Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-accent">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <HiLightBulb className="w-7 h-7 text-accent" />
            </div>
            <h4 className="text-xl font-bold text-dark mb-3">Our Mission</h4>
            <p className="text-dark/70 leading-relaxed">
              To transform spaces through innovative flooring solutions, nourish communities with 
              sustainable agricultural products, and connect businesses through reliable logistics 
              services while maintaining the highest standards of quality and integrity.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <HiOutlineGlobe className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-bold text-dark mb-3">Our Vision</h4>
            <p className="text-dark/70 leading-relaxed">
              To become Africa's most trusted multi-industry enterprise, recognized globally for 
              excellence, innovation, and sustainable business practices that create lasting value 
              for our clients, employees, and communities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-dark">
            <div className="w-14 h-14 rounded-xl bg-dark/10 flex items-center justify-center mb-4">
              <HiStar className="w-7 h-7 text-dark" />
            </div>
            <h4 className="text-xl font-bold text-dark mb-3">Our Philosophy</h4>
            <p className="text-dark/70 leading-relaxed">
              Excellence is not an act, but a habit. We believe in continuous improvement, 
              embracing innovation while respecting tradition, and building relationships based on 
              trust, transparency, and mutual success.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-dark text-center mb-12">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent via-primary to-dark hidden md:block" />
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <milestone.icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-accent font-bold text-lg">{milestone.year}</span>
                    </div>
                    <h4 className="text-xl font-bold text-dark mb-2">{milestone.title}</h4>
                    <p className="text-dark/70">{milestone.description}</p>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-accent border-4 border-white shadow-lg flex items-center justify-center hidden md:flex">
                    <HiCalendar className="w-6 h-6 text-white" />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-dark text-center mb-12">
            Our Leadership Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6">
                  <leader.icon className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-dark mb-2">{leader.name}</h4>
                <span className="text-accent font-medium text-sm mb-4 block">{leader.role}</span>
                <p className="text-dark/70 text-sm leading-relaxed">{leader.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Achievements */}
          <div className="bg-gradient-to-br from-dark to-dark/90 p-8 rounded-2xl text-cream">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <HiChartBar className="w-7 h-7 text-accent" />
              Key Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <HiCheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-cream/90">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-gradient-to-br from-primary to-primary/90 p-8 rounded-2xl text-cream">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <HiStar className="w-7 h-7 text-accent" />
              Certifications & Standards
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <HiCheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-cream/90">{cert}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-white/10 rounded-xl">
              <p className="text-sm text-cream/80">
                We maintain strict quality control measures and adhere to international 
                standards across all our operations, ensuring consistent excellence in every project.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
