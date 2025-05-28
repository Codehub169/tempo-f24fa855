import React from 'react';

const services = [
  {
    icon: '/src/assets/images/service-icon-branding.svg',
    name: 'Branding',
    description: 'Identities that resonate and tell your unique story.',
    alt: 'Abstract icon representing branding design'
  },
  {
    icon: '/src/assets/images/service-icon-packaging.svg',
    name: 'Packaging',
    description: 'Packaging, but make it poetic. Designs that captivate.',
    alt: 'Icon illustrating creative packaging design'
  },
  {
    icon: '/src/assets/images/service-icon-socialmedia.svg',
    name: 'Social Media',
    description: 'Curating digital narratives that connect and engage.',
    alt: 'Icon for social media content design'
  },
  {
    icon: '/src/assets/images/service-icon-stationery.svg',
    name: 'Stationery',
    description: 'Tangible impressions. Stationery that speaks volumes.',
    alt: 'Icon representing custom stationery design'
  },
  {
    icon: '/src/assets/images/service-icon-coffeetablebooks.svg',
    name: 'Coffee Table Books',
    description: 'Crafting visual legacies, page by beautiful page.',
    alt: 'Icon for coffee table book design and layout'
  },
  {
    icon: '/src/assets/images/service-icon-creativeprojects.svg',
    name: 'Creative Projects',
    description: 'Your unique vision, our bespoke design alchemy.',
    alt: 'Icon for various creative design projects'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="min-h-screen py-20 px-8 md:px-16 lg:px-24 bg-brand-neu-light text-brand-neu-dark">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 animate-fadeInUp">What We Do</h2>
        <p className="text-lg md:text-xl text-brand-neu-dark mb-16 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          We weave stories into every design, creating intentional and evocative experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {services.map((service, index) => (
            <div 
              key={service.name} 
              className="bg-brand-neu-bg p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <img 
                src={service.icon} 
                alt={service.alt} 
                className="h-16 w-16 mb-6 mx-auto text-brand-hue transition-transform duration-300 group-hover:scale-110" 
              /> 
              {/* If SVGs are used and Tailwind doesn't color them, consider `dangerouslySetInnerHTML` or React SVG components for dynamic color */}
              <h3 className="text-2xl font-semibold text-brand-hue mb-3">{service.name}</h3>
              <p className="text-brand-neu-dark text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
