
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown,
  ChevronUp,
  Phone,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    question: "Does teeth whitening hurt?",
    answer: "No, professional teeth whitening should not cause pain. Some patients may experience temporary sensitivity, but our dentists use techniques and products that minimize discomfort. We also provide post-treatment care instructions to ensure your comfort."
  },
  {
    question: "How often should I visit the dentist?",
    answer: "We recommend visiting the dentist every six months for a check-up and professional cleaning. However, patients with specific dental conditions may need more frequent visits. Your dentist will recommend the ideal schedule based on your oral health needs."
  },
  {
    question: "What is the cost of braces?",
    answer: "The cost of braces varies depending on the type (metal, ceramic, lingual, or clear aligners) and the complexity of your case. During your consultation, we'll provide a detailed treatment plan with associated costs. We also offer payment plans to make orthodontic treatment more accessible."
  },
  {
    question: "Are dental X-rays safe?",
    answer: "Yes, dental X-rays are safe. We use digital X-ray technology that emits significantly less radiation than traditional X-rays. Protective measures like lead aprons are also used. The benefits of detecting dental problems early through X-rays far outweigh the minimal risks."
  },
  {
    question: "How long do dental implants last?",
    answer: "With proper care and maintenance, dental implants can last a lifetime. The implant itself, which is anchored to your jawbone, rarely needs replacement. The crown attached to the implant typically lasts 10-15 years before it may need replacement due to normal wear and tear."
  },
  {
    question: "What should I do in a dental emergency?",
    answer: "For a dental emergency such as severe pain, a knocked-out tooth, or broken dental work, contact our office immediately. We reserve time in our daily schedule for emergency patients. Outside of office hours, our answering service will direct you to the appropriate care."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <ScrollReveal>
            <span className="inline-block px-3 py-1 mb-4 rounded-full bg-dental-50 text-dental-700 text-xs font-medium uppercase tracking-wider">
              FAQ
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about dental treatments, procedures, and care.
              If you don't see your question here, feel free to contact us.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <button
                    className="w-full text-left px-6 py-4 flex justify-between items-center"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-dental-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-4 text-muted-foreground">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-sm p-8 max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our friendly team is here to help with any other questions you might have.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-dental-500 hover:bg-dental-600 text-white flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us Now
                </Button>
                <Button variant="outline" className="border-dental-200 text-dental-700 hover:bg-dental-50 flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
