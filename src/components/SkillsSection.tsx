"use client";
import { useEffect, useRef, useState } from "react";
import sisharp from "../assets/c-sharp.png";
import figmaIcon from "../assets/figma.png";
import firebaseIcon from "../assets/firebase.png";
import gitIcon from "../assets/git.png";
import GithubIcon from "../assets/Github1.png";
import javaIcon from "../assets/java.png";
import jsIcon from "../assets/js.png";
import mongoDBIcon from "../assets/mongodb.png";
import mysqlIcon from "../assets/mysql.png";
import ReactIcon from "../assets/react.png";
import tailwindIcon from "../assets/Tailwind CSS.png";
import typescriptIcon from "../assets/typescript.png";
import Unity from "../assets/Unity.png";
import vsCodeIcon from "../assets/Visual Studio Code.png";

// Added descriptions for each technology
const techData = [
  { 
    icon: ReactIcon, 
    name: "React", 
    description: "A JavaScript library for building user interfaces. Specialized in creating reusable components and single-page applications." 
  },
  { 
    icon: Unity, 
    name: "Unity", 
    description: "Powerful cross-platform game engine used for 2D/3D game development and interactive experiences." 
  },
  { 
    icon: sisharp, 
    name: "C#", 
    description: "Modern object-oriented programming language by Microsoft, used for desktop apps, games (with Unity), and backend services." 
  },
  { 
    icon: jsIcon, 
    name: "JavaScript", 
    description: "The core language of web development, enabling interactive and dynamic website functionality." 
  },
  { 
    icon: typescriptIcon, 
    name: "TypeScript", 
    description: "Strongly typed superset of JavaScript that compiles to plain JS, improving code quality and maintainability." 
  },
  { 
    icon: javaIcon, 
    name: "Java", 
    description: "Versatile object-oriented language used for Android development, enterprise software, and large-scale systems." 
  },
  { 
    icon: vsCodeIcon, 
    name: "VS Code", 
    description: "Lightweight but powerful source code editor with excellent TypeScript and JavaScript support." 
  },
  { 
    icon: tailwindIcon, 
    name: "Tailwind", 
    description: "Utility-first CSS framework for rapidly building custom designs without leaving your HTML." 
  },
  { 
    icon: mongoDBIcon, 
    name: "MongoDB", 
    description: "NoSQL document database that stores data in flexible, JSON-like documents." 
  },
  { 
    icon: mysqlIcon, 
    name: "MySQL", 
    description: "Popular open-source relational database management system using SQL." 
  },
  { 
    icon: gitIcon, 
    name: "Git", 
    description: "Distributed version control system for tracking changes in source code during development." 
  },
  { 
    icon: GithubIcon, 
    name: "GitHub", 
    description: "Platform for version control and collaboration using Git, hosting millions of open-source projects." 
  },
  { 
    icon: firebaseIcon, 
    name: "Firebase", 
    description: "Google's mobile and web application platform with realtime database, authentication, and hosting." 
  },
  { 
    icon: figmaIcon, 
    name: "Figma", 
    description: "Collaborative interface design tool that works in the browser with real-time collaboration." 
  },
];

