
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

const Hero = () => {

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-24 lg:pt-32 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 -right-40 w-96 h-96 bg-dental-100 rounded-full opacity-40 blur-3xl" />
      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-dental-100 rounded-full opacity-40 blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 max-w-2xl text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 mb-4 rounded-full bg-dental-50 text-dental-700 text-xs font-medium uppercase tracking-wider">
                Expert Dental Care
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6"
            >
              Your Path to a <span className="text-dental-500">Healthier</span> & <span className="text-dental-500">Brighter</span> Smile
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Experience premium dental care in a comfortable environment. Our team of expert dentists is committed to providing you with the best treatment for your perfect smile.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                className="bg-dental-500 hover:bg-dental-600 text-white rounded-md px-8 py-6 font-medium flex items-center"
                onClick={scrollToBooking}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-dental-200 text-dental-700 hover:bg-dental-50 rounded-md px-8 py-6 font-medium flex items-center"
                onClick={scrollToServices}
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 z-10"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-dental-500/10 rounded-2xl transform rotate-3"></div>
              <img 
                // src="/placeholder.svg" 
                src='/heroImage.jpg'
                alt="Smiling patient at dental clinic" 
                className="w-full h-[650px] rounded-2xl shadow-lg object-cover relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
