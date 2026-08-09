import React from 'react';
import { Code2, Wrench, BrainCircuit } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code2 size={24} />,
      skills: ["Python", "C", "C++ (OOP)", "Java", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Tools & Frameworks",
      icon: <Wrench size={24} />,
      skills: ["Git", "React", "Vite", "VS Code", "Tinkercad (Basic Circuit Simulation & Arduino Prototyping)", "Phoenix Code"]
    },
    {
      title: "Core Concepts",
      icon: <BrainCircuit size={24} />,
      skills: ["Robotics", "Artificial Intelligence", "System Design", "Data Structures & Algorithms", "Full-Stack Development"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card glass-card">
              <div className="skill-header">
                <span className="skill-icon">{category.icon}</span>
                <h3 className="mono-text">{category.title}</h3>
              </div>
              <div className="skill-body">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-badge">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
