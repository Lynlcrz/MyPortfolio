    "use client";
    import confetti from "canvas-confetti";
import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import sisharp from "../assets/c-sharp.png";
import carousel1 from '../assets/carousel1.png';
import carousel2 from '../assets/carousel2.png';
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
          borderRadius: '0 0 15rem 15rem', background: 'linear-gradient(40deg,rgb(38, 48, 63),rgb(39, 48, 70))',
          top: 0, left: 0, boxShadow: 'inset 0 -30px 25px rgba(0, 0, 0, 0.5)', zIndex: 1
        }}>
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
            height: '100vh', position: 'absolute', top: '19%', left: '15%', fontSize: '6vw', color: 'white',
            opacity: 0.3, textShadow: '1px 1px rgba(0, 0, 0, 0.1)', fontFamily: "'Dongle', sans-serif", margin: 0
          }}>Hi, I'm Niel</h1>
          <h3 style={{
            zIndex: 100, position: 'absolute', fontSize: '2vw', top: '45%', left: '15%', color: 'white',
            opacity: 0.3, textShadow: '1px 1px rgba(0, 0, 0, 0.1)', fontFamily: "'Dongle', sans-serif", margin: 0
          }}>Lyniel Cris S. Aya-ay</h3>
          <div style={{ filter: 'url(#goo) blur(40px)', width: '100%', height: '100%', boxShadow: '0 30px 25px rgba(0, 0, 0, 0.5)' }}>
            {[...Array(10)].map((_, i) => (
              <div key={i} style={{
                position: 'absolute', mixBlendMode: 'overlay', width: '20%', height: '20%',
                backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover',
                borderRadius: '50%', ...(function getGradientStyle(index: number) {
                  const colors = ['rgba(100, 100, 100, 0.8)', 'rgba(150, 150, 150, 0.8)', 'rgba(200, 200, 200, 0.8)', 'rgba(120, 120, 120, 0.8)', 'rgba(180, 180, 180, 0.8)'];
                  const color = colors[(index - 1) % colors.length];
                  const styles = [{
                    background: `radial-gradient(circle at center, ${color} 0, rgba(${(index - 1) * 20 + 100}, ${(index - 1) * 20 + 100}, ${(index - 1) * 20 + 100}, 0) 50%)`,
                    top: 'calc(50% - 10%)', left: 'calc(50% - 10%)', transformOrigin: 'center center', animation: 'moveVertical 30s ease infinite'
                  }, {
                    background: `radial-gradient(circle at center, ${color} 0, rgba(150, 150, 150, 0) 50%)`,
                    top: 'calc(50% - 10%)', left: 'calc(50% - 10%)', transformOrigin: 'calc(50% - 400px)', animation: 'moveInCircle 20s reverse infinite'
                  }, {
                    background: `radial-gradient(circle at center, ${color} 0, rgba(200, 200, 200, 0) 50%)`,
                    top: 'calc(50% - 10% + 200px)', left: 'calc(50% - 10% - 500px)', transformOrigin: 'calc(50% + 400px)', animation: 'moveInCircle 40s linear infinite'
                  }, {
                    background: `radial-gradient(circle at center, ${color} 0, rgba(120, 120, 120, 0) 50%)`,
                    top: 'calc(50% - 10%)', left: 'calc(50% - 10%)', transformOrigin: 'calc(50% - 200px)', animation: 'moveHorizontal 40s ease infinite', opacity: 0.7
                  }, {
                    background: `radial-gradient(circle at center, ${color} 0, rgba(180, 180, 180, 0) 50%)`,
                    width: '40%', height: '40%', top: 'calc(20% - 20%)', left: 'calc(10% - 20%)', animation: 'moveRight 30s ease-in-out infinite'
                  }, {
                    background: `radial-gradient(circle at center, rgba(150, 150, 150, 0.6) 0, rgba(150, 150, 150, 0) 50%)`,
                    width: '30%', height: '30%', top: 'calc(30% - 15%)', left: 'calc(15% - 15%)', animation: 'moveRight 35s linear infinite'
                  }, {
                    background: `radial-gradient(circle at center, rgba(200, 200, 200, 0.7) 0, rgba(200, 200, 200, 0) 50%)`,
                    width: '24%', height: '24%', top: 'calc(50% - 10% + 100px)', left: 'calc(50% - 10% - 600px)', transformOrigin: 'calc(50% + 500px)', animation: 'moveInCircle 50s linear infinite'
                  }, {
                    background: `radial-gradient(circle at center, rgba(120, 120, 120, 0.7) 0, rgba(120, 120, 120, 0) 50%)`,
                    width: '40%', height: '40%', top: '10%', left: '5%', animation: 'moveRight 40s ease infinite'
                  }, {
                    background: `radial-gradient(circle at center, rgba(180, 180, 180, 0.6) 0, rgba(180, 180, 180, 0) 50%)`,
                    width: '36%', height: '36%', top: '40%', left: '10%', animation: 'moveRight 25s ease-in-out infinite'
                  }, {
                    background: `radial-gradient(circle at center, rgba(100, 100, 100, 0.5) 0, rgba(100, 100, 100, 0) 50%)`,
                    width: '30%', height: '30%', top: 'calc(50% - 20%)', left: 'calc(50% - 20%)', transformOrigin: 'center center', animation: 'moveInCircle 45s ease-in infinite'
                  }];
                  return styles[index - 1] || {};
                })(i + 1)
              }} />
            ))}
            <div ref={interactiveRef} style={{
              position: 'absolute', background: 'radial-gradient(circle at center, rgba(220, 220, 220, 0.8) 0, rgba(220, 220, 220, 0) 50%) no-repeat',
              mixBlendMode: 'overlay', width: '300px', height: '300px', borderRadius: '50%', pointerEvents: 'none',
              opacity: 1, zIndex: 101, transform: 'translate(-50%, -50%)'
            }}></div>
          </div>
          <div style={{
            position: 'absolute', inset: 0, zIndex: 10, display: 'flex', alignItems: 'center',
            justifyContent: 'center', textAlign: 'center', paddingLeft: '1rem', paddingRight: '1rem'
          }}>{children}</div>
          <style>{`@keyframes typing {from { width: 0; }to { width: 15ch; }}@keyframes blink {0% { border-color: transparent; }}@keyframes moveInCircle {0% { transform: rotate(0deg); }50% { transform: rotate(180deg); }100% { transform: rotate(360deg); }}@keyframes moveVertical {0% { transform: translateY(-50%); }50% { transform: translateY(50%); }100% { transform: translateY(-50%); }}@keyframes moveHorizontal {0% { transform: translateX(-50%) translateY(-10%); }50% { transform: translateX(50%) translateY(10%); }100% { transform: translateX(-50%) translateY(-10%); }}@keyframes moveRight {0% { transform: translateX(0%); }50% { transform: translateX(100%); }100% { transform: translateX(0%); }}@media (max-width: 768px) {h1 {font-size: 12vw !important;top: 15% !important;left: 21% !important;}h3 {font-size: 5vw !important;top: 30% !important;left: 28% !important;}}@media (max-width: 480px) {h1 {font-size: 12vw !important;top: 18% !important;left: 22% !important;}h3 {font-size: 5vw !important;top: 32% !important;left: 28% !important;}}`}</style>
        </div>
      );
    };

    export default function Home() {
      const containerRef = useRef<HTMLDivElement>(null);
      const isMouseDownRef = useRef(false);
      const startYRef = useRef(0);
      const scrollTopRef = useRef(0);
      const [currentSlide, setCurrentSlide] = useState(0);
      const slides = [carousel1, carousel2];

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
        const settings = { particleCount: 80, spread: 60, startVelocity: 45, colors: ["#C0C0C0", "#D3D3D3", "#A9A9A9"], origin: { y: 0.6 } };
        confetti({ ...settings, angle: 60, origin: { x: 0, y: 0.6 } });
        confetti({ ...settings, angle: 120, origin: { x: 1, y: 0.6 } });
      };

      const handleNextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
      const handlePrevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

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
        <div ref={containerRef} className="relative min-h-screen w-full overflow-x-hidden">
          <style>{`html, body {margin: 0;padding: 0;height: 100%;width: 100%;overflow-x: hidden;scroll-behavior: smooth;font-family: Arial, sans-serif;}`}</style>
          <Navbar className="z-[999]" />
          <section id="home" className="relative min-h-screen overflow-hidden bg-white flex items-center justify-center">
            <div className="particles-background-container absolute inset-0 h-[70vh] md:h-[80vh] lg:h-[90vh] z-0">
              <ParticlesBackground />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[200] flex items-center justify-center w-[80vw] max-w-[400px] xs:max-w-[250px] sm:max-w-[300px] 2xl:max-w-[500px] group cursor-pointer" onClick={handleConfetti}>
              <div className="mb-25 sm:mb-25 md:mb-25 lg:mb-10 xl:mb-12">
                <div className="relative w-55 sm:w-70 md:w-70 lg:w-[25rem] xl:w-[25rem]">
                  <img src={Profile} alt="Profile" className="w-full h-auto rounded-full object-cover shadow-xl transition-transform duration-300 ease-in-out hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center rounded-full backdrop-blur-sm bg-white/20 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                    <span className="text-black text-lg md:text-xl font-semibold">Click me</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 w-[200px] h-[60px] md:w-[220px] md:h-[65px] lg:w-[240px] lg:h-[70px] xs:w-[180px] xs:h-[50px] 2xl:w-[260px] 2xl:h-[75px] bg-white/0 p-2 rounded-xl flex justify-center items-center gap-3 z-40 transition-all hover:bg-white/25 hover:shadow-md">
              <a href="https://github.com/Lynlcrz" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub Icon" className="w-[30px] h-[30px] transition-transform hover:scale-110" />
              </a>
              <a href="https://www.linkedin.com/in/aya-ay-lyniel-cris-s-201850305/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn Icon" className="w-[30px] h-[30px] transition-transform hover:scale-110" />
              </a>
