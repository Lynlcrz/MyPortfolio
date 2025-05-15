"use client";
import { useState } from 'react';
import jimireneImage from '../assets/jimirene.jpg';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Jimirene Maternity Clinic", 
      subtitle: "Clinic Management System",
      date: "April 2025", 
      image: jimireneImage, 
      link: "/projects/jimirene",
      description: "Comprehensive clinic management system with patient records, appointments, and billing features.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      status: "completed"
    },
    {
      title: "Stellar Navigation", 
      subtitle: "Celestial Navigation App",
      date: "Q3 2025", 
      image: "", 
      link: "#",
      description: "Interactive tool for astronomers with real-time celestial data and visualization.",
      technologies: ["Three.js", "React", "NASA API"],
      status: "development"
    },
    {
      title: "Quantum Finance", 
      subtitle: "Analytics Dashboard",
      date: "Q4 2025", 
      image: "", 
      link: "#",
      description: "Financial platform with quantum computing integration for complex calculations.",
      technologies: ["Python", "Qiskit", "Next.js"],
      status: "planned"
    },
    {
      title: "Nebula UI", 
      subtitle: "Design System",
      date: "Q1 2026", 
      image: "", 
      link: "#",
      description: "Galaxy-themed component library with dark mode and animations.",
      technologies: ["TypeScript", "Storybook", "Framer"],
      status: "planned"
    },
    {
      title: "Cosmic Travel", 
      subtitle: "Space Itinerary Planner",
      date: "Q2 2026", 
      image: "", 
      link: "#",
      description: "Theoretical space travel planner with orbital mechanics visualization.",
      technologies: ["WebGL", "React Three", "D3.js"],
      status: "concept"
    },
    {
      title: "More Projects", 
      subtitle: "Coming Soon",
      date: "2026", 
      image: "", 
      link: "#",
      description: "Exciting new projects currently in the planning phase.",
      technologies: ["Innovation", "Creativity", "Excellence"],
      status: "soon"
    }
  ];

  const statusColors = {
    completed: "bg-green-500/10 text-green-400 border-green-400/30",
    development: "bg-blue-500/10 text-blue-400 border-blue-400/30",
    planned: "bg-purple-500/10 text-purple-400 border-purple-400/30",
    concept: "bg-yellow-500/10 text-yellow-400 border-yellow-400/30",
    soon: "bg-gray-500/10 text-gray-400 border-gray-400/30"
  };

  return (
    <section 
      id="projects" 
      className="relative min-h-screen bg-gray-900 text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(56, 47, 82, 0.4) 0%, rgba(17, 24, 39, 1) 70%)'
      }}
    >
      {/* Animated galaxy background */}
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              opacity: Math.random() * 0.8 + 0.2,
              animationDuration: `${Math.random() * 4 + 3}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="mt-10 lg:mt-20 text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            My Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of completed works and upcoming projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 h-full flex flex-col border ${statusColors[project.status as keyof typeof statusColors]} ${hoveredProject === index ? 'scale-[1.02] shadow-xl shadow-blue-900/30 -translate-y-1' : 'scale-100'}`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(17, 24, 39, 0.95) 100%)'
              }}
            >
              <div className="relative h-48 sm:h-56 md:h-60 overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={`w-full h-full object-cover transition-all duration-500 ${hoveredProject === index ? 'scale-105 opacity-90' : 'scale-100 opacity-80'}`}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className={`text-5xl transition-all duration-500 ${hoveredProject === index ? 'opacity-50 scale-110' : 'opacity-30'}`}>
                      {project.status === 'completed' ? '🏥' : 
                       project.status === 'development' ? '🚀' : 
                       project.status === 'planned' ? '🛸' : 
                       project.status === 'concept' ? '🌌' : '✨'}
                    </div>
                  </div>
                )}
                
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-300 ${hoveredProject === index ? 'opacity-100' : 'opacity-95'} flex flex-col justify-end p-5 md:p-6`}>
                  <div className="mb-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${statusColors[project.status as keyof typeof statusColors]} border`}>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                    </span>
                  </div>
                  
                  <h4 className="text-lg md:text-xl font-bold text-white mb-1">
                    {project.title}
                  </h4>
                  <h5 className="text-sm md:text-base text-blue-300 mb-2">
                    {project.subtitle}
                  </h5>
                  <p className="text-xs md:text-sm text-gray-300 mb-3">{project.date}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className={`text-xs px-2 py-1 rounded-full transition-all ${hoveredProject === index ? 'bg-blue-900/70 text-blue-200' : 'bg-gray-800/70 text-gray-300'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto pt-2">
                    <a 
                      href={project.link} 
                      className={`inline-flex items-center text-sm font-medium transition-all ${hoveredProject === index ? 'text-blue-400' : 'text-blue-500'}`}
                    >
                      {project.link !== '#' ? 'View details' : 'Learn more'} 
                      <span className={`ml-1 transition-transform ${hoveredProject === index ? 'translate-x-1' : ''}`}>
                        {project.link !== '#' ? '→' : '⌛'}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Glow effect on hover */}
              {hoveredProject === index && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="absolute -inset-1 bg-blue-500/10 rounded-xl blur-md"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-70"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;