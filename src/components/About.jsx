import React from 'react';
import { Cpu, Layers, Database, Activity } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About</h2>
        
        <div className="about-grid">
          <div className="about-text glass-card">
            <h3 className="text-gradient">Computer Science Undergraduate</h3>
            <p>
              I am a Computer Science undergraduate with a background in software development—spanning frontend web development and core CS fundamentals. Through building projects from scratch, I am actively expanding my knowledge toward Robotics and Artificial Intelligence.
            </p>
            <p>
              My technical grounding relies on key areas including Data Structures & Algorithms, Databases, and Systems Thinking. To bridge the gap between software and hardware, I am currently concentrating on Computer Vision and basic hardware integration.
            </p>
            <p>
              My ultimate career goal is to become a skilled <strong>Robotics Engineer</strong>, developing intelligent autonomous systems that solve practical, real-world problems.
            </p>
            
            <div className="learning-module mt-4">
              <h4 className="mono-text" style={{marginBottom: '1rem', color: 'var(--accent-primary)'}}>
                <Activity size={18} style={{display:'inline', verticalAlign:'middle', marginRight:'8px'}}/> Current Focus
              </h4>
              <ul className="learning-list">
                <li>Computer Vision & Perception</li>
                <li>Hardware Fundamentals & Circuit Prototyping</li>
                <li>ROS (Robot Operating System)</li>
              </ul>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-card glass-card">
              <Layers className="stat-icon" />
              <h4>Core CS & Frontend</h4>
              <p>Data Structures, Algorithms & Web Interfaces</p>
            </div>
            <div className="stat-card glass-card">
              <Database className="stat-icon" />
              <h4>Databases & Workflows</h4>
              <p>Structured data handling & backend operations</p>
            </div>
            <div className="stat-card glass-card">
              <Cpu className="stat-icon" />
              <h4>Systems Thinking</h4>
              <p>Integrating logic with hardware & perception</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
