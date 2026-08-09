import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="status-badge">
            <span className="pulse"></span>
            <span className="mono-text">SYSTEM ONLINE</span>
          </div>
          
          <h1 className="hero-title">
            Engineering the <span className="text-gradient">Future</span>.
          </h1>
          <p className="hero-subtitle">
            Connecting intelligent software with real-world physical systems.
          </p>
          <p className="hero-description">
            I am a Computer Science student dedicated to exploring Robotics and Artificial Intelligence. 
            With a solid foundation in core software development, my current focus centers on Computer Vision and hardware fundamentals.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              <Terminal size={18} /> Initialize Contact
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="cyber-circle">
            <div className="circle-inner"></div>
            <div className="circle-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
