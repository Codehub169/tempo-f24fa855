import React from 'react';
import HeroSection from './components/HeroSection';

// Placeholder components for sections to be implemented later
const StorySection = () => <section id="story" className="min-h-screen bg-brand-neu-light p-8"><h2 className="text-3xl font-bold text-brand-neu-dark">The hueneu Story (Coming Soon)</h2></section>;
const ServicesSection = () => <section id="services" className="min-h-screen bg-brand-neu-bg p-8"><h2 className="text-3xl font-bold text-brand-neu-dark">What We Do (Coming Soon)</h2></section>;
const WhyHueneuSection = () => <section id="why-hueneu" className="min-h-screen bg-brand-neu-light p-8"><h2 className="text-3xl font-bold text-brand-neu-dark">Why hueneu? (Coming Soon)</h2></section>;
const ContactSection = () => <section id="contact" className="min-h-screen bg-brand-neu-bg p-8"><h2 className="text-3xl font-bold text-brand-neu-dark">Let's Work Together (Coming Soon)</h2></section>;

function App() {
  return (
    <main>
      <HeroSection />
      <StorySection /> 
      <ServicesSection />
      <WhyHueneuSection />
      <ContactSection />
    </main>
  );
}

export default App;
