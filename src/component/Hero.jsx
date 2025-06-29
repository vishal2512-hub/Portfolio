import React from 'react';
import './Hero.css';
import profileImg from '../assets/profile.jpg'; // Replace with your image
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <h1>Front-End Web Developer</h1>
        <p>
          Hi, I'm <strong>Vishal</strong>. A passionate Front-end Web Developer based in India.
        </p>
        <div className="hero-icons">
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaGithub /></a>
          <a href="#"><FaWhatsapp /></a>
        </div>
      </div>
      <div className="hero-right">
        <img src={profileImg} alt="Profile" />
      </div>
    </section>
  );
}

export default Hero;
