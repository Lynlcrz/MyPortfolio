"use client";
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

      <Navbar/>

      <section 
        id="home" 
        className="relative min-h-screen overflow-hidden bg-white flex flex-col items-center justify-center"
      >
        <div 
          className="particles-background-container absolute inset-0 h-[70vh] z-20"
        >
          <ParticlesBackground />
        </div>

        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[200] 
                     flex items-center justify-center w-[80vw] max-w-[400px] sm:max-w-[300px]"
        >
          <img 
            src={Profile} 
            alt="Profile" 
            className="w-full h-auto rounded-full object-cover"
          />
        </div>

        <div 
          className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 w-[200px] h-[60px] 
                     bg-white/15 backdrop-blur-lg backdrop-saturate-160 border border-white/20 
                     p-2 rounded-xl flex justify-center items-center gap-3 z-40 transition-all
                     sm:w-[180px] sm:h-[50px] sm:gap-2"
        >
          <img 
            src={githubIcon} 
            alt="GitHub Icon" 
            className="w-[30px] h-[30px] transition-transform hover:scale-110 sm:w-[25px] sm:h-[25px]"
          />
          <img 
            src={linkedinIcon} 
            alt="LinkedIn Icon" 
            className="w-[30px] h-[30px] transition-transform hover:scale-110 sm:w-[25px] sm:h-[25px]"
          />
          <img 
            src={cvIcon} 
            alt="CV Icon" 
            className="w-[38px] h-[38px] transition-transform hover:scale-110 sm:w-[30px] sm:h-[30px]"
          />
        </div>
      </section>

      <main className="relative z-10">
        <section 
          id="about" 
          className="min-h-screen flex items-center justify-center bg-white text-gray-900 p-5"
        >
          <div className="text-center max-w-[36rem] px-4">
            <h2 className="text-3xl font-semibold">About Me</h2>
            <p className="mt-4 text-base leading-relaxed">
              I'm a web developer passionate about building great experiences.
            </p>
          </div>
        </section>

        <section 
          id="projects" 
          className="min-h-screen flex items-center justify-center bg-white text-gray-900 p-5"
        >
          <div className="text-center max-w-[48rem] px-4">
            <h2 className="text-3xl font-semibold">Projects</h2>
            <p className="mt-4 text-base leading-relaxed">
              Take a look at some of the projects I've built with love.
            </p>
          </div>
        </section>

        <section 
          id="contact" 
          className="min-h-screen flex items-center justify-center bg-white text-white p-5"
        >
          <div className="text-center max-w-[36rem] px-4">
            <h2 className="text-3xl font-semibold">Contact</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-200">
              Let's work together! Get in touch with me.
            </p>
          </div>
        </section>
      </main>

      <style>{`
        @media (max-width: 640px) {
          .particles-background-container {
            height: 60vh;
          }
        }
      `}</style>
    </div>
  );
}