
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Regular Patient",
    avatar: "/female testimonial.png",
    content: "The team at DentalCare is exceptional! I had severe dental anxiety before coming here, but Dr. Smith and his staff made me feel comfortable from day one. My smile has never looked better.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Invisalign Patient",
    avatar: "/men_testimonial.png",
    content: "I completed my Invisalign treatment with amazing results. The process was smooth and the staff was always responsive to my questions. I finally have the confidence to smile in photos!",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Cosmetic Dentistry Patient",
    avatar: "/female testimonial.png",
    content: "After years of being self-conscious about my smile, I finally decided to get veneers. The results exceeded my expectations. The entire team was professional and supportive throughout the process.",
    rating: 5
  },
  {
    name: "David Williams",
    role: "Emergency Care Patient",
    avatar: "/men_testimonial.png",
    content: "When I cracked my tooth on a weekend, I was sure I'd have to wait days in pain. DentalCare saw me the same day, fixed the problem, and followed up to ensure I was doing well. Truly exceptional service!",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <ScrollReveal>
            <span className="inline-block px-3 py-1 mb-4 rounded-full bg-dental-50 text-dental-700 text-xs font-medium uppercase tracking-wider">
              Testimonials
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Patients Say
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Read what our patients have to say about their experiences at our dental clinic.
              Their stories reflect our commitment to exceptional care.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-12 relative">
          <ScrollReveal>
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-sm p-8 md:p-10"
                >
                  <div className="absolute top-6 right-8 text-dental-100">
                    <Quote className="h-24 w-24 rotate-180" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="h-16 w-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">{testimonials[currentIndex].name}</h3>
                        <p className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</p>
                        <div className="flex mt-1">
                          {renderStars(testimonials[currentIndex].rating)}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-lg italic relative z-10">
                      "{testimonials[currentIndex].content}"
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="flex justify-center mt-8 gap-4">
                <button
                  onClick={goToPrev}
                  className="h-10 w-10 rounded-full bg-white border border-dental-100 flex items-center justify-center text-dental-600 hover:bg-dental-50 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="h-10 w-10 rounded-full bg-white border border-dental-100 flex items-center justify-center text-dental-600 hover:bg-dental-50 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
