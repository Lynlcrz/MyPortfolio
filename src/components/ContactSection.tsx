"use client";
import React, { useEffect, useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [stars, setStars] = useState<Array<{id: number, x: number, y: number, size: number, opacity: number}>>([]);

  useEffect(() => {
    // Create twinkling stars for galaxy effect
    const generatedStars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 0.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.5
    }));
    setStars(generatedStars);

    // Animate stars
    const interval = setInterval(() => {
      setStars(prev => prev.map(star => ({
        ...star,
        opacity: Math.min(1, Math.max(0.3, star.opacity + (Math.random() * 0.4 - 0.2)))
      })));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "bbea2a47-7163-4bd2-a97c-4ec5c67c8f1f",
          ...formData
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section 
      id="contact" 
      className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-12 xl:py-28 2xl:px-16 2xl:py-32 overflow-hidden"
    >
      {/* Galaxy background elements */}
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            transition: 'opacity 1s ease-in-out',
          }}
        />
      ))}
      
      {/* Subtle gradient galaxy center - responsive sizes */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-blue-500 filter blur-[40px] sm:blur-[60px] md:blur-[80px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-purple-500 filter blur-[40px] sm:blur-[60px] md:blur-[80px]"></div>
      </div>

      <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl text-center z-10">
        <h2 className="mt-20 lg:mt-10  mb-10 lg:mb-20 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          Contact Me!
        </h2>
        
        {submitSuccess ? (
          <div className="bg-green-900/30 border border-green-700 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 transform transition-all duration-500 hover:scale-[1.02]">
            <h3 className="text-xl sm:text-2xl font-bold text-green-400 mb-1 sm:mb-2">Message Sent!</h3>
            <p className="text-sm sm:text-base text-green-200">Thank you for reaching out. I'll get back to you soon.</p>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6 text-left bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            <input type="hidden" name="access_key" value="bbea2a47-7163-4bd2-a97c-4ec5c67c8f1f" />
            
            <div className="group">
              <label htmlFor="name" className="block mb-1 sm:mb-2 text-xs sm:text-sm font-medium text-gray-300 group-hover:text-blue-300 transition-colors">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base rounded-lg bg-gray-700/70 border border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                placeholder="Your Name" 
                required 
              />
            </div>
            
            <div className="group">
              <label htmlFor="email" className="block mb-1 sm:mb-2 text-xs sm:text-sm font-medium text-gray-300 group-hover:text-blue-300 transition-colors">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base rounded-lg bg-gray-700/70 border border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="group">
              <label htmlFor="message" className="block mb-1 sm:mb-2 text-xs sm:text-sm font-medium text-gray-300 group-hover:text-blue-300 transition-colors">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base rounded-lg bg-gray-700/70 border border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-500 outline-none transition-all min-h-[100px] sm:min-h-[120px]"
                placeholder="Write your message here..."
                required
              />
            </div>

            <button
              type="submit" 
              className="w-full py-2 px-4 sm:py-3 sm:px-6 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium sm:font-semibold text-sm sm:text-base md:text-lg hover:from-blue-600 hover:to-cyan-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Send Message
              <span className="ml-2"></span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;