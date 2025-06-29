// src/components/About.js
import React from 'react';
import './About.css';
import aboutImg from '../assets/work.webp'; // Replace with your image

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-left">
          <div className="image-wrapper">
            <img src={aboutImg} alt="About" className="main-image" />
          </div>
        </div>
        <div className="about-right">
          <p className="section-label">ABOUT ME</p>
          <h2>A Passionate Developer <span>❤️</span></h2>
          <p className="about-desc">
            As a Front-End Developer, I possess an impressive arsenal of skills in HTML,
            CSS, JavaScript, React, Tailwind etc. I excel in designing and maintaining
            responsive websites that offer a smooth user experience. My expertise lies
            in crafting dynamic, engaging interfaces through writing clean and optimized
            code and utilizing cutting-edge development tools and techniques. I am also
            a team player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
          <div className="btn-group">
            <button className="btn primary">More Details</button>
            <button className="btn secondary">View Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
