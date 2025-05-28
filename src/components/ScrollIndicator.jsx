import React from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group z-10">
      <a href="#story-section" aria-label="Scroll to The hueneu Story section">
        <ChevronDown 
          className="text-brand-neu-dark group-hover:text-brand-hue transition-colors duration-300"
          size={36} 
          strokeWidth={1.5} 
        />
      </a>
    </div>
  );
};

export default ScrollIndicator;