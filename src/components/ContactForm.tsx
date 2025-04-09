
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { Calendar, Clock, SendIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
      <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="border-dental-100 focus:border-dental-400 focus:ring-dental-400"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid gap-3">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="border-dental-100 focus:border-dental-400 focus:ring-dental-400"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(XXX) XXX-XXXX"
                className="border-dental-100 focus:border-dental-400 focus:ring-dental-400"
              />
            </div>
          </div>
          
          <div className="grid gap-3">
            <Label htmlFor="service">Interested Service</Label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-dental-100 bg-white px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-dental-400 focus:border-dental-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Select a service</option>
              <option value="Teeth Whitening">Teeth Whitening</option>
              <option value="Root Canal Treatment">Root Canal Treatment</option>
              <option value="Braces & Aligners">Braces & Aligners</option>
              <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
              <option value="Dental Implants">Dental Implants</option>
              <option value="Pediatric Dentistry">Pediatric Dentistry</option>
              <option value="Emergency Care">Emergency Care</option>
              <option value="General Checkup">General Checkup</option>
            </select>
          </div>
          
          <div className="grid gap-3">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your dental concerns or questions..."
              rows={4}
              className="resize-none border-dental-100 focus:border-dental-400 focus:ring-dental-400"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-dental-500 hover:bg-dental-600 text-white"
            disabled={loading}
          >
            {loading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="mr-2 h-4 w-4 border-2 border-t-transparent border-white rounded-full"
              />
            ) : (
              <SendIcon className="mr-2 h-4 w-4" />
            )}
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
