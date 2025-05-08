"use client";
import confetti from "canvas-confetti";
import { useEffect, useRef } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
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
      colors: ["#C0C0C0", "#D3D3D3", "#A9A9A9"],
      origin: { y: 0.6 },
    };

    confetti({ ...settings, angle: 60, origin: { x: 0, y: 0.6 } });
    confetti({ ...settings, angle: 120, origin: { x: 1, y: 0.6 } });
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
    <div ref={containerRef} className="relative min-h-screen w-full overflow-x-hidden">
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100
          overflow-x: hidden;
          scroll-behavior: smooth;
          font-family: Arial, sans-serif;
        }
      `}</style>

      <Navbar className="z-[999]" id="main-navbar" />

      {/* Home Section */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-white flex items-center justify-center"
      >
        <div className="particles-background-container fixed absolute inset-0 h-[70vh] md:h-[80vh] lg:h-[90vh] z-0">
          <ParticlesBackground />
        </div>

        <div
  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[200] 
             flex items-center justify-center w-[80vw] max-w-[400px] 
             xs:max-w-[250px] sm:max-w-[300px] 2xl:max-w-[500px] 
             group cursor-pointer"
  onClick={handleConfetti}
>
<div className="mb-25 sm:mb-25 md:mb-25 lg:mb-10 xl:mb-12">
    <div className="relative w-55 sm:w-70 md:w-70 lg:w-[25rem] xl:w-[25rem]">
      <img
        src={Profile}
        alt="Profile"
        className="w-full h-auto rounded-full object-cover shadow-xl transition-transform duration-300 ease-in-out hover:scale-105"
      />
      <div
        className="absolute inset-0 flex items-center justify-center 
                   rounded-full backdrop-blur-sm bg-white/20 
                   opacity-0 group-hover:opacity-20 
                   transition-opacity duration-300"
      >
        <span className="text-black text-lg md:text-xl font-semibold">Click me</span>
      </div>
    </div>
  </div>
</div>


        <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 
                       w-[200px] h-[60px] md:w-[220px] md:h-[65px] lg:w-[240px] lg:h-[70px]
                       xs:w-[180px] xs:h-[50px] 2xl:w-[260px] 2xl:h-[75px]
                       bg-white/0 
                       p-2 rounded-xl flex justify-center items-center gap-3 z-40 transition-all
                       hover:bg-white/25 hover:shadow-md">
          <a href="https://github.com/Lynlcrz" target="_blank" rel="noopener noreferrer">
            <img
              src={githubIcon}
              alt="GitHub Icon"
              className="w-[30px] h-[30px] transition-transform hover:scale-110"
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
              className="w-[30px] h-[30px] transition-transform hover:scale-110"
            />
          </a>
          <a href="/path/to/your-cv.pdf" target="_blank" rel="noopener noreferrer">
            <img
              src={cvIcon}
              alt="CV Icon"
              className="w-[38px] h-[38px] transition-transform hover:scale-110"
            />
          </a>
        </div>
      </section>

      {/* Main Sections */}
      <main className="relative z-10">
     {/* About */}
     <section
  id="skills"
  className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-6 md:p-8"
>
  <div className="text-center w-[90vw] max-w-[64rem] mb-12">
    {/* You can add a heading or description for the skills section if needed */}
  </div>

  {/* Carousel Section */}
  <Swiper
    modules={[Navigation]}
    navigation
    spaceBetween={20}
    slidesPerView={1}
    loop={true}
    className="w-full max-w-150 mb-12"
  >
    {[carousel1, carousel2].map((image, index) => (
      <SwiperSlide key={index}>
        <img
          src={image}  // Use the imported image
          alt={`Slide ${index + 1}`}
          className="w-100% h-100% object-cover rounded-xl shadow-md"
        />
      </SwiperSlide>
    ))}
  </Swiper>

  <div className="flex flex-col items-center">
  {[
    React, Unity, sisharp, jsIcon, typescriptIcon,
    javaIcon, vsCodeIcon, tailwindIcon, mongoDBIcon, mysqlIcon,
    gitIcon, GithubIcon, firebaseIcon, figmaIcon,
  ].map((icon, index, arr) => {
    if (index % 5 === 0) {
      return (
        <div
          key={index}
          className="flex flex-wrap justify-center gap-4 mb-6 w-full max-w-screen-lg"
        >
          {arr.slice(index, index + 5).map((subIcon, subIndex) => (
            <img
              key={`${index}-${subIndex}`}
              src={subIcon}
              alt="Skill Logo"
              className="w-13 h-13 sm:w-20 sm:h-20 object-contain"
            />
          ))}
        </div>
      );
    }
    return null;
  })}
</div>



</section>

        

        {/* Projects */}
        <section
          id="projects"
          className="min-h-screen flex items-center justify-center bg-white text-black p-6"
        >
          <div className="text-center w-[90vw] max-w-[80rem]">
            <h3 className="text-5xl font-semibold mb-6">Projects</h3>
            <p className="text-xl leading-relaxed">
              Take a look at some of the projects I’ve built with love.
            </p>
          </div>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16">
  <div className="w-full max-w-3xl text-center">
    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 md:mb-5">
      Contact
    </h2>

    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="space-y-6 text-left"
    >
      <input type="hidden" name="access_key" value="bbea2a47-7163-4bd2-a97c-4ec5c67c8f1f" />

      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Your Name"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="you@example.com"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Your message..."
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-3 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 font-semibold"
      >
        Send Message
      </button>
    </form>
  </div>
</section>

      </main>
    </div>
  );
}
