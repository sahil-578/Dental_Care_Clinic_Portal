
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold text-dental-700 flex items-center mb-4">
              <span className="text-dental-500 mr-1">Dental</span>Care
            </div>
            <p className="text-muted-foreground mb-6">
              Providing top-quality dental care with a gentle touch. 
              Your smile is our priority, and your comfort is our commitment.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-dental-500 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  123 Kiran Garden, Uttam Nagar<br />
                  New Delhi, IN 110059
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-dental-500 mr-2" />
                <a href="tel:+910000000000" className="text-muted-foreground hover:text-dental-600 transition-colors">
                  (XXX) XXX-XXXX
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-dental-500 mr-2" />
                <a href="mailto:info@dentalcare.com" className="text-muted-foreground hover:text-dental-600 transition-colors">
                  info@dentalcare.com
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-dental-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-dental-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-dental-600 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-muted-foreground hover:text-dental-600 transition-colors">
                  Smile Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-muted-foreground hover:text-dental-600 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-dental-600 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-dental-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-dental-600 transition-colors">
                  Teeth Whitening
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-dental-600 transition-colors">
                  Root Canal Treatment
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-dental-600 transition-colors">
                  Braces & Aligners
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-dental-600 transition-colors">
                  Cosmetic Dentistry
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-dental-600 transition-colors">
                  Dental Implants
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-dental-600 transition-colors">
                  Pediatric Dentistry
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-dental-600 transition-colors">
                  Emergency Care
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for dental tips, special offers, and updates.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="border-dental-100 focus:border-dental-400 focus:ring-dental-400"
                required 
              />
              <Button 
                type="submit" 
                className="w-full bg-dental-500 hover:bg-dental-600 text-white"
              >
                Subscribe
              </Button>
            </form>
            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-dental-700 mb-3">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-dental-50 flex items-center justify-center text-dental-500 hover:bg-dental-100 transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-dental-50 flex items-center justify-center text-dental-500 hover:bg-dental-100 transition-colors"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-dental-50 flex items-center justify-center text-dental-500 hover:bg-dental-100 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-muted pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} DentalCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
