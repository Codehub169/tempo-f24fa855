import React from 'react';

const WhyHueneuSection = () => {
  return (
    <section id="why-hueneu" className="min-h-screen py-20 px-8 md:px-16 lg:px-24 bg-brand-neu-bg text-brand-neu-dark flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-12 leading-tight animate-fadeInUp">
          Why <span className="text-brand-hue">hueneu</span>?
        </h2>
        
        <div className="space-y-10 text-lg md:text-xl leading-relaxed">
          <p className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            "We don't just design—<strong className="text-brand-hue">we decode stories</strong>."
          </p>
          <p className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            In a world saturated with noise, hueneu seeks the whisper. We believe true impact lies not in the loudest shout, but in the resonance of a story perfectly told. Our process is one of quiet inquiry, deep listening, and intentional creation.
          </p>
          <p className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            "Designs that speak quietly but <strong class="font-semibold">stay with you</strong>."
          </p>
          <p className="animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            We embrace the <strong class="italic">calm</strong> of thoughtful strategy, the <strong class="italic">mystery</strong> of unexpected creative turns, and the <strong class="italic">balance</strong> that makes a design feel inevitable and right. With hueneu, you're not just getting a design; you're uncovering an aesthetic that feels like coming home to your brand's truest self.
          </p>
        </div>

        <div className="mt-16 animate-fadeInUp" style={{ animationDelay: '1s' }}>
          <img 
            src="https://source.unsplash.com/800x400/?calm,abstract,minimal"
            alt="Abstract image evoking calm, mystery, and balance in design"
            className="rounded-lg shadow-xl mx-auto w-full max-w-lg h-auto object-cover transition-transform duration-500 hover:scale-105"
          />
           <p className="text-xs text-brand-neu-dark mt-2 italic">A visual metaphor for our approach: calm, balanced, with depth.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyHueneuSection;
