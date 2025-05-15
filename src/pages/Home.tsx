"use client";
import { useEffect, useRef } from 'react';
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
        :root {
          --cosmic-primary: #8A2BE2;
          --cosmic-secondary: #4B0082;
          --cosmic-accent: #7B68EE;
          --cosmic-light: #9370DB;
          --cosmic-lighter: #BA55D3;
        }
        
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow-x: hidden;
          scroll-behavior: smooth;
          font-family: 'Inter', Arial, sans-serif;
          background-color: #0f172a;
          color: #e2e8f0;
        }
        
        .cosmic-bg {
          background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
        }
        
        ::selection {
          background: rgba(138, 43, 226, 0.3);
        }
        
        .tech-icon:hover {
          transform: translateY(-5px) scale(1.1);
          filter: drop-shadow(0 0 8px rgba(138, 43, 226, 0.6));
        }
        
        .project-card {
          transition: all 0.3s ease;
          background: linear-gradient(145deg, #1e293b, #0f172a);
          border: 1px solid rgba(138, 43, 226, 0.1);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }
        
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(138, 43, 226, 0.3);
          border-color: rgba(138, 43, 226, 0.3);
        }
        
        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--cosmic-primary), var(--cosmic-accent));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        
        .project-card:hover::before {
          transform: scaleX(1);
        }
        
        .form-input {
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid rgba(138, 43, 226, 0.2);
          transition: all 0.3s ease;
          color: white;
        }
        
        .form-input:focus {
          outline: none;
          border-color: var(--cosmic-primary);
          box-shadow: 0 0 0 3px rgba(138, 43, 226, 0.2);
        }
        
        .submit-btn {
          background: linear-gradient(135deg, var(--cosmic-primary), var(--cosmic-accent));
          transition: all 0.3s ease;
        }
        
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(138, 43, 226, 0.4);
        }
        
        .submit-btn:active {
          transform: translateY(0);
        }
        
        .carousel-btn {
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        
        .carousel-btn:hover {
          background-color: rgba(138, 43, 226, 0.3);
        }
        
        .social-icon {
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          transform: scale(1.2) rotate(10deg);
          filter: drop-shadow(0 0 5px rgba(138, 43, 226, 0.5));
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .floating {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes floatAround {
          0% { transform: translate(0, 0); }
          25% { transform: translate(50px, 50px); }
          50% { transform: translate(100px, 0); }
          75% { transform: translate(50px, -50px); }
          100% { transform: translate(0, 0); }
        }
        
        .cosmic-gradient-text {
          background: linear-gradient(90deg, var(--cosmic-primary), var(--cosmic-accent), var(--cosmic-light));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .cosmic-border {
          border: 1px solid rgba(138, 43, 226, 0.3);
        }
        
        .cosmic-border:hover {
          border-color: rgba(0, 0, 0, 0.6);
          box-shadow: 0 0 15px rgba(138, 43, 226, 0.4);
        }

        @keyframes orbit {
          0% { transform: rotate(0deg) translate($px) rotate(0deg); }
          100% { transform: rotate(360deg) translate($px) rotate(-360deg); }
        }
      `}</style>
      
      <Navbar/>
      <HeroSection />
      <SkillsSection />
      <CertificationsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};