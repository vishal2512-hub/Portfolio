// src/components/Projects.js
import React, { useState } from 'react';
import './Projects.css';
import Navbar from './Navbar';

// Imported local assets
import instamateVideo from '../assets/instamate.mp4';
import movieStreamVideo from '../assets/streamix.mp4';
import shoeVideo from '../assets/shoes.mp4';
import instamateThumb from '../assets/image.png'; // Replace with correct thumbnail for InstaMate
import streamixThumb from '../assets/stremix.png';
import shoeThumb from '../assets/shoes.png';

function Projects() {
  const [modalVideo, setModalVideo] = useState(null);

  const data = [
    {
      title: 'InstaMate – Social Media App',
      description: `
        • Developed a full-stack social media application with user authentication and post-sharing capabilities.
        • Implemented real-time updates using React for frontend and Node.js for backend.
        • Designed and integrated RESTful APIs for seamless frontend-backend communication.
        • Utilized MySQL for data storage and retrieval.
      `,
      tech: ['React', 'Node.js', 'MySQL', 'Express', 'JWT'],
      thumbnail: instamateThumb,
      videoFile: instamateVideo,
      github: 'https://github.com/vishal2512-hub/INSTAMATE.git',
      date: 'Nov 2024'
    },
    {
      title: 'SoloStyle – E-commerce Frontend',
      description:
        'An e-commerce frontend built in Next.js. Dynamic product pages, shopping cart and stripe checkout integration.',
      tech: ['Next.js', 'CSS Modules', 'Node.js'],
      thumbnail: shoeThumb,
      videoFile: shoeVideo,
      github: 'https://github.com/vishal2512-hub/Solostyle-.git',
    },
    {
      title: 'MovieStream – Streaming Web App',
      description: `
        • Developed a movie streaming web app with user authentication and video playback.
        • Implemented JWT-based authentication for secure login and role-based access.
        • Built a RESTful API backend using Node.js & Express.
        • Integrated MySQL to manage movie metadata and user preferences.
      `,
      tech: ['Node.js', 'Express', 'MySQL'],
      thumbnail: streamixThumb,
      videoFile: movieStreamVideo,
      github: '',
      date: 'Mar 2025'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <Navbar />
      <h3 className="section-label">MY PORTFOLIO</h3>
      <h2 className="projects-heading">
        Each project is a unique piece of development
      </h2>

      <div className="projects-grid">
        {data.map((proj, i) => (
          <div
            className={`project-card ${i % 2 === 1 ? 'reverse' : ''}`}
            key={i}
          >
            <div className="project-thumb">
              <img src={proj.thumbnail} alt={`${proj.title} thumbnail`} />
            </div>
            <div className="project-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="tech-tags">
                {proj.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="project-buttons">
                <button
                  onClick={() => setModalVideo(proj.videoFile)}
                  className="btn demo"
                >
                  Check Demo
                </button>
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn github"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalVideo && (
        <div className="modal-overlay" onClick={() => setModalVideo(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <video src={modalVideo} controls autoPlay style={{ width: '100%' }} />
            <button
              className="modal-close"
              onClick={() => setModalVideo(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