const SkillsSection = () => {
  const [activeOrbit, setActiveOrbit] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredTech, setHoveredTech] = useState<typeof techData[0] | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowSize.width < 768;

  // Split techData into two groups for the two orbits
  const orbit1Tech = techData.slice(0, Math.ceil(techData.length / 2));
  const orbit2Tech = techData.slice(Math.ceil(techData.length / 2));

  // Calculate minimum angle between items to prevent overlap
  const minAngle = 30; // degrees
  const orbit1AngleStep = Math.max(360 / orbit1Tech.length, minAngle);
  const orbit2AngleStep = Math.max(360 / orbit2Tech.length, minAngle);

  const handleTechHover = (tech: typeof techData[0], index: number, e: React.MouseEvent) => {
    if (isMobile) return;
    
    setHoveredTech(tech);
    setActiveOrbit(index);
    
    // Position the tooltip near the cursor
    const offset = 20;
    setTooltipPosition({
      top: e.clientY + offset,
      left: e.clientX + offset
    });
  };

  const handleTechLeave = () => {
    if (isMobile) return;
    setHoveredTech(null);
    setActiveOrbit(null);
  };

  return (
    <section 
      id="skills" 
      className="relative min-h-screen flex flex-col items-center justify-center text-white p-4 md:p-8 bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoNTUsNjUsODUsMC4wNSkiIC8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-30" />
      </div>

      <div className="text-center w-[90vw] max-w-[64rem] mb-8 md:mb-12 z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            My Tech Stack
          </span>
        </h2>
        <p className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto">
          Technologies I've mastered to build exceptional digital experiences
        </p>
      </div>

      {/* Interactive solar system */}
      <div 
        ref={containerRef}
        className="relative w-full max-w-4xl mx-auto min-h-[50vh] md:min-h-[70vh] flex items-center justify-center overflow-visible"
      >
        {/* Central glowing core with interactive pulse */}
        <div 
          className="absolute z-10 w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-xl shadow-cyan-500/30 cursor-pointer"
          onMouseEnter={() => {
            setActiveOrbit(null);
            setHoveredTech(null);
          }}
          onClick={() => isMobile && setActiveOrbit(null)}
          style={{
            animation: activeOrbit === null ? 'pulse 2s infinite' : 'none',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.3)',
            transition: 'all 0.3s ease',
          }}
        >
          <div className="absolute inset-0 rounded-full bg-cyan-400/40 animate-ping opacity-75"></div>
          <div className="absolute -inset-2 md:-inset-4 rounded-full bg-cyan-500/20 blur-xl"></div>
        </div>

        {/* First Orbit (inner ring) */}
        {orbit1Tech.map((tech, index) => {
          const angle = (index * orbit1AngleStep) + (mousePos.x / window.innerWidth * (isMobile ? 5 : 10));
          const distance = isMobile ? 100 : 150;
          const orbitSpeed = 35 + (index * 2);
          const isActive = activeOrbit === index;
          
          return (
            <div
              key={`inner-orbit-${index}`}
              className="absolute flex flex-col items-center z-20 transition-all duration-300"
              style={{
                transform: `rotate(${angle}deg) translate(${isActive ? distance * 1.2 : distance}px) rotate(-${angle}deg)`,
                animation: `orbit ${orbitSpeed}s linear infinite`,
                transformOrigin: 'center center',
                zIndex: isActive ? 30 : 20,
              }}
              onMouseEnter={(e) => !isMobile && handleTechHover(tech, index, e)}
              onMouseLeave={handleTechLeave}
              onClick={() => isMobile && setActiveOrbit(activeOrbit === index ? null : index)}
            >
              <div 
                className={`group p-2 md:p-3 rounded-lg ${isMobile ? 'w-12 h-12' : 'w-16 h-16'} flex items-center justify-center transition-all duration-300 ${isMobile ? '' : 'hover:scale-110'} ${
                  isActive ? 'scale-125' : ''
                }`}
              >
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className={`${isMobile ? 'w-8 h-8' : 'w-12 h-12'} object-contain transition-all duration-300 ${
                    isActive ? 'scale-125 brightness-125 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]' : 
                    isMobile ? '' : 'group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]'
                  }`}
                  style={{
                    filter: isActive ? 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.6))' : ''
                  }}
                />
              </div>
              <span 
                className={`mt-1 md:mt-2 text-xs font-medium transition-all duration-300 ${
                  isActive 
                    ? 'text-cyan-300 scale-110 font-bold' 
                    : 'text-gray-300 group-hover:text-cyan-300'
                }`}
              >
                {tech.name}
              </span>
            </div>
          );
        })}

        {/* Second Orbit (outer ring) */}
        {orbit2Tech.map((tech, index) => {
          const angle = (index * orbit2AngleStep) - (mousePos.x / window.innerWidth * (isMobile ? 5 : 10));
          const distance = isMobile ? 160 : 220;
          const orbitSpeed = 45 + (index * 2);
          const isActive = activeOrbit === index + orbit1Tech.length;
          const globalIndex = index + orbit1Tech.length;
          
          return (
            <div
              key={`outer-orbit-${index}`}
              className="absolute flex flex-col items-center z-20 transition-all duration-300"
              style={{
                transform: `rotate(${angle}deg) translate(${isActive ? distance * 1.2 : distance}px) rotate(-${angle}deg)`,
                animation: `orbit-reverse ${orbitSpeed}s linear infinite`,
                transformOrigin: 'center center',
                zIndex: isActive ? 30 : 20,
              }}
              onMouseEnter={(e) => !isMobile && handleTechHover(tech, globalIndex, e)}
              onMouseLeave={handleTechLeave}
              onClick={() => isMobile && setActiveOrbit(activeOrbit === globalIndex ? null : globalIndex)}
            >
              <div 
                className={`group p-2 md:p-3 rounded-lg ${isMobile ? 'w-16 h-16' : 'w-20 h-20'} flex items-center justify-center transition-all duration-300 ${isMobile ? '' : 'hover:scale-110'} ${
                  isActive ? 'scale-125' : ''
                }`}
              >
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className={`${isMobile ? 'w-12 h-12' : 'w-16 h-16'} object-contain transition-all duration-300 ${
                    isActive ? 'scale-125 brightness-125 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]' : 
                    isMobile ? '' : 'group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]'
                  }`}
                  style={{
                    filter: isActive ? 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.6))' : ''
                  }}
                />
              </div>
              <span 
                className={`mt-1 md:mt-2 text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? 'text-cyan-300 scale-110 font-bold' 
                    : 'text-gray-300 group-hover:text-cyan-300'
                }`}
              >
                {tech.name}
              </span>
            </div>
          );
        })}

        {/* Tech Details Tooltip */}
        {hoveredTech && !isMobile && (
          <div 
            className="fixed z-50 p-4 max-w-xs bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-700 shadow-lg transition-all duration-200"
            style={{
              top: `${tooltipPosition.top}px`,
              left: `${tooltipPosition.left}px`,
              transform: 'translate(0, 0)',
            }}
          >
            <div className="flex items-center mb-2">
              <img 
                src={hoveredTech.icon} 
                alt={hoveredTech.name} 
                className="w-8 h-8 mr-2 object-contain"
              />
              <h3 className="text-lg font-bold text-cyan-400">{hoveredTech.name}</h3>
            </div>
            <p className="text-sm text-gray-300">{hoveredTech.description}</p>
          </div>
        )}

        {/* Mobile tech details panel */}
        {isMobile && activeOrbit !== null && (
          <div className="absolute bottom-4 left-0 right-0 z-50 p-4 mx-4 bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-700 shadow-lg transition-all duration-200">
            <div className="flex items-center mb-2">
              <img 
                src={techData[activeOrbit].icon} 
                alt={techData[activeOrbit].name} 
                className="w-8 h-8 mr-2 object-contain"
              />
              <h3 className="text-lg font-bold text-cyan-400">{techData[activeOrbit].name}</h3>
            </div>
            <p className="text-sm text-gray-300">{techData[activeOrbit].description}</p>
            <button 
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
              onClick={() => setActiveOrbit(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(${isMobile ? '100px' : '150px'}) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(${isMobile ? '100px' : '150px'}) rotate(-360deg);
          }
        }
        
        @keyframes orbit-reverse {
          from {
            transform: rotate(0deg) translateX(${isMobile ? '160px' : '220px'}) rotate(0deg);
          }
          to {
            transform: rotate(-360deg) translateX(${isMobile ? '160px' : '220px'}) rotate(360deg);
          }
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
          }
          70% {
            transform: scale(1.05);
            box-shadow: 0 0 0 15px rgba(59, 130, 246, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;