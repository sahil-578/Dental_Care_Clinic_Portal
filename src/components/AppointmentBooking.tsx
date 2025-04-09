
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", 
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

const dentists = [
  "Dr. Sarah Miller", "Dr. John Davis", "Dr. Emily Chen"
];

const AppointmentBooking = () => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDentist, setSelectedDentist] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [step, setStep] = useState(1);
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);

  const handleContactInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (step === 1 && (!selectedDate || !selectedTime)) {
      toast({
        title: "Please select both date and time",
        variant: "destructive"
      });
      return;
    }

    if (step === 2 && (!selectedService || !selectedDentist)) {
      toast({
        title: "Please select both service and dentist",
        variant: "destructive"
      });
      return;
    }

    if (step < 3) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    if (!contactInfo.name || !contactInfo.email || !contactInfo.phone) {
      toast({
        title: "Please fill in all contact information",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Appointment Booked!",
        description: `Your appointment has been scheduled for ${selectedDate} at ${selectedTime}.`,
      });
      
      // Reset form
      setSelectedDate('');
      setSelectedTime('');
      setSelectedDentist('');
      setSelectedService('');
      setContactInfo({
        name: '',
        email: '',
        phone: ''
      });
      setStep(1);
    }, 1500);
  };

  return (
    <section id="booking" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <ScrollReveal>
            <span className="inline-block px-3 py-1 mb-4 rounded-full bg-dental-50 text-dental-700 text-xs font-medium uppercase tracking-wider">
              Book Now
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Schedule Your Appointment
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Book your dental appointment in just a few clicks. 
              Choose your preferred date, time, and dentist for a convenient visit.
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step >= 1 ? 'bg-dental-500 text-white' : 'bg-muted text-muted-foreground'
                  }`}>
                    {step > 1 ? <Check className="h-4 w-4" /> : "1"}
                  </div>
                  <div className={`ml-2 ${step === 1 ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                    Date & Time
                  </div>
                </div>
                <div className="h-[2px] flex-1 mx-4 bg-muted"></div>
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step >= 2 ? 'bg-dental-500 text-white' : 'bg-muted text-muted-foreground'
                  }`}>
                    {step > 2 ? <Check className="h-4 w-4" /> : "2"}
                  </div>
                  <div className={`ml-2 ${step === 2 ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                    Service & Dentist
                  </div>
                </div>
                <div className="h-[2px] flex-1 mx-4 bg-muted"></div>
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step >= 3 ? 'bg-dental-500 text-white' : 'bg-muted text-muted-foreground'
                  }`}>
                    3
                  </div>
                  <div className={`ml-2 ${step === 3 ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                    Your Info
                  </div>
                </div>
              </div>

              <div className="mt-8">
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6">
                      <Label htmlFor="appointment-date" className="flex items-center text-base mb-2">
                        <Calendar className="mr-2 h-4 w-4 text-dental-500" />
                        Select Date
                      </Label>
                      <Input
                        id="appointment-date"
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="border-dental-100 focus:border-dental-400 focus:ring-dental-400"
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label className="flex items-center text-base mb-2">
                        <Clock className="mr-2 h-4 w-4 text-dental-500" />
                        Select Time
                      </Label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            type="button"
                            variant={selectedTime === time ? "default" : "outline"}
                            className={selectedTime === time 
                              ? "bg-dental-500 hover:bg-dental-600 text-white" 
                              : "border-dental-100 hover:bg-dental-50 text-foreground"
                            }
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6">
                      <Label htmlFor="service" className="text-base mb-2">Select Service</Label>
                      <select
                        id="service"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="flex h-10 w-full rounded-md border border-dental-100 bg-white px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-dental-400 focus:border-dental-400 focus:ring-offset-2"
                        required
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
                    
                    <div>
                      <Label className="flex items-center text-base mb-2">
                        <User className="mr-2 h-4 w-4 text-dental-500" />
                        Select Dentist
                      </Label>
                      <div className="grid gap-3">
                        {dentists.map((dentist) => (
                          <Button
                            key={dentist}
                            type="button"
                            variant={selectedDentist === dentist ? "default" : "outline"}
                            className={selectedDentist === dentist 
                              ? "bg-dental-500 hover:bg-dental-600 text-white justify-start" 
                              : "border-dental-100 hover:bg-dental-50 text-foreground justify-start"
                            }
                            onClick={() => setSelectedDentist(dentist)}
                          >
                            {dentist}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6 p-4 bg-secondary/50 rounded-lg">
                      <h3 className="font-medium mb-2">Appointment Summary</h3>
                      <p className="text-muted-foreground text-sm mb-1">Date: <span className="text-foreground">{selectedDate}</span></p>
                      <p className="text-muted-foreground text-sm mb-1">Time: <span className="text-foreground">{selectedTime}</span></p>
                      <p className="text-muted-foreground text-sm mb-1">Service: <span className="text-foreground">{selectedService}</span></p>
                      <p className="text-muted-foreground text-sm">Dentist: <span className="text-foreground">{selectedDentist}</span></p>
                    </div>
                    
                    <div className="grid gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={contactInfo.name}
                          onChange={handleContactInfoChange}
                          placeholder="John Doe"
                          className="border-dental-100 focus:border-dental-400 focus:ring-dental-400"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={contactInfo.email}
                          onChange={handleContactInfoChange}
                          placeholder="john@example.com"
                          className="border-dental-100 focus:border-dental-400 focus:ring-dental-400"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={contactInfo.phone}
                          onChange={handleContactInfoChange}
                          placeholder="(123) 456-7890"
                          className="border-dental-100 focus:border-dental-400 focus:ring-dental-400"
                          required
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div className="mt-8 flex justify-between">
                  {step > 1 && (
                    <Button 
                      type="button" 
                      variant="outline"
                      className="border-dental-100 hover:bg-dental-50"
                      onClick={handlePrevStep}
                    >
                      Back
                    </Button>
                  )}
                  <div className={step === 1 ? 'ml-auto' : ''}>
                    <Button 
                      type="button" 
                      className="bg-dental-500 hover:bg-dental-600 text-white"
                      onClick={handleNextStep}
                      disabled={loading}
                    >
                      {loading && (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="mr-2 h-4 w-4 border-2 border-t-transparent border-white rounded-full"
                        />
                      )}
                      {step === 3 ? (loading ? 'Booking...' : 'Book Appointment') : 'Continue'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBooking;
