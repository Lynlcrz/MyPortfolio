"use client";
import confetti from "canvas-confetti";
import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import sisharp from "../assets/c-sharp.png";
import certificateIcon from '../assets/carousel1.png';
import cvIcon from "../assets/cv.png";
import figmaIcon from "../assets/figma.png";
import firebaseIcon from "../assets/firebase.png";
import gitIcon from "../assets/git.png";
import githubIcon from "../assets/github.png";
import GithubIcon from "../assets/Github1.png";
import javaIcon from "../assets/java.png";
import jimireneImage from '../assets/jimirene.jpg';
import jsIcon from "../assets/js.png";
import linkedinIcon from "../assets/linkedin.png";
import mongoDBIcon from "../assets/mongodb.png";
import mysqlIcon from "../assets/mysql.png";
import Profile from "../assets/Profile.png";
import React from "../assets/react.png";
import tailwindIcon from "../assets/Tailwind CSS.png";
import typescriptIcon from "../assets/typescript.png";
import Unity from "../assets/Unity.png";
import vsCodeIcon from "../assets/Visual Studio Code.png";
import Navbar from "../components/Navbar";
import "../pages/Home.css";

// Galaxy-inspired Particles Background
const ParticlesBackground = ({ children }: { children?: ReactNode }) => {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const interactive = interactiveRef.current;
    if (!interactive) return;

    let curX = window.innerWidth / 2;
    let curY = window.innerHeight / 2;
    let targetX = curX;
    let targetY = curY;

    const move = () => {
      curX += (targetX - curX) / 10;
      curY += (targetY - curY) / 10;
      interactive.style.left = `${curX}px`;
      interactive.style.top = `${curY}px`;
      requestAnimationFrame(move);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (isMouseDown) {
        const deltaY = event.clientY - lastY;
        window.scrollBy(0, deltaY);
        setLastY(event.clientY);
      } else {
        targetX = event.clientX;
        targetY = event.clientY;
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        targetX = event.touches[0].clientX;
        targetY = event.touches[0].clientY;
      }
    };

    const handleMouseDown = (event: MouseEvent) => {
      setIsMouseDown(true);
      setLastY(event.clientY);
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    move();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isMouseDown, lastY]);

  return (
    <div style={{
      width: '100%', height: '60vh', margin: 0, padding: 0, position: 'absolute', overflow: 'hidden',
      borderRadius: '0 0 15rem 15rem', 
      background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
      top: 0, left: 0, boxShadow: 'inset 0 -30px 25px rgba(0, 0, 0, 0.5)', zIndex: 1
    }}>
      {/* Stars */}
      {[...Array(100)].map((_, i) => (
        <div key={`star-${i}`} className="star" style={{
          position: 'absolute',
          width: `${Math.random() * 3}px`,
          height: `${Math.random() * 3}px`,
          background: 'white',
          borderRadius: '50%',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          opacity: Math.random(),
          animation: `twinkle ${5 + Math.random() * 5}s infinite alternate`
        }} />
      ))}
      
      <svg style={{ position: 'fixed', top: 0, left: 0, width: 0, height: 0 }}> 
        <defs> 
          <filter id="goo"> 
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" /> 
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" /> 
            <feComposite in="SourceGraphic" in2="goo" operator="atop" /> 
          </filter> 
        </defs> 
      </svg>
      
      <h1 style={{
        zIndex: 100, whiteSpace: 'nowrap', overflow: 'hidden', borderRight: '3px solid rgba(255, 255, 255, 0.6)',
        animation: 'typing 3s steps(20, end) infinite alternate, blink 0.75s step-end infinite',
        height: '100vh', position: 'absolute', top: '19%', left: '15%', fontSize: '6vw', 
        color: 'rgba(173, 216, 230, 0.8)', // Light blue color for cosmic feel
        opacity: 0.3, textShadow: '0 0 10px rgba(135, 206, 250, 0.7)', // Glowing text effect
        fontFamily: "'Dongle', sans-serif", margin: 0
      }}>Hi, I'm Niel</h1>
      
      <h3 style={{
        zIndex: 100, position: 'absolute', fontSize: '2vw', top: '45%', left: '15%', 
        color: 'rgba(173, 216, 230, 0.6)', // Light blue color
        opacity: 0.3, textShadow: '0 0 5px rgba(135, 206, 250, 0.5)', // Glowing text effect
        fontFamily: "'Dongle', sans-serif", margin: 0
      }}>Lyniel Cris S. Aya-ay</h3>
      
      <div style={{ filter: 'url(#goo) blur(40px)', width: '100%', height: '100%', boxShadow: '0 30px 25px rgba(0, 0, 0, 0.5)' }}>
        {[...Array(10)].map((_, i) => {
          // Cosmic color palette
          const colors = [
            'rgba(138, 43, 226, 0.6)', // Blue violet
            'rgba(75, 0, 130, 0.6)', // Indigo
            'rgba(123, 104, 238, 0.6)', // Medium slate blue
            'rgba(106, 90, 205, 0.6)', // Slate blue
            'rgba(72, 61, 139, 0.6)', // Dark slate blue
            'rgba(147, 112, 219, 0.6)', // Medium purple
            'rgba(186, 85, 211, 0.6)', // Medium orchid
            'rgba(153, 50, 204, 0.6)', // Dark orchid
            'rgba(139, 0, 139, 0.6)', // Dark magenta
            'rgba(148, 0, 211, 0.6)' // Dark violet
          ];
          
          const color = colors[i % colors.length];
          
          const styles = [{
            background: `radial-gradient(circle at center, ${color} 0, rgba(0, 0, 0, 0) 70%)`,
            top: 'calc(50% - 10%)', left: 'calc(50% - 10%)', 
            transformOrigin: 'center center', animation: 'moveVertical 30s ease infinite'
          }, {
            background: `radial-gradient(circle at center, ${color} 0, rgba(0, 0, 0, 0) 70%)`,
            top: 'calc(50% - 10%)', left: 'calc(50% - 10%)', 
            transformOrigin: 'calc(50% - 400px)', animation: 'moveInCircle 20s reverse infinite'
          }, {
            background: `radial-gradient(circle at center, ${color} 0, rgba(0, 0, 0, 0) 70%)`,
            top: 'calc(50% - 10% + 200px)', left: 'calc(50% - 10% - 500px)', 
            transformOrigin: 'calc(50% + 400px)', animation: 'moveInCircle 40s linear infinite'
          }, {
            background: `radial-gradient(circle at center, ${color} 0, rgba(0, 0, 0, 0) 70%)`,
            top: 'calc(50% - 10%)', left: 'calc(50% - 10%)', 
            transformOrigin: 'calc(50% - 200px)', animation: 'moveHorizontal 40s ease infinite', opacity: 0.7
          }, {
            background: `radial-gradient(circle at center, ${color} 0, rgba(0, 0, 0, 0) 70%)`,
            width: '40%', height: '40%', top: 'calc(20% - 20%)', left: 'calc(10% - 20%)', 
            animation: 'moveRight 30s ease-in-out infinite'
          }, {
            background: `radial-gradient(circle at center, ${color} 0, rgba(0, 0, 0, 0) 70%)`,
            width: '30%', height: '30%', top: 'calc(30% - 15%)', left: 'calc(15% - 15%)', 
            animation: 'moveRight 35s linear infinite'
          }, {
            background: `radial-gradient(circle at center, ${color} 0, rgba(0, 0, 0, 0) 70%)`,
            width: '24%', height: '24%', top: 'calc(50% - 10% + 100px)', left: 'calc(50% - 10% - 600px)', 
            transformOrigin: 'calc(50% + 500px)', animation: 'moveInCircle 50s linear infinite'
          }, {
            background: `radial-gradient(circle at center, ${color} 0, rgba(0, 0, 0, 0) 70%)`,
            width: '40%', height: '40%', top: '10%', left: '5%', 
            animation: 'moveRight 40s ease infinite'
          }, {
            background: `radial-gradient(circle at center, ${color} 0, rgba(0, 0, 0, 0) 70%)`,
            width: '36%', height: '36%', top: '40%', left: '10%', 
            animation: 'moveRight 25s ease-in-out infinite'
          }, {
            background: `radial-gradient(circle at center, ${color} 0, rgba(0, 0, 0, 0) 70%)`,
            width: '30%', height: '30%', top: 'calc(50% - 20%)', left: 'calc(50% - 20%)', 
            transformOrigin: 'center center', animation: 'moveInCircle 45s ease-in infinite'
          }];
          
          return (
            <div key={i} style={{
              position: 'absolute', 
              mixBlendMode: 'screen', // Changed to screen for better cosmic effect
              borderRadius: '50%',
              ...styles[i]
            }} />
          );
        })}
        
        <div ref={interactiveRef} style={{
          position: 'absolute', 
          background: 'radial-gradient(circle at center, rgba(138, 43, 226, 0.6) 0, rgba(0, 0, 0, 0) 70%) no-repeat',
          mixBlendMode: 'screen', 
          width: '300px', height: '300px', 
          borderRadius: '50%', 
          pointerEvents: 'none',
          opacity: 1, 
          zIndex: 101, 
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 30px rgba(138, 43, 226, 0.8)'
        }}></div>
      </div>
      
      <div style={{
        position: 'absolute', inset: 0, zIndex: 10, display: 'flex', alignItems: 'center',
        justifyContent: 'center', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem'
      }}>{children}</div>
      
      <style>{`
        @keyframes typing {
          from { width: 0; }
          to { width: 15ch; }
        }
        @keyframes blink {
          0% { border-color: transparent; }
        }
        @keyframes moveInCircle {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes moveVertical {
          0% { transform: translateY(-50%); }
          50% { transform: translateY(50%); }
          100% { transform: translateY(-50%); }
        }
        @keyframes moveHorizontal {
          0% { transform: translateX(-50%) translateY(-10%); }
          50% { transform: translateX(50%) translateY(10%); }
          100% { transform: translateX(-50%) translateY(-10%); }
        }
        @keyframes moveRight {
          0% { transform: translateX(0%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        @keyframes twinkle {
          0% { opacity: 0.2; }
          100% { opacity: 1; }
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 12vw !important;
            top: 15% !important;
            left: 21% !important;
          }
          h3 {
            font-size: 5vw !important;
            top: 30% !important;
            left: 28% !important;
          }
        }
        @media (max-width: 480px) {
          h1 {
            font-size: 12vw !important;
            top: 18% !important;
            left: 22% !important;
          }
          h3 {
            font-size: 5vw !important;
            top: 32% !important;
            left: 28% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMouseDownRef = useRef(false);
  const startYRef = useRef(0);
  const scrollTopRef = useRef(0);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
 
  const techIcons = [React, Unity, sisharp, jsIcon, typescriptIcon, javaIcon, vsCodeIcon, tailwindIcon, mongoDBIcon, mysqlIcon, gitIcon, GithubIcon, firebaseIcon, figmaIcon];

  const projects = [
    {
      title: "Jimirene Maternity Clinic - Clinic Management System", 
      date: "April 7, 2025", 
      image: jimireneImage, 
      link: "/projects/jimirene",
      description: "A comprehensive clinic management system with patient records, appointments, and billing features.",
      technologies: ["React", "Firebase", "Tailwind CSS"]
    },
  
  ];

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

  const handleConfetti = () => {
    const settings = { 
      particleCount: 100, 
      spread: 70, 
      startVelocity: 45, 
      colors: ["#006B8F", "#00BFFF", "#5AC8FA", "#3AA7D0", "#7FDBFF"],
      origin: { y: 0.6 } 
    };
    confetti({ ...settings, angle: 60, origin: { x: 0, y: 0.6 } });
    confetti({ ...settings, angle: 120, origin: { x: 1, y: 0.6 } });
  };

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
    } finally {
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
      `}</style>
      
      <Navbar/>
      
      <section id="home" className="relative min-h-screen overflow-hidden cosmic-bg flex items-center justify-center">
        <div className="particles-background-container absolute inset-0 h-[70vh] md:h-[80vh] lg:h-[90vh] z-0">
          <ParticlesBackground />
        </div>
        
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[200] flex items-center justify-center w-[80vw] max-w-[400px] xs:max-w-[250px] sm:max-w-[300px] 2xl:max-w-[500px] group cursor-pointer floating"
          onClick={handleConfetti}
        >
        <div className="w-full flex justify-center mb-25 sm:mb-25 md:mb-25 lg:mb-10 xl:mb-12">
  <div className="relative w-55 sm:w-70 md:w-70 lg:w-[25rem] xl:w-[25rem]">
    <img 
      src={Profile} 
      alt="Profile" 
      className="w-full h-auto relative rounded-full object-cover shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 border-4 border-opacity-20 border-purple-500 hover:border-opacity-40"
    />
    <div className="absolute inset-0 flex items-center justify-center rounded-full backdrop-blur-sm bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-white text-lg md:text-xl font-semibold px-4 py-2">
        Click for celebration!
      </span>
    </div>
  </div>
          </div>
        </div>
          
        <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 w-[200px] h-[60px] md:w-[220px] md:h-[65px] lg:w-[240px] lg:h-[70px] xs:w-[180px] xs:h-[50px] 2xl:w-[260px] 2xl:h-[75px] bg-white/0 p-2 rounded-xl flex justify-center items-center gap-3 z-40 transition-all hover:shadow-lg backdrop-blur-sm ">
          <a href="https://github.com/Lynlcrz" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={githubIcon} alt="GitHub Icon" className="w-[30px] h-[30px]" />
          </a>
          <a href="https://www.linkedin.com/in/aya-ay-lyniel-cris-s-201850305/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={linkedinIcon} alt="LinkedIn Icon" className="w-[30px] h-[30px]" />
          </a>
          <a
            href="https://drive.google.com/file/d/1Rkp9_GhpBkAn_sFBo8iwiSWXEnYW9jnz/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            title="Open Resume PDF"
            aria-label="Open Resume PDF"
            className="social-icon"
          >
            <img
              src={cvIcon}
              alt="CV Icon"
              className="w-[38px] h-[38px]"
            />
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50 text-white opacity-70 text-sm animate-bounce">
          Scroll down
          <div className="mx-auto w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white mt-1"></div>
        </div>
      </section>
      
      <main className="relative z-10 cosmic-bg">
        {/* Skills Section */}
<section id="skills" className="relative min-h-screen flex flex-col items-center justify-center cosmic-bg text-white p-6 md:p-8 overflow-hidden">
  <div className="text-center w-[90vw] max-w-[64rem] mb-12 z-10">
    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 cosmic-gradient-text">
      My Skills
    </h2>
    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
      Technologies I've mastered to build exceptional digital experiences
    </p>
  </div>

  {/* Floating background tech icons */}
  <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
    {[...Array(80)].map((_, index) => {
      const icon = techIcons[index % techIcons.length];
      const duration = 25 + Math.random() * 25;
      const delay = Math.random() * 5;
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const size = 24 + Math.random() * 16;
      const opacity = 0.3 + Math.random() * 0.3;
      
      return (
        <div
          key={`float-${index}`}
          className="absolute tech-icon"
          style={{
            animation: `floatAround ${duration}s ease-in-out ${delay}s infinite alternate`,
            left: `${startX}%`,
            top: `${startY}%`,
            width: `${size}px`,
            height: `${size}px`,
            opacity: opacity,
            filter: 'drop-shadow(0 0 4px rgba(100, 255, 218, 0.3))',
          }}
        >
          <img 
            src={icon} 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>
      );
    })}
  </div>

 {/* Main container with relative positioning */}
<div className="relative w-full max-w-4xl mx-auto min-h-[70vh] flex items-center justify-center overflow-visible">
  {/* Central Sun Element */}
  <div className="absolute z-10 w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-600 shadow-xl shadow-yellow-500/30 animate-pulse">
    <div className="absolute inset-0 rounded-full bg-yellow-400/70"></div>
    <div className="absolute -inset-4 rounded-full bg-yellow-500/20 blur-xl"></div>
  </div>

  {/* Orbiting Skills */}
  {techIcons.map((icon, index) => {
    const totalSkills = techIcons.length;
    const angle = (index * (360 / totalSkills));
    const distance = 180 + (index % 3) * 30; // Vary distances slightly
    const orbitSpeed = 40 + (index * 2); // Different speeds
    
    return (
      <div
        key={`orbiting-skill-${index}`}
        className="absolute flex flex-col items-center z-20"
        style={{
          transform: `rotate(${angle}deg) translate(${distance}px) rotate(-${angle}deg)`,
          animation: `orbit ${orbitSpeed}s linear infinite`,
          transformOrigin: 'center center',
        }}
      >
        <div className="group bg-gray-800/90 p-3 rounded-lg w-16 h-16 flex items-center justify-center border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-cyan-400/10 hover:scale-110">
          <img 
            src={icon} 
            alt={['React', 'Unity', 'C#'][index] || 'Skill'} 
            className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-125"
          />
        </div>
        <span className="mt-2 text-xs font-medium text-gray-300 group-hover:text-cyan-300 transition-colors">
          {['React', 'Unity', 'C#'][index] || `Skill ${index+1}`}
        </span>
      </div>
    );
  })}

  {/* Animated Background Elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Stars */}
    {[...Array(30)].map((_, i) => (
      <div 
        key={`star-${i}`}
        className="absolute rounded-full bg-white/80 animate-twinkle"
        style={{
          width: `${Math.random() * 3 + 1}px`,
          height: `${Math.random() * 3 + 1}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.6 + 0.2,
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    ))}
    
    {/* Glow effect */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl"></div>
  </div>
</div>

  {/* Distant stars background */}
  <div className="absolute inset-0 overflow-hidden">
    {Array.from({ length: 50 }).map((_, i) => (
      <div
        key={`star-${i}`}
        className="absolute rounded-full bg-white"
        style={{
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.8 + 0.2,
        }}
      ></div>
    ))}
  </div>
</section>

  {/* New Certifications Section */}
<section id="certifications" className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-32 px-6 overflow-hidden isolate">
  {/* Diamond-pattern background */}
  <div className="absolute inset-0 -z-10 opacity-10">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent"></div>
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMCAzOC41NTEgTDM4LjU1MSAyMCAyMCAxLjQ0OSAxLjQ0OSAyMCAyMCAzOC41NTEgeiBNMjAgNDAgTDAgMjAgMjAgMCA0MCAyMCAyMCA0MCB6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC4yIiBvcGFjaXR5PSIwLjEiLz48L2c+PC9zdmc+')]"></div>
  </div>

  {/* Floating light effects */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
    <div className="absolute top-[20%] left-[15%] w-64 h-64 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-[120px] animate-float-slow"></div>
    <div className="absolute bottom-[25%] right-[20%] w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] animate-float-delayed"></div>
  </div>

  {/* Carousel container */}
  <div className="relative h-[90vh] max-w-7xl mx-auto group">
    {/* Luxury navigation buttons */}
    <div className="absolute inset-0 flex items-center justify-between px-2 z-10 pointer-events-none">
      <button 
        onClick={prevSlide}
        className="relative p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:!opacity-100 pointer-events-auto"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-blue-400/20 rounded-full blur-lg animate-pulse-slow"></div>
        <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-full border border-gray-700/50 shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-110 hover:border-blue-400/60 group/button backdrop-blur-sm">
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiPjxwYXRoIGQ9Ik0wIDBINDBWNDBIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMjAgMzguNTUxIEwzOC41NTEgMjAgMjAgMS40NDkgMS40NDkgMjAgMjAgMzguNTUxIHogTTIwIDQwIEwwIDIwIDIwIDAgNDAgMjAgMjAgNDAgeiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuMSIgb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-20"></div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400/90 group-hover/button:text-blue-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="absolute -right-1 -bottom-1 w-6 h-6 bg-blue-500/80 rounded-full border-2 border-gray-900/80 shadow-md flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-white/90 rounded-full animate-pulse"></span>
          </span>
        </div>
      </button>
      
      <button 
        onClick={nextSlide}
        className="relative p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:!opacity-100 pointer-events-auto"
      >
        <div className="absolute inset-0 bg-gradient-to-l from-blue-600/30 to-blue-400/20 rounded-full blur-lg animate-pulse-slow"></div>
        <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-full border border-gray-700/50 shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-110 hover:border-blue-400/60 group/button backdrop-blur-sm">
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiPjxwYXRoIGQ9Ik0wIDBINDBWNDBIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMjAgMzguNTUxIEwzOC41NTEgMjAgMjAgMS40NDkgMS40NDkgMjAgMjAgMzguNTUxIHogTTIwIDQwIEwwIDIwIDIwIDAgNDAgMjAgMjAgNDAgeiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuMSIgb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-20"></div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400/90 group-hover/button:text-blue-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="absolute -left-1 -bottom-1 w-6 h-6 bg-cyan-500/80 rounded-full border-2 border-gray-900/80 shadow-md flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-white/90 rounded-full animate-pulse"></span>
          </span>
        </div>
      </button>
    </div>

    {/* Luxury slides with floating effect */}
    <div 
      className="flex h-full transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {certifications.map(() => (
        <div 
          className="w-full flex-shrink-0 flex items-center justify-center px-16"
        >
          <div className="relative w-full h-full max-w-6xl group/card">
            {/* Main card with embossed effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-[2.5rem] shadow-2xl shadow-black/50 border border-gray-700/60 backdrop-blur-[2px] transform translate-z-0 transition-all duration-700 group-hover/card:translate-y-[-1.5%] overflow-hidden">
              {/* Inner frame with satin texture */}
              <div className="absolute inset-0.5 rounded-[2rem] bg-gradient-to-br from-gray-800/70 to-gray-900/80 overflow-hidden border border-gray-700/30">
                {/* Floating image with parallax effect */}
                <div className="absolute inset-0 m-4 rounded-[1.5rem] overflow-hidden">
                  <img 
                    src={certificateIcon} 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-contain transition-transform duration-1000 ease-out group-hover/card:scale-[1.02]"
                    draggable="false"
                  />
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/15 to-cyan-900/15 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Reflection effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-80 rounded-b-[1.5rem]"></div>
                
                {/* Luxury corner accents */}
                <div className="absolute top-5 right-5 w-3 h-3 border-t-2 border-r-2 border-blue-400/50"></div>
                <div className="absolute top-5 left-5 w-3 h-3 border-t-2 border-l-2 border-blue-400/50"></div>
                <div className="absolute bottom-5 right-5 w-3 h-3 border-b-2 border-r-2 border-cyan-400/50"></div>
                <div className="absolute bottom-5 left-5 w-3 h-3 border-b-2 border-l-2 border-cyan-400/50"></div>
              </div>
            </div>
            
            {/* Floating shadow */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-4/5 h-8 bg-black/40 blur-2xl rounded-full opacity-0 group-hover/card:opacity-70 transition-all duration-500"></div>
            
            {/* Subtle glow */}
            <div className="absolute -inset-2 rounded-[2.8rem] bg-blue-500/5 blur-md opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </div>
      ))}
    </div>

    {/* Luxury progress indicator */}
    <div className="absolute bottom-12 left-0 right-0">
      <div className="relative max-w-md mx-auto h-2 bg-gray-800/70 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/50 shadow-inner">
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500/90 to-cyan-400/90 transition-all duration-1000 ease-out"
          style={{ width: `${((currentIndex + 1) / certifications.length) * 100}%` }}
        >
          <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Luxury indicators with animated hover */}
  <div className="flex justify-center mt-20 space-x-5">
    {certifications.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentIndex(index)}
        className="relative group/indicator"
      >
        <div className="relative z-10 w-4 h-4 rounded-full transition-all duration-300 flex items-center justify-center">
          <div className={`absolute inset-0 rounded-full transition-all duration-300 ${currentIndex === index ? 
            'bg-gradient-to-br from-blue-400 to-cyan-400 shadow-lg shadow-blue-500/50 scale-125' : 
            'bg-gray-700 group-hover/indicator:bg-gray-600'}`}
          ></div>
          {currentIndex === index && (
            <div className="absolute -inset-1 rounded-full bg-blue-500/30 animate-ping-slow pointer-events-none"></div>
          )}
        </div>
        <div className="absolute inset-0 -m-2 rounded-full bg-blue-500/10 opacity-0 group-hover/indicator:opacity-100 transition-opacity duration-300"></div>
      </button>
    ))}
  </div>

  {/* Animated floating elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
    {[...Array(12)].map((_, i) => {
      const size = Math.random() * 12 + 4;
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
        <section id="projects" className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              My Projects
            </h3>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="project-card relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 h-full flex flex-col"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={`w-full h-full object-cover transition-transform duration-500 ${hoveredProject === index ? 'scale-110' : 'scale-100'}`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${hoveredProject === index ? 'opacity-100' : 'opacity-80'} flex flex-col justify-end p-4`}>
                      <h4 className="text-xl font-semibold text-white mb-1">{project.title}</h4>
                      <p className="text-sm text-gray-300 mb-2">{project.date}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="text-xs bg-blue-900/50 text-blue-200 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-gray-300 mb-3">{project.description}</p>
                      <a 
                        href={project.link} 
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        View project <span className="ml-1">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
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

    </main>
    </div>
  )};
