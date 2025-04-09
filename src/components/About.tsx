
import ScrollReveal from './ScrollReveal';
import { Award, Heart, Users, Clock } from 'lucide-react';

const features = [
  {
    title: 'Expert Dentists',
    description: 'Our team consists of experienced professionals with advanced degrees.',
    icon: Users,
  },
  {
    title: 'Care & Comfort',
    description: 'We prioritize gentle treatments and patient comfort above all.',
    icon: Heart,
  },
  {
    title: 'Modern Technology',
    description: 'State-of-the-art equipment for precise and effective treatments.',
    icon: Award,
  },
  {
    title: 'Flexible Hours',
    description: 'Evening and weekend appointments available to fit your schedule.',
    icon: Clock,
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <ScrollReveal>
            <span className="inline-block px-3 py-1 mb-4 rounded-full bg-dental-50 text-dental-700 text-xs font-medium uppercase tracking-wider">
              Why Choose Us
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A Dental Team That Truly Cares
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              For over 15 years, we've been dedicated to providing exceptional dental care
              with a focus on creating a comfortable and welcoming environment for all our patients.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 100} className="stagger-{index + 1}">
              <div className="bg-white rounded-xl p-6 hover-scale service-card h-full">
                <div className="w-12 h-12 bg-dental-50 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-dental-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="absolute inset-0 bg-dental-500/10 rounded-2xl transform -rotate-2"></div>
              <img
                // src="/placeholder.svg"
                src='/About clinic.jpg'
                alt="Our dental clinic"
                className="rounded-2xl shadow-lg relative z-10 w-full h-auto"
              />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <span className="inline-block px-3 py-1 mb-4 rounded-full bg-dental-50 text-dental-700 text-xs font-medium uppercase tracking-wider">
                About Our Clinic
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Leading Dental Clinic In The City
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-muted-foreground mb-6">
                Founded in 2008, DentalCare has grown to become one of the most trusted
                dental practices, known for our personalized care and commitment to
                excellence.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="text-muted-foreground mb-8">
                Our mission is to provide comprehensive dental care that improves our
                patients' health and confidence. We believe in building long-term
                relationships and creating a positive dental experience for every patient.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <span className="text-3xl font-bold text-dental-500">15+</span>
                  <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <span className="text-3xl font-bold text-dental-500">5k+</span>
                  <p className="text-sm text-muted-foreground mt-1">Happy Patients</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
