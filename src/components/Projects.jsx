import React from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import './Projects.css';

const GithubIcon = ({ size }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>);

const Projects = () => {
  const projectList = [
    {
      title: "Pomodoro Timer Web App",
      description: "A productivity-focused web application with a clean and responsive UI. Implements precise timer logic, complex state management, and subtle animations to improve user focus and time tracking.",
      tech: ["React", "CSS", "State Management"],
      github: "https://github.com/sankara012"
    },
    {
      title: "Library Management System",
      description: "A robust web-based system designed to manage book inventories, simulated user registrations, and borrow/return technical workflows. Emphasizes structured data handling and complex operational logic.",
      tech: ["JavaScript", "Data Structures", "HTML/CSS"],
      github: "https://github.com/sankara012"
    },
    {
      title: "Interactive Fruit App",
      description: "A dynamic web application displaying categorized items with active search and filtering functionality. Built to practice responsive design principles, component rendering, and real-time DOM manipulation.",
      tech: ["Vite", "React", "JavaScript", "UI/UX", "Flexbox"],
      github: "https://github.com/sankara012"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div key={index} className="project-card glass-card">
              <div className="project-top">
                <FolderGit2 className="project-folder" size={32} />
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <GithubIcon size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="mono-text tech-badge">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
