  "use client";
  import { useState } from 'react';
import github from '../assets/Github1.png';
import githubLogo from '../assets/github2.png';
import jimireneImage from '../assets/jimirene.jpg';
import NaviGAZE from '../assets/NaviGAZE.jpg';
import Restaurant from '../assets/restaurant.jpg';
import SIS from '../assets/sissystem.png';
import TEMPHU from '../assets/Temphu.png';

  const ProjectsSection = () => {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const projects = [
      {
        title: "Jimirene Maternity Clinic", 
        subtitle: "Clinic Management System",
        date: "FULL-STACK DEVELOPER", 
        image: jimireneImage, 
        link: "https://github.com/Genrei123/clinic-management-system",
        description: "The project involved working closely with an actual client to analyze business needs and design a custom digital solution aimed at improving operational efficiency.",
        technologies: ["React-TS-Vite", "Java SpringBoot", "MySQL"],
        status: "completed",
        github: true  
      },
      {
        title: "NaviGAZE", 
        subtitle: "Indoor Navigation App",
        date: "FRONT-END LEADER x GRAPHIC ARTIST", 
        image: NaviGAZE, 
        link: "https://github.com/Arjayy007/NaviGaze-Indoor-Navigation",
        description: "Navigaze, a mobile application for indoor navigation on our University Campus.",
        technologies: ["Unity 6", "Firebase", "Blender"],
        status: "completed"
      },
      {
        title: "SIS", 
        subtitle: "Student Information System",
        date: "FULL-STACK DEVELOPER", 
        image: SIS, 
        link: "https://github.com/mawrk19/Student-Information-System",
        description: "This SIS will boost student experiences, increase administrative effectiveness, and offer insightful data on how well the institution is performing.",
        technologies: ["JavaFX", "SceneBuilder", "MySQL"],
        status: "completed"
      },
      {
        title: "TEMPHU", 
        subtitle: "Temp and Humidity Monitoring System",
        date: "IoT ENGINEER", 
        image: TEMPHU, 
        link: "https://temphu-67a04.web.app/",
        description: "Temphu is an IoT-based system that monitors temperature and humidity levels in real time.",
        technologies: ["React-TS", "C/C++", "Firebase", "ESP8266", "DHT22"],
        status: "completed"
      },
      {
        title: "Restaurant Management", 
        subtitle: "Ordering System",
        date: "FULL-STACK DEVELOPER", 
        image: Restaurant, 
        link: "https://github.com/Xine003/restaurant-managent-system",
        description: "Theoretical space travel planner with orbital mechanics visualization.",
        technologies: ["C#", "MySQL"],
        status: "completed"
      },
      {
        title: "More Projects", 
        subtitle: "My Github",
        date: "Personal and Collaborative Projects", 
        image: github, 
        link: "https://github.com/Lynlcrz?tab=repositories",
        description: "Exciting projects currently in the planning and develop phase.",
        technologies: ["Innovation", "Creativity", "Excellence"],
        status: "soon"
      }
    ];

    const statusColors = {
      completed: "bg-blue-500/10 text-blue-400 border-blue-400/30",
      development: "bg-green-500/10 text-green-400 border-green-400/30",
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
        {/* Animated galaxy background - now properly layered with z-0 */}
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none z-0">
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

        <div className="relative max-w-7xl mx-auto">
          {/* Heading section with proper spacing and z-index */}
          <div className="text-center mb-10 md:mb-12 lg:mb-20 relative z-10 pt-20 lg:pt-20">
            <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              My Projects
            </h2>
          </div>
          
          {/* Projects grid - now properly layered with z-10 */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 h-full flex flex-col ${statusColors[project.status as keyof typeof statusColors]} ${hoveredProject === index ? 'scale-[1.02] shadow-xl shadow-blue-900/30 -translate-y-1' : 'scale-100'}`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(17, 24, 39, 0.95) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="relative h-48 sm:h-56 md:h-60 overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={`w-full h-full object-cover transition-all duration-500 ${hoveredProject === index ? 'scale-105 opacity-50' : 'scale-100 opacity-50'}`}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                      <div className={`text-5xl transition-all duration-500 ${hoveredProject === index ? 'opacity-50 scale-110' : 'opacity-30'}`}>
                        {project.status === 'completed' ? '' : 
                        project.status === 'development' ? '' : 
                        project.status === 'planned' ? '' : 
                        project.status === 'concept' ? '' : 'S'}
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
                    
                    <p className={`text-sm text-gray-300 mb-4 transition-all duration-300 ${hoveredProject === index ? 'line-clamp-none' : 'line-clamp-2'}`}>
                      {project.description}
                    </p>
                    
                    <div className="mt-auto pt-2">
                      <a 
                        href={project.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center text-sm font-medium transition-all ${hoveredProject === index ? 'text-blue-400' : 'text-blue-500'}`}
                      >
                        {project.link.includes('github.com') ? 'View Github Repo' : 'View Project'} 
                        <span className={`ml-1 transition-transform ${hoveredProject === index ? 'translate-x-1' : ''}`}>
                          →
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

          {/* GitHub button */}
          <div className="text-center mt-12 md:mt-16 relative z-10">
            <a 
              href="https://github.com/Lynlcrz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              <img 
                src={githubLogo}
                alt="GitHub Logo"
                className="w-5 h-5"
              />
              Github Profile
            </a>
          </div>
        </div>
      </section>
    );
  };

  export default ProjectsSection;