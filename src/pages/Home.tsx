"use client";
import confetti from 'canvas-confetti';
import { useEffect, useRef } from "react";
import cvIcon from '../assets/cv.png';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import Profile from '../assets/Profile.png';
import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/ParticleBackground";

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


  const handleConfetti = () => {
    const settings = {
      particleCount: 80,
      spread: 60,
      startVelocity: 45,
      colors: ['#C0C0C0', '#D3D3D3', '#A9A9A9'],
      origin: { y: 0.6 }
    };
  
    // Left cannon
    confetti({
      ...settings,
      angle: 60,          // shoots from left to right
      origin: { x: 0, y: 0.6 }
    });
  
    // Right cannon
    confetti({
      ...settings,
      angle: 120,         // shoots from right to left
      origin: { x: 1, y: 0.6 }
    });
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
    <div 
      ref={containerRef} 
      className="relative min-h-screen w-full overflow-x-hidden"
    >
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          overflow-x: hidden;
          scroll-behavior: smooth;
          font-family: Arial, sans-serif;
        }
      `}</style>

<Navbar className="z-[999]" id="main-navbar" />


      {/* Home Section */}
      <section 
        id="home" 
        className="relative min-h-screen overflow-hidden bg-white flex flex-col items-center justify-center"
      >
        <div className="particles-background-container absolute inset-0 h-[70vh] md:h-[80vh] lg:h-[90vh] z-20">
          <ParticlesBackground />
        </div>

        <div
  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[200] 
             flex items-center justify-center w-[80vw] max-w-[400px] 
             sm:max-w-[300px] xs:max-w-[250px] 2xl:max-w-[500px] 
             group cursor-pointer"
  onClick={handleConfetti}
>
  <img
    src={Profile}
    alt="Profile"
    className="w-full h-auto rounded-full object-cover shadow-xl transition-transform hover:scale-100"
  />

  <div
    className="absolute inset-0 flex items-center justify-center 
               rounded-full backdrop-blur-sm bg-white/20 
               opacity-0 group-hover:opacity-20 
               transition-opacity duration-300"
  >
    <span className="text-black text-[40px] text-lg font-semibold">Click me</span>
  </div>
</div>


        <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 
                       w-[200px] h-[60px] md:w-[220px] md:h-[65px] lg:w-[240px] lg:h-[70px]
                       xs:w-[180px] xs:h-[50px] 2xl:w-[260px] 2xl:h-[75px]
                       bg-white/15 backdrop-blur-lg backdrop-saturate-160 border border-white/20 
                       p-2 rounded-xl flex justify-center items-center gap-3 z-40 transition-all
                       hover:bg-white/25 hover:shadow-md">
         <a 
  href="https://github.com/Lynlcrz" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <img 
    src={githubIcon} 
    alt="GitHub Icon" 
    className="w-[30px] h-[30px] md:w-[32px] md:h-[32px] lg:w-[34px] lg:h-[34px]
               xs:w-[26px] xs:h-[26px] 2xl:w-[36px] 2xl:h-[36px]
               transition-transform hover:scale-110"
  />
</a>

<a 
  href="https://www.linkedin.com/in/aya-ay-lyniel-cris-s-201850305/" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <img 
    src={linkedinIcon} 
    alt="LinkedIn Icon" 
    className="w-[30px] h-[30px] md:w-[32px] md:h-[32px] lg:w-[34px] lg:h-[34px]
               xs:w-[26px] xs:h-[26px] 2xl:w-[36px] 2xl:h-[36px]
               transition-transform hover:scale-110"
  />
</a>

<a 
  href="/path/to/your-cv.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <img 
    src={cvIcon} 
    alt="CV Icon" 
    className="w-[38px] h-[38px] md:w-[40px] md:h-[40px] lg:w-[42px] lg:h-[42px]
               xs:w-[32px] xs:h-[32px] 2xl:w-[44px] 2xl:h-[44px]
               transition-transform hover:scale-110"
  />
</a>

        </div>
      </section>

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* About Section */}



{/* About Section */}
<section id="about" className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16">
  <div className="text-center w-[90vw] max-w-[64rem] mb-12">
    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 md:mb-8">About Me</h2>
    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
      I'm a web developer passionate about building great experiences.
    </p>
  </div>

  {/* Bento Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl">
    <div className="bg-gray-100 rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 shadow-md">
      <h3 className="text-xl font-bold mb-2">Frontend</h3>
      <p className="text-gray-700">Skilled in React, Tailwind CSS, and building responsive UIs.</p>
    </div>
    <div className="bg-gray-100 rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 shadow-md">
      <h3 className="text-xl font-bold mb-2">Backend</h3>
      <p className="text-gray-700">Experience with Node.js, Express, and Firebase integration.</p>
    </div>
    <div className="bg-gray-100 rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 shadow-md">
      <h3 className="text-xl font-bold mb-2">Design</h3>
      <p className="text-gray-700">UI/UX knowledge and graphic design using Figma and Adobe tools.</p>
    </div>
    <div className="bg-gray-100 rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 shadow-md">
      <h3 className="text-xl font-bold mb-2">Projects</h3>
      <p className="text-gray-700">Built full-stack apps and collaborative tools with modern web stacks.</p>
    </div>
  </div>
</section>


{/* Projects Section */}
<section id="projects" className="min-h-screen flex items-center justify-center bg-white text-gray-900 p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16">
  <div className="text-center w-[90vw] max-w-[80rem]">
    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 md:mb-8">Projects</h2>
    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
      Take a look at some of the projects I've built with love.
    </p>
  </div>
</section>

{/* Contact Section */}
<section id="contact" className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16">
  <div className="text-center w-[90vw] max-w-[64rem]">
    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 md:mb-8">Contact</h2>
    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-300">
      Let's work together! Get in touch with me.
    </p>
  </div>
</section>
      </main>
    </div>
  );
}