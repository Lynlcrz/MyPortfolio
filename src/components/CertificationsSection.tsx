"use client";
import { useState } from 'react';
import certificate1 from '../assets/carousel1.jpg';
import certificate2 from '../assets/carousel2.png';
import certificate3 from '../assets/carousel3.jpg';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Programming(JAVA) NC III",
      issuer: "TESDA",
      date: "August 2024",
      description: "Acquired practical skills in building Java applications through the application of object-oriented programming (OOP) techniques.",
      link: "#",
      image: certificate1
    },
    {
      title: "Principles Of Graphic Design",
      issuer: "UP MODel",
      date: "February 2025",
      description: "Gained familiarity with industry-recommended design tools and best practices for creating effective visual content.",
      link: "#",
      image: certificate2
    },
    {
      title: "1st Place Networking",
      issuer: "UCC CSD Fair",
      date: "March 2025",
      description: "Networking contest with cabling and file sharing.",
      link: "#",
      image: certificate3
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      nextSlide();
    }

    if (touchStart - touchEnd < -100) {
      prevSlide();
    }
  };

  return (
    <section 
      id="certifications" 
      className="relative min-h-screen bg-gray-900 text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Galaxy background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        {/* Large nebula */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-900/20 blur-[100px] animate-pulse-slow"></div>
        
        {/* Stars */}
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDuration: `${Math.random() * 5 + 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="mt-20 lg:mt-20 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Certifications
          </h2>
        </div>

        {/* Carousel container with fixed positioning context */}
        <div className="relative max-w-3xl md:max-w-4xl lg:max-w-5x2 mx-auto">
          {/* Carousel content */}
          <div 
            className="relative h-auto pb-[75%] sm:pb-[60%] md:pb-[50%] lg:pb-[60%] group"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Desktop Navigation buttons - hidden on mobile */}
            <button 
              onClick={prevSlide}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:border-blue-400 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:!opacity-100 shadow-lg hover:shadow-blue-500/30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextSlide}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:border-blue-400 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:!opacity-100 shadow-lg hover:shadow-blue-500/30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slides */}
            <div 
              className="absolute inset-0 flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="w-full h-full flex-shrink-0 px-2 sm:px-4 md:px-6 lg:px-8 flex items-center justify-center"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`relative w-full h-full max-w-3xl md:max-w-4xl lg:max-w-5xl rounded-lg md:rounded-xl overflow-hidden shadow-xl md:shadow-2xl border ${currentIndex === index ? 'border-blue-400/50' : 'border-gray-700/50'} transition-all duration-300`}>
                    {/* Certificate image or placeholder */}
                    {cert.image ? (
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className={`w-full h-full object-contain transition-all duration-500 ${hoveredCard === index ? 'opacity-100' : 'opacity-80'} bg-gray-800`}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                        <div className="text-4xl sm:text-5xl opacity-20">📜</div>
                      </div>
                    )}
                    
                    {/* Overlay with details */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-5 md:p-6 flex flex-col justify-end transition-all duration-500 ${hoveredCard === index ? 'opacity-0' : 'opacity-100'}`}>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">{cert.title}</h3>
                      <p className="text-sm sm:text-base text-blue-300 mb-1 sm:mb-2">{cert.issuer}</p>
                      <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3">{cert.date}</p>
                      <p className="text-xs sm:text-sm md:text-base text-gray-200 mb-2 sm:mb-4">{cert.description}</p>
                      <div className="text-sm sm:text-base text-blue-400">
                        Hover to view certificate
                      </div>
                    </div>
                    
                    {/* Glow effect when active */}
                    {currentIndex === index && (
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -inset-1 sm:-inset-2 bg-blue-500/10 rounded-lg md:rounded-xl blur-md"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Progress indicators */}
            <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-0 right-0 flex justify-center space-x-1 sm:space-x-2">
              {certifications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${currentIndex === index ? 'bg-blue-400 sm:w-6' : 'bg-gray-700 hover:bg-gray-600'}`}
                />
              ))}
            </div>
          </div>

        {/* Mobile Navigation buttons - positioned outside the carousel */}
<div className="md:hidden flex justify-between w-full px-4 mt-4">
  <button 
    onClick={prevSlide}
    className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800/90 backdrop-blur-sm border border-gray-600 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 active:scale-95"
    aria-label="Previous certificate"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
  
  <button 
    onClick={nextSlide}
    className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800/90 backdrop-blur-sm border border-gray-600 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 active:scale-95"
    aria-label="Next certificate"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
</div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
              opacity: Math.random() * 0.2 + 0.1
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;