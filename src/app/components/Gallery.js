'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiX, HiZoomIn, HiPlay } from 'react-icons/hi';

const galleryItems = [
  {
    id: 1,
    category: 'flooring',
    title: 'Metallic Epoxy Floor',
    description: 'Luxury residential installation',
    image: '/images/epoxy.jpg',
  },
  {
    id: 2,
    category: 'flooring',
    title: 'Epoxy Flooring Design',
    description: 'Premium commercial space',
    image: '/images/epoxy2.jpg',
  },
  {
    id: 3,
    category: 'flooring',
    title: 'Epoxy Installation',
    description: 'Industrial-grade coating',
    image: '/images/epoxy-flooring.jpg',
  },
  {
    id: 4,
    category: 'flooring',
    title: 'Painting & Finishing',
    description: 'Professional painting services',
    image: '/images/painting-block.jpg',
  },
  {
    id: 'v1',
    category: 'flooring',
    title: 'Epoxy Process Video',
    description: 'Watch our epoxy flooring process',
    video: '/images/epoxy.mp4',
  },
  {
    id: 5,
    category: 'agriculture',
    title: 'Snail Farm',
    description: 'Sustainable snail breeding',
    image: '/images/snail farm.jpeg',
  },
  {
    id: 6,
    category: 'agriculture',
    title: 'Dried Snail',
    description: 'Processed for export',
    image: '/images/dried-snail.jpg',
  },
  {
    id: 7,
    category: 'agriculture',
    title: 'Catfish Harvest',
    description: 'Premium aquaculture',
    image: '/images/catfish.jpeg',
  },
  {
    id: 'v2',
    category: 'agriculture',
    title: 'Catfish Farming',
    description: 'Watch our catfish farming process',
    video: '/images/catfish.mp4',
  },
  {
    id: 8,
    category: 'agriculture',
    title: 'Smoked Catfish',
    description: 'Traditional smoking process',
    image: '/images/smoked-catfish.jpg',
  },
  {
    id: 9,
    category: 'agriculture',
    title: 'Dried Fish Export',
    description: 'Ready for international market',
    image: '/images/dried-fish-ready-for-export.jpg',
  },
  {
    id: 10,
    category: 'agriculture',
    title: 'Crayfish',
    description: 'Freshwater delicacy',
    image: '/images/crayfish.jpeg',
  },
  {
    id: 11,
    category: 'agriculture',
    title: 'Periwinkle',
    description: 'Coastal delicacy',
    image: '/images/periwinkle.jpeg',
  },
  {
    id: 12,
    category: 'agriculture',
    title: 'Turkey Farm',
    description: 'Quality poultry',
    image: '/images/turkey.jpeg',
  },
  {
    id: 'v3',
    category: 'agriculture',
    title: 'Cassava Farming',
    description: 'Watch our cassava cultivation process',
    video: '/images/cassava-farm.mp4',
  },
  {
    id: 13,
    category: 'agriculture',
    title: 'Birds',
    description: 'Live poultry birds',
    image: '/images/birds.webp',
  },
  {
    id: 14,
    category: 'agriculture',
    title: 'Poultry',
    description: 'Farm birds',
    image: '/images/bird.jpeg',
  },
  {
    id: 15,
    category: 'agriculture',
    title: 'Fresh Vegetables',
    description: 'Farm produce',
    image: '/images/vegetables.jpeg',
  },
  {
    id: 16,
    category: 'agriculture',
    title: 'Cassava',
    description: 'Root crop farming',
    image: '/images/cassava.jpeg',
  },
  {
    id: 'v4',
    category: 'logistics',
    title: 'About Jeshfield',
    description: 'Learn more about our company',
    video: '/images/jeshfield-global-about.mp4',
  },
  {
    id: 17,
    category: 'logistics',
    title: 'Export Sealing',
    description: 'Crayfish ready for export',
    image: '/images/sealed-crayfish-ready-for-export.jpg',
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'flooring', label: 'Flooring' },
  { id: 'agriculture', label: 'Agriculture' },
  { id: 'logistics', label: 'Logistics' },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-dark relative overflow-hidden">
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
          className="text-center mb-12"
        >
          <span className="text-accent font-medium tracking-wider uppercase text-sm">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream mt-3 mb-6">
            Project <span className="text-gradient">Gallery</span>
          </h2>
          <div className="gold-line mx-auto" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-accent text-dark'
                  : 'bg-white/10 text-cream hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedImage(item)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-dark/40">
                {/* Image or Video */}
                {item.video ? (
                  <video
                    src={item.video}
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.video ? (
                      <HiPlay className="w-8 h-8 text-accent" />
                    ) : (
                      <HiZoomIn className="w-8 h-8 text-accent" />
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark via-dark/80 to-transparent">
                  <span className="text-accent text-xs font-medium uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-cream mt-1">{item.title}</h3>
                  <p className="text-sm text-cream/70">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/95 backdrop-blur-lg"
          onClick={() => setSelectedImage(null)}
        >
          <motion.button
            className="absolute top-6 right-6 text-cream/60 hover:text-cream"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSelectedImage(null)}
          >
            <HiX className="w-8 h-8" />
          </motion.button>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-dark/40 flex items-center justify-center">
              {selectedImage.video ? (
                <video
                  src={selectedImage.video}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="text-center mt-4">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-white/70">{selectedImage.description}</p>
              <span className="text-accent text-sm uppercase tracking-wider mt-2 inline-block">
                {selectedImage.category}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
