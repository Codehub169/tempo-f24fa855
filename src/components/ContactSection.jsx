import React, { useState } from 'react';
import { Instagram, Send } from 'lucide-react'; // Using lucide-react for icons

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace with your actual form submission logic (e.g., Formspree, Netlify Forms, or a backend endpoint)
    // Example using a placeholder Formspree endpoint:
    const response = await fetch('https://formspree.io/f/yourFormId', { // IMPORTANT: Replace yourFormId with your actual Formspree form ID
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } else {
      // Handle error - you might want to show an error message to the user
      alert('There was an error submitting your message. Please try again.');
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-8 md:px-16 lg:px-24 bg-brand-neu-light text-brand-neu-dark flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-8 animate-fadeInUp">
          Let's Work <span className="text-brand-hue">Together</span>
        </h2>
        <p className="text-lg md:text-xl mb-12 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          Have a story you're yearning to tell? A vision that needs its aesthetic? Reach out, and let's begin.
        </p>

        {isSubmitted ? (
          <div className="p-8 bg-brand-neu-bg shadow-xl rounded-lg text-center animate-fadeInUp">
            <h3 className="text-2xl text-brand-hue mb-4">Thank You!</h3>
            <p>Your message has been sent. We'll be in touch soon to discuss your story.</p>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit} 
            className="bg-brand-neu-bg p-8 sm:p-10 md:p-12 rounded-xl shadow-2xl w-full animate-fadeInUp transform transition-all duration-500 hover:shadow-none border border-transparent hover:border-brand-hue/50"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-brand-neu-dark text-left mb-1">Your Name</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                required 
                className="w-full px-4 py-3 bg-brand-neu-light border border-brand-neu-dark/30 rounded-md focus:ring-brand-hue focus:border-brand-hue transition-colors duration-300 placeholder:text-brand-neu-dark/50"
                placeholder="What should we call you?"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-brand-neu-dark text-left mb-1">Your Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                required 
                className="w-full px-4 py-3 bg-brand-neu-light border border-brand-neu-dark/30 rounded-md focus:ring-brand-hue focus:border-brand-hue transition-colors duration-300 placeholder:text-brand-neu-dark/50"
                placeholder="Where can we reach you?"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-brand-neu-dark text-left mb-1">Your Story / Idea</label>
              <textarea 
                name="message" 
                id="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-brand-neu-light border border-brand-neu-dark/30 rounded-md focus:ring-brand-hue focus:border-brand-hue transition-colors duration-300 placeholder:text-brand-neu-dark/50"
                placeholder="Tell us a bit about your project or idea..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-brand-hue text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
            >
              <span>Let's design your story</span>
              <Send size={20} />
            </button>
          </form>
        )}

        <div className="mt-16 text-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <p className="text-md mb-4">Find more of our hues & neus on Instagram:</p>
          <a 
            href="https://www.instagram.com/hueneu_/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-brand-hue hover:text-brand-neu-dark transition-colors duration-300 group"
          >
            <Instagram size={24} className="mr-2 group-hover:scale-110 transition-transform"/> 
            <span className="text-lg font-medium">@hueneu_</span>
          </a>
        </div>

        {/* Optional: Link to services deck or 'Who Knew?' visual */}
        <div className="mt-8 text-center animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            <a href="#" className="text-sm text-brand-neu-dark hover:text-brand-hue underline transition-colors duration-300">
                Discover our full range of services (PDF deck)
            </a>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
