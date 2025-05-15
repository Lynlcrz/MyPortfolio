"use client";
import confetti from "canvas-confetti";
import Profile from "../assets/Profile.png";
import cvIcon from "../assets/cv.png";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import ParticlesBackground from './ParticlesBackground';

const HeroSection = () => {
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

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
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
              className="w-full h-auto relative rounded-full object-cover shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 "
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
  );
};

export default HeroSection;