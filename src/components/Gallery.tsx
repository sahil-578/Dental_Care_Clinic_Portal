import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

const caseStudies = [
  {
    title: "Teeth Whitening Transformation",
    description: "Patient with severe staining due to coffee and tobacco achieved 8 shades whiter teeth in just two sessions.",
    before: "/beforeTeeth.jpg",
    after: "/afterTeeth.jpg"
  },
  {
    title: "Complete Smile Makeover",
    description: "Multiple issues including missing teeth, discoloration and misalignment corrected with veneers and implants.",
    before: "/beforeSmileMakeover.jpg",
    after: "/afterSmilMakeover.jpg"
  },
  {
    title: "Invisalign Success Story",
    description: "Severe crowding corrected in 14 months using invisible aligners without traditional braces.",
    before: "/invisialign before.jpg",
    after: "/invisialign after.jpg"
  },
  {
    title: "Dental Implant Restoration",
    description: "Front tooth replacement with an implant that perfectly matches the patient's natural teeth.",
    before: "/beforeDentalImplant.jpg",
    after: "/afterDentalImplant.jpg"
  }
];

const Gallery = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedCase(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedCase(null);
    document.body.style.overflow = 'auto';
  };

  const navigateCase = (direction: 'next' | 'prev') => {
    if (selectedCase === null) return;
    
    if (direction === 'next') {
      setSelectedCase((selectedCase + 1) % caseStudies.length);
    } else {
      setSelectedCase((selectedCase - 1 + caseStudies.length) % caseStudies.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <ScrollReveal>
            <span className="inline-block px-3 py-1 mb-4 rounded-full bg-dental-50 text-dental-700 text-xs font-medium uppercase tracking-wider">
              Before & After
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Smile Transformations
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              View our gallery of actual patients and their incredible dental transformations. 
              These results showcase the quality and precision of our work.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {caseStudies.map((caseStudy, index) => (
            <ScrollReveal key={index} delay={index * 100} className={`stagger-${index + 1}`}>
              <div 
                className="bg-white rounded-xl overflow-hidden shadow-sm cursor-pointer hover-scale"
                onClick={() => openLightbox(index)}
              >
                <div className="relative flex">
                  <div className="relative group w-1/2">
                    <img 
                      src={caseStudy.before} 
                      alt={`Before: ${caseStudy.title}`} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Before
                    </div>
                  </div>
                  <div className="relative group w-1/2">
                    <img 
                      src={caseStudy.after} 
                      alt={`After: ${caseStudy.title}`} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-base mb-2">{caseStudy.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{caseStudy.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
