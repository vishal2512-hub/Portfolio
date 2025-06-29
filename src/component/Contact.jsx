// src/components/Contact.js
import React from 'react';
import './Contact.css';

import locationIcon from '../assets/map.png';
import gmailIcon from '../assets/gmail.png';

import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <>
      <section className="contact-section" id="contact">
        <h3 className="section-label">CONTACT ME</h3>
        <h2 className="contact-heading">Let's connect! discuss and grow together</h2>

        <div className="contact-info">
          <div className="contact-item">
            <img src={locationIcon} alt="Location Icon" />
            <div>
              <strong>Location</strong>
              <p>Mumbai, Maharashtra 📍</p>
            </div>
          </div>

          <div className="contact-item">
            <img src={gmailIcon} alt="Email Icon" />
            <div>
              <strong>Email</strong>
              <p>Vishalharsora338@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <h3 className="footer-brand">Vishal.dev</h3>
          <p className="footer-tagline">A Passionate Web Developer.</p>

          <div className="social-icons">
            <FaLinkedin />
            <FaGithub />
            <FaWhatsapp />
            <FaInstagram />
            <FaEnvelope />
          </div>
        </div>

        <div className="footer-nav">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#resume">My Resume</a>
          <a href="#projects">My Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact Me</a>
        </div>

        <p className="footer-copy">
          Copyright © 2025 | Vishal Harsora. All Rights Reserved
        </p>
      </footer>
    </>
  );
}

export default Contact;
