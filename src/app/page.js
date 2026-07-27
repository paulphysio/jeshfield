'use client';

import { useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CompanyProfile from './components/CompanyProfile';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  useEffect(() => {
    // Scroll to top on page load/refresh
    window.scrollTo(0, 0);
  }, []);

  return (
    <LoadingScreen>
      <main className="relative">
        <Navbar />
        <Hero />
        <About />
        <CompanyProfile />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </LoadingScreen>
  );
}