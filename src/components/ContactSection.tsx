"use client";
import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16">
      <div className="w-full max-w-3xl text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 md:mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          Get In Touch
        </h2>
        
        {submitSuccess ? (
          <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-bold text-green-400 mb-2">Message Sent!</h3>
            <p className="text-green-200">Thank you for reaching out. I'll get back to you soon.</p>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="space-y-6 text-left bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-xl"
          >
            <input type="hidden" name="access_key" value="bbea2a47-7163-4bd2-a97c-4ec5c67c8f1f" />
            
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-500"
                placeholder="Your Name" 
                required 
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-500"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg form-textarea text-white placeholder-gray-500"
                placeholder="Write your message here..."
                required
              />
            </div>

            <button
              type="submit" 
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-lg hover:from-blue-600 hover:to-cyan-500 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;