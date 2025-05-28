import React, { useEffect, useState } from 'react';
import Logo from '../assets/logo.svg'; // Assuming logo.svg is in src/assets

// Placeholder for ScrollIndicator component, to be replaced later
const ScrollIndicator = () => (
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
    <svg className="w-8 h-8 text-brand-neu-dark" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M19 9l-7 7-7-7"></path>
    </svg>
  </div>
);

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center relative text-center p-8 bg-brand-neu-bg overflow-hidden"
    >
      {/* Animated logo reveal container */}
      <div 
        className={`transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
      >
        <img 
          src={Logo} 
          alt="hueneu studio logo" 
          className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-8" 
          // Style for logo animation can be enhanced here or with CSS
        />
      </div>

      {/* Tagline */}
      <h1 
        className={`text-3xl md:text-5xl font-bold text-brand-neu-dark mb-4 transition-opacity duration-1000 ease-out delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{transitionDelay: isVisible ? '0.5s' : '0s'}}
      >
        Where stories find their aesthetic.
      </h1>

      {/* Subtext */}
      <p 
        className={`text-lg md:text-xl text-brand-neu-dark/80 mb-12 transition-opacity duration-1000 ease-out delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{transitionDelay: isVisible ? '1s' : '0s'}}
      >
        Designs that whisper loud stories.
      </p>
      
      {/* Placeholder for a more sophisticated scroll indicator component */}
      <div className={`transition-opacity duration-1000 ease-out delay-[1500ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <ScrollIndicator />
      </div>

      {/* Optional: Subtle background elements or gradients for visual richness */}
      {/* e.g. <div className="absolute inset-0 opacity-10 bg-brand-hue mix-blend-multiply"></div> */}
    </section>
  );
};

export default HeroSection;
