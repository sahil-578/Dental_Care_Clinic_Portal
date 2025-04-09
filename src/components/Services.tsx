
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smile, 
  Leaf, 
  CheckCircle2, 
  Baby, 
  Zap, 
  Stethoscope,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    description: 'Restore the natural white color of your teeth with our professional whitening treatments.',
    icon: Sparkles,
    benefits: [
      'Noticeably whiter teeth in one visit',
      'Safe and painless procedure',
      'Long-lasting results',
      'Boosts confidence and self-esteem'
    ]
  },
  {
    id: 'root-canal',
    title: 'Root Canal Treatment',
    description: 'Preserve your natural tooth and eliminate pain with our gentle root canal therapy.',
    icon: Leaf,
    benefits: [
      'Relief from severe toothache',
      'Preservation of your natural tooth',
      'Prevention of infection spread',
      'Virtually painless with modern techniques'
    ]
  },
  {
    id: 'braces',
    title: 'Braces & Aligners',
    description: 'Achieve a perfectly aligned smile with our range of orthodontic treatments.',
    icon: Smile,
    benefits: [
      'Straighter teeth and improved bite',
      'Various options including invisible aligners',
      'Customized treatment plans',
      'Enhanced smile aesthetics'
    ]
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with our range of cosmetic procedures for a perfect appearance.',
    icon: CheckCircle2,
    benefits: [
      'Custom smile makeover plans',
      'Veneers, bonding, and reshaping options',
      'Natural-looking results',
      'Dramatically improved smile aesthetics'
    ]
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'Replace missing teeth with permanent, natural-looking dental implants.',
    icon: Stethoscope,
    benefits: [
      'Permanent solution for missing teeth',
      'Preserves facial structure',
      'Looks and functions like natural teeth',
      'Improved chewing ability and speech'
    ]
  },
  {
    id: 'pediatric',
    title: 'Pediatric Dentistry',
    description: 'Specialized dental care for children in a friendly, comfortable environment.',
    icon: Baby,
    benefits: [
      'Child-friendly environment and approach',
      'Preventive care and education',
      'Early detection of dental issues',
      'Building positive dental habits'
    ]
  },
  {
    id: 'emergency',
    title: 'Emergency Dental Care',
    description: 'Immediate attention for dental emergencies to relieve pain and prevent complications.',
    icon: Zap,
    benefits: [
      'Same-day emergency appointments',
      'Quick pain relief',
      'Treatment of dental injuries',
      'Prevention of further complications'
    ]
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(services[0].id);

  const handleServiceClick = (id: string) => {
    setActiveService(id);
  };

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const activeServiceData = services.find(service => service.id === activeService);

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <ScrollReveal>
            <span className="inline-block px-3 py-1 mb-4 rounded-full bg-dental-50 text-dental-700 text-xs font-medium uppercase tracking-wider">
              Our Services
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Dental Care
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From routine check-ups to advanced treatments, we offer a full range of dental services 
              to keep your smile healthy and beautiful.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-1">
            <ScrollReveal>
              <div className="bg-white rounded-xl shadow-sm p-1">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(service.id)}
                    className={`w-full text-left px-5 py-4 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                      activeService === service.id
                        ? 'bg-dental-50 text-dental-700'
                        : 'hover:bg-dental-50/50'
                    }`}
                  >
                    <service.icon className={`h-5 w-5 ${
                      activeService === service.id ? 'text-dental-500' : 'text-muted-foreground'
                    }`} />
                    <span className="font-medium">{service.title}</span>
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl p-8 shadow-sm h-full"
              >
                {activeServiceData && (
                  <>
                    <div className="flex items-start mb-6">
                      <div className="w-12 h-12 bg-dental-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <activeServiceData.icon className="h-6 w-6 text-dental-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{activeServiceData.title}</h3>
                        <p className="text-muted-foreground">{activeServiceData.description}</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-dental-700 mb-3">Benefits</h4>
                      <ul className="space-y-3">
                        {activeServiceData.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-dental-500 mr-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8">
                      <Button className="bg-dental-500 hover:bg-dental-600 text-white" onClick={scrollToBooking}>
                        Book This Service
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
