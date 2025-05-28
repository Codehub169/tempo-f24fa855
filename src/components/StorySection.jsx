import React, { useEffect, useRef, useState } from 'react';

const StorySection = () => {
  const [isWhoKnewVisible, setIsWhoKnewVisible] = useState(false);
  const whoKnewRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsWhoKnewVisible(true);
          observer.disconnect(); // Animate only once
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (whoKnewRef.current) {
      observer.observe(whoKnewRef.current);
    }

    return () => {
      if (whoKnewRef.current) {
        observer.unobserve(whoKnewRef.current);
      }
    };
  }, []);

  return (
    <section id="story" className="min-h-screen py-20 px-8 md:px-16 lg:px-24 bg-brand-neu-bg text-brand-neu-dark flex flex-col justify-center items-center text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-12 leading-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <span className="text-brand-hue">hue</span>neu: The Story
        </h2>
        <p className="text-lg md:text-xl mb-8 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          At hueneu, we believe in the power of duality. <strong className="text-brand-hue">"Hue"</strong> represents the vibrant spectrum of creativity, the bold bursts of color and imagination that make a design unforgettable. <strong className="text-brand-neu-dark font-semibold">"Neu"</strong> signifies the grounding force of neutrality, the calm, intentional space where ideas take root and clarity emerges.
        </p>
        <p className="text-lg md:text-xl mb-12 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          It's this delicate balance – the quiet confidence and the playful spark – that defines our approach. We craft designs that whisper loud stories, creating experiences that are both evocative and deeply resonant.
        </p>

        <div 
          ref={whoKnewRef} 
          className={`my-16 transition-all duration-1000 ease-in-out transform ${isWhoKnewVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-90 -rotate-3'}`}
        >
          <div className="p-8 bg-brand-neu-light shadow-xl rounded-lg inline-block relative">
            <img 
              src="/src/assets/images/who-knew-visual.png" 
              alt="'Who Knew?' playful visual element representing hueneu's surprise factor" 
              className="max-w-xs md:max-w-sm mx-auto rounded transition-transform duration-300 hover:scale-105"
            />
            <p className="mt-6 text-2xl md:text-3xl font-semibold text-brand-hue">
              Who Knew?
            </p>
            <p className="text-md text-brand-neu-dark mt-2">
              That quiet depth could hold such vibrant surprises. That's hueneu.
            </p>
            {/* Optional: Add a subtle decorative element like a hand-drawn arrow or sparkle */}
            <span className="absolute top-2 right-2 text-brand-hue text-3xl opacity-70 transform -rotate-12">✨</span>
          </div>
        </div>

        <p className="text-lg md:text-xl leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          We find the extraordinary in the understated, the narrative in the nuance. Our designs are more than just visuals; they are conversations, experiences, and the quiet unfolding of a story waiting to be told.
        </p>
      </div>
    </section>
  );
};

export default StorySection;
