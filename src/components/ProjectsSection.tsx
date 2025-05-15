"use client";
import { useState } from 'react';
import jimireneImage from '../assets/jimirene.jpg';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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

  return (
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
  );
};

export default ProjectsSection;