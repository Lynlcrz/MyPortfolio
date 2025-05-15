"use client";
import { useState } from 'react';
import certificateIcon from '../assets/carousel1.png';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "React Fundamentals",
      date: "June 2023",
      description: "Completed comprehensive React training covering hooks, context API, and component lifecycle.",
      link: "#"
    },
    {
      title: "JavaScript Advanced Concepts",
      date: "May 2023",
      description: "Mastered advanced JavaScript patterns including closures, promises, and async/await.",
      link: "#"
    },
    {
      title: "TypeScript Certification",
      date: "April 2023",
      description: "Earned certification in TypeScript development with focus on type safety and interfaces.",
      link: "#"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <section id="certifications" className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16 md:py-32 px-4 sm:px-6 overflow-hidden isolate">
      {/* Diamond-pattern background */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMCAzOC41NTEgTDM4LjU1MSAyMCAyMCAxLjQ0OSAxLjQ0OSAyMCAyMCAzOC41NTEgeiBNMjAgNDAgTDAgMjAgMjAgMCA0MCAyMCAyMCA0MCB6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC4yIiBvcGFjaXR5PSIwLjEiLz48L2c+PC9zdmc+')]"></div>
      </div>

      {/* Floating light effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[20%] left-[15%] w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-[60px] md:blur-[120px] animate-float-slow"></div>
        <div className="absolute bottom-[25%] right-[20%] w-40 h-40 md:w-80 md:h-80 bg-cyan-500/10 rounded-full blur-[50px] md:blur-[100px] animate-float-delayed"></div>
      </div>

      {/* Carousel container */}
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] max-w-7xl mx-auto group">
        {/* Luxury navigation buttons */}
        <div className="absolute inset-0 flex items-center justify-between px-2 z-10 pointer-events-none">
          <button 
            onClick={prevSlide}
            className="relative p-2 md:p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:!opacity-100 pointer-events-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-blue-400/20 rounded-full blur-lg animate-pulse-slow"></div>
            <div className="relative flex items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-full border border-gray-700/50 shadow-lg md:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-110 hover:border-blue-400/60 group/button backdrop-blur-sm">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiPjxwYXRoIGQ9Ik0wIDBINDBWNDBIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMjAgMzguNTUxIEwzOC41NTEgMjAgMjAgMS40NDkgMS40NDkgMjAgMjAgMzguNTUxIHogTTIwIDQwIEwwIDIwIDIwIDAgNDAgMjAgMjAgNDAgeiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuMSIgb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-20"></div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-8 md:w-8 text-blue-400/90 group-hover/button:text-blue-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <span className="absolute -right-1 -bottom-1 w-4 h-4 md:w-6 md:h-6 bg-blue-500/80 rounded-full border-2 border-gray-900/80 shadow-md flex items-center justify-center">
                <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-white/90 rounded-full animate-pulse"></span>
              </span>
            </div>
          </button>
          
          <button 
            onClick={nextSlide}
            className="relative p-2 md:p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:!opacity-100 pointer-events-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-l from-blue-600/30 to-blue-400/20 rounded-full blur-lg animate-pulse-slow"></div>
            <div className="relative flex items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-full border border-gray-700/50 shadow-lg md:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-110 hover:border-blue-400/60 group/button backdrop-blur-sm">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiPjxwYXRoIGQ9Ik0wIDBINDBWNDBIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMjAgMzguNTUxIEwzOC41NTEgMjAgMjAgMS40NDkgMS40NDkgMjAgMjAgMzguNTUxIHogTTIwIDQwIEwwIDIwIDIwIDAgNDAgMjAgMjAgNDAgeiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuMSIgb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-20"></div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-8 md:w-8 text-blue-400/90 group-hover/button:text-blue-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              <span className="absolute -left-1 -bottom-1 w-4 h-4 md:w-6 md:h-6 bg-cyan-500/80 rounded-full border-2 border-gray-900/80 shadow-md flex items-center justify-center">
                <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-white/90 rounded-full animate-pulse"></span>
              </span>
            </div>
          </button>
        </div>

        {/* Luxury slides with floating effect */}
        <div 
          className="flex h-full transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="w-full flex-shrink-0 flex items-center justify-center px-4 sm:px-8 md:px-16"
            >
              <div className="relative w-full h-full max-w-6xl group/card">
                {/* Main card with embossed effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-3xl md:rounded-[2.5rem] shadow-xl md:shadow-2xl shadow-black/50 border border-gray-700/60 backdrop-blur-[2px] transform translate-z-0 transition-all duration-700 group-hover/card:translate-y-[-1.5%] overflow-hidden">
                  {/* Inner frame with satin texture */}
                  <div className="absolute inset-0.5 rounded-2xl md:rounded-[2rem] bg-gradient-to-br from-gray-800/70 to-gray-900/80 overflow-hidden border border-gray-700/30">
                    {/* Floating image with parallax effect */}
                    <div className="absolute inset-0 m-2 sm:m-3 md:m-4 rounded-xl sm:rounded-2xl md:rounded-[1.5rem] overflow-hidden">
                      <img 
                        src={certificateIcon} 
                        alt={cert.title} 
                        className="absolute inset-0 w-full h-full object-contain transition-transform duration-1000 ease-out group-hover/card:scale-[1.02]"
                        draggable="false"
                      />
                      {/* Animated gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/15 to-cyan-900/15 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Reflection effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-80 rounded-b-xl sm:rounded-b-2xl md:rounded-b-[1.5rem]"></div>
                    
                    {/* Luxury corner accents */}
                    <div className="absolute top-3 right-3 md:top-5 md:right-5 w-2 h-2 md:w-3 md:h-3 border-t-2 border-r-2 border-blue-400/50"></div>
                    <div className="absolute top-3 left-3 md:top-5 md:left-5 w-2 h-2 md:w-3 md:h-3 border-t-2 border-l-2 border-blue-400/50"></div>
                    <div className="absolute bottom-3 right-3 md:bottom-5 md:right-5 w-2 h-2 md:w-3 md:h-3 border-b-2 border-r-2 border-cyan-400/50"></div>
                    <div className="absolute bottom-3 left-3 md:bottom-5 md:left-5 w-2 h-2 md:w-3 md:h-3 border-b-2 border-l-2 border-cyan-400/50"></div>
                  </div>
                </div>
                
                {/* Floating shadow */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 md:translate-y-4 w-4/5 h-4 md:h-8 bg-black/40 blur-xl md:blur-2xl rounded-full opacity-0 group-hover/card:opacity-70 transition-all duration-500"></div>
                
                {/* Subtle glow */}
                <div className="absolute -inset-1 md:-inset-2 rounded-2xl md:rounded-[2.8rem] bg-blue-500/5 blur-md opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Luxury progress indicator */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-0 right-0">
          <div className="relative max-w-xs sm:max-w-sm md:max-w-md mx-auto h-1.5 sm:h-2 bg-gray-800/70 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/50 shadow-inner">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500/90 to-cyan-400/90 transition-all duration-1000 ease-out"
              style={{ width: `${((currentIndex + 1) / certifications.length) * 100}%` }}
            >
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full shadow-md flex items-center justify-center">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury indicators with animated hover */}
      <div className="flex justify-center mt-10 sm:mt-16 md:mt-20 space-x-3 sm:space-x-4 md:space-x-5">
        {certifications.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="relative group/indicator"
          >
            <div className="relative z-10 w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 flex items-center justify-center">
              <div className={`absolute inset-0 rounded-full transition-all duration-300 ${currentIndex === index ? 
                'bg-gradient-to-br from-blue-400 to-cyan-400 shadow-md sm:shadow-lg shadow-blue-500/50 scale-110 sm:scale-125' : 
                'bg-gray-700 group-hover/indicator:bg-gray-600'}`}
              ></div>
              {currentIndex === index && (
                <div className="absolute -inset-0.5 sm:-inset-1 rounded-full bg-blue-500/30 animate-ping-slow pointer-events-none"></div>
              )}
            </div>
            <div className="absolute inset-0 -m-1 sm:-m-2 rounded-full bg-blue-500/10 opacity-0 group-hover/indicator:opacity-100 transition-opacity duration-300"></div>
          </button>
        ))}
      </div>

      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(8)].map((_, i) => {
          const size = Math.random() * 8 + 4;
          return (
            <div 
              key={i}
              className="absolute bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 20 + 15}s cubic-bezier(0.4,0,0.6,1) infinite`,
                animationDelay: `${Math.random() * 15}s`,
                opacity: Math.random() * 0.15 + 0.05,
                filter: `blur(${Math.random() * 2 + 1}px)`
              }}
            ></div>
          );
        })}
      </div>
    </section>
  );
};

export default CertificationsSection;