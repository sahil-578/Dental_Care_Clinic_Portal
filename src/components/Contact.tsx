
import ScrollReveal from './ScrollReveal';
import ContactForm from './ContactForm';
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <ScrollReveal>
            <span className="inline-block px-3 py-1 mb-4 rounded-full bg-dental-50 text-dental-700 text-xs font-medium uppercase tracking-wider">
              Get in Touch
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contact Us
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions or ready to schedule your appointment? 
              Contact our friendly team today and take the first step towards your perfect smile.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 mt-12">
          <div className="lg:col-span-3">
            <ScrollReveal>
              <ContactForm />
            </ScrollReveal>
          </div>
          
          <div className="lg:col-span-2">
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 h-full">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-dental-50 flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-dental-500" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Office Location</h4>
                      <p className="text-muted-foreground">
                        123 Kiran Garden, Uttam Nagar<br />
                        New Delhi, IN 110059
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-dental-50 flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5 text-dental-500" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone Number</h4>
                      <p className="text-dental-600 hover:text-dental-700 transition-colors">
                        <a href="tel:+910000000000">(XXX) XXX-XXXX</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-dental-50 flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-5 w-5 text-dental-500" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email Address</h4>
                      <p className="text-dental-600 hover:text-dental-700 transition-colors">
                        <a href="mailto:info@dentalcare.com">info@dentalcare.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-dental-50 flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="h-5 w-5 text-dental-500" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Office Hours</h4>
                      <div className="text-muted-foreground">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-dental-50 flex items-center justify-center mr-4 flex-shrink-0">
                      <Calendar className="h-5 w-5 text-dental-500" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Book Online</h4>
                      <p className="text-muted-foreground">
                        Use our online booking system to schedule your appointment at any time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        <div className="mt-12">
          <ScrollReveal>
            <div className="rounded-xl overflow-hidden shadow-sm h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7004.864838555835!2d77.04137618096465!3d28.616799412948552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d050030a6c34d%3A0x78bc8411c12daee2!2sKiran%20Garden%20Uttam%20Nagar!5e0!3m2!1sen!2sus!4v1740746512859!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
