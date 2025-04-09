
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import AppointmentBooking from '@/components/AppointmentBooking';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  const location = useLocation();

  // Log URL changes
  useEffect(() => {
    console.log('Current URL path:', location.pathname);
    
    // You can replace this with your own analytics or tracking code
    const sendPageView = async () => {
      try {
        // Example of using fetch for analytics instead of the script
        // Uncomment and modify this for your actual implementation
        /*
        await fetch('https://your-analytics-api.com/pageview', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            path: location.pathname,
            timestamp: new Date().toISOString(),
          }),
        });
        */
        
        // This is just a placeholder log
        console.log('Page view recorded for:', location.pathname);
      } catch (error) {
        console.error('Failed to send page view data:', error);
      }
    };
    
    sendPageView();
  }, [location]);
  
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      });
    });
    
    // Initialize scroll reveal animation
    const handleScroll = () => {
      const revealElements = document.querySelectorAll('.reveal');
      
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <AppointmentBooking />
      <FAQ />
      <Contact />
      <Footer />
      <ScrollToTop />
    </motion.div>
  );
};

export default Index;
