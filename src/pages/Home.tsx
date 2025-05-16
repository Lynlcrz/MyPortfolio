"use client";
import { useEffect, useRef } from 'react';
import githubLogo from '../assets/github.png';
import instagramLogo from '../assets/insta.png';
import twitterLogo from '../assets/linkedin.png';
import CertificationsSection from '../components/CertificationsSection';
import ContactSection from '../components/ContactSection';
import HeroSection from '../components/HeroSection';
import Navbar from "../components/Navbar";
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import "../pages/Home.css";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMouseDownRef = useRef(false);
  const startYRef = useRef(0);
  const scrollTopRef = useRef(0);

  const handleMouseDown = (e: MouseEvent) => {
    isMouseDownRef.current = true;
    startYRef.current = e.clientY;
    scrollTopRef.current = containerRef.current?.scrollTop || 0;
  };

  const handleMouseUp = () => {
    isMouseDownRef.current = false;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isMouseDownRef.current) return;
    const walk = (e.clientY - startYRef.current) * 2;
    if (containerRef.current) {
      containerRef.current.scrollTop = scrollTopRef.current - walk;
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    isMouseDownRef.current = true;
    startYRef.current = e.touches[0].clientY;
    scrollTopRef.current = containerRef.current?.scrollTop || 0;
  };

  const handleTouchEnd = () => {
    isMouseDownRef.current = false;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isMouseDownRef.current) return;
    const walk = (e.touches[0].clientY - startYRef.current) * 2;
    if (containerRef.current) {
      containerRef.current.scrollTop = scrollTopRef.current - walk;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    container?.addEventListener("mousedown", handleMouseDown);
    container?.addEventListener("mouseup", handleMouseUp);
    container?.addEventListener("mousemove", handleMouseMove);
    container?.addEventListener("touchstart", handleTouchStart);
    container?.addEventListener("touchend", handleTouchEnd);
    container?.addEventListener("touchmove", handleTouchMove);
    
    return () => {
      container?.removeEventListener("mousedown", handleMouseDown);
      container?.removeEventListener("mouseup", handleMouseUp);
      container?.removeEventListener("mousemove", handleMouseMove);
      container?.removeEventListener("touchstart", handleTouchStart);
      container?.removeEventListener("touchend", handleTouchEnd);
      container?.removeEventListener("touchmove", handleTouchMove);
    };
  }, []); 

  return (
    <div ref={containerRef} className="relative min-h-screen w-full overflow-x-hidden bg-gray-900 cosmic-bg">
      <style>{`
        /* ... (keep all your existing styles) ... */
        
        .footer {
          background: linear-gradient(to right, #1B2735, #090A0F);
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .footer-link:hover {
          color: var(--cosmic-accent);
          transform: translateX(3px);
        }
      `}</style>
      
      <Navbar/>
      <HeroSection />
      <SkillsSection />
      <CertificationsSection />
      <ProjectsSection />
      <ContactSection />
      
{/* Footer Section */}
{/* Footer Section */}
<footer className="footer py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col items-center">
      {/* Social Icons - Centered */}
      <div className="flex justify-center space-x-6">
        <a 
          href="https://github.com/Lynlcrz" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon hover:opacity-80 transition-opacity duration-300"
        >
          <img 
            src={githubLogo} 
            alt="GitHub" 
            className="w-8 h-8 object-contain filter drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
            style={{ filter: 'drop-shadow(0 0 4px rgba(29, 161, 242, 0.4))' }}
          />
        </a>
        <a 
          href="https://www.linkedin.com/in/aya-ay-lyniel-cris-s-201850305/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon hover:opacity-80 transition-opacity duration-300"
        >
          <img 
            src={twitterLogo} 
            alt="Twitter" 
            className="w-8 h-8 object-contain filter drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
            style={{ filter: 'drop-shadow(0 0 4px rgba(29, 161, 242, 0.4))' }}
          />
        </a>
        <a 
          href="https://www.instagram.com/lynlcrz/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon hover:opacity-80 transition-opacity duration-300"
        >
          <img 
            src={instagramLogo} 
            alt="Instagram" 
            className="w-8 h-8 object-contain filter drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
            style={{ filter: 'drop-shadow(0 0 4px rgba(29, 161, 242, 0.4))' }}
          />
        </a>
      </div>

      {/* Copyright - Centered */}
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-white text-sm">
        <p>© {new Date().getFullYear()} Lyniel Cris Aya-ay. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>
</div>
  );
};