<a
  href="https://drive.google.com/file/d/1Rkp9_GhpBkAn_sFBo8iwiSWXEnYW9jnz/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  title="Open Resume PDF"
  aria-label="Open Resume PDF"
>
  <img
    src={cvIcon}
    alt="CV Icon"
    className="w-[38px] h-[38px] transition-transform hover:scale-110"
  />
</a>

            </div>
          </section>
          <main className="relative z-10">
            <section id="skills" className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-6 md:p-8">
              <div className="text-center w-[90vw] max-w-[64rem] mb-12"></div>
              <div className="w-full mb-12">
                <div className="relative max-w-[600px] mx-auto">
                  <div className="overflow-hidden">
                    <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                      {slides.map((image, index) => (
                        <div key={index} className="flex-shrink-0 w-full">
                          <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto sm:h-[400px] lg:h-[500px] object-contain rounded-xl shadow-md" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <button onClick={handlePrevSlide} className="absolute left-0 top-1/2 transform h-10 w-10 -translate-y-1/2 bg-black bg-opacity-40 backdrop-blur-lg text-white p-2 rounded-full text-xl">&lt;</button>
                  <button onClick={handleNextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 backdrop-blur-lg text-white p-2 rounded-full text-xl">&gt;</button>
                </div>
              </div>
              <div className="flex flex-col items-center">
                {[React, Unity, sisharp, jsIcon, typescriptIcon, javaIcon, vsCodeIcon, tailwindIcon, mongoDBIcon, mysqlIcon, gitIcon, GithubIcon, firebaseIcon, figmaIcon].map((_, index, arr) => {
                  if (index % 5 === 0) {
                    return (
                      <div key={index} className="flex flex-wrap justify-center gap-4 mb-6 w-full max-w-screen-lg">
                        {arr.slice(index, index + 5).map((subIcon, subIndex) => (
                          <img key={`${index}-${subIndex}`} src={subIcon} alt="Skill Logo" className="w-11 h-13 sm:w-20 sm:h-20 object-contain" />
                        ))}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </section>
            <section id="projects" className="min-h-screen bg-white text-black py-16 px-6">
              <div className="max-w-7x2 mx-auto">
                <h3 className="text-5xl font-bold mb-3 lg:mt-20 text-center">Projects!</h3>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                  {[{
                    title: "Jimirene Maternity Clinic - Clinic Management System", date: "April 7, 2025", image: jimireneImage, link: "/projects/jimirene"
                  }, {
                    title: "", date: "April 2, 2025", image: "/assets/jimirene.jpg", link: "/projects/drowsiness"
                  }, {
                    title: "", date: "March 18, 2025", image: "/path-to-image3.jpg", link: "/projects/story-ai"
                  }].map((project, index) => (
                    <a key={index} href={project.link} className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-[1.03] transition duration-300 mt-0 lg:mt-30 bg-white">
                      <div className="relative h-90">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition duration-300 flex items-end p-4">
                          <h4 className="text-lg font-semibold text-gray-200">{project.title}</h4>
                        </div>
                      </div>
                      <div className="p-4 text-gray-300">
                        <p className="text-sm mb-2">{project.date}</p>
                        <span className="text-teal-400 hover:underline">Read more →</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </section>
            <section id="contact" className="min-h-screen flex items-center justify-center bg-white text-gray-900 p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16">
              <div className="w-full max-w-3xl text-center">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 md:mb-5">Contact me!</h2>
                <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6 text-left">
                  <input type="hidden" name="access_key" value="bbea2a47-7163-4bd2-a97c-4ec5c67c8f1f" />
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                    <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded-lg bg-white border border-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your Name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-lg bg-white border border-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@example.com" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                    <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 rounded-lg bg-white border border-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your message..." required></textarea>
                  </div>
                  <button type="submit" className="w-full py-3 px-6 rounded-lg bg-gray-600 hover:bg-gray-700 text-white transition-colors duration-300 font-semibold">Send Message</button>
                </form>
              </div>
            </section>
          </main>
        </div>
      );
    }