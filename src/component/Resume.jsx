// src/components/Resume.js
import React from "react";
import Navbar from "./Navbar";
import resumeImage from "../assets/resume.png"; // ✅ Proper import
import resumePDF from "../assets/Resume.pdf";
import "./resume.css";

const Resume = () => {
  return (
    <>
      <Navbar /> 
      <section className="resume-section" id="resume">
        <h3 className="section-label">MY RESUME</h3>
        <h2 className="resume-heading">Explore my professional journey</h2>

        <div className="resume-preview">
          <img src={resumeImage} alt="Mitesh Resume" />
        </div>

        <p className="last-updated">Last Updated 10th March 2024</p>

        <div className="resume-buttons">
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="btn preview"
          >
            Preview PDF
          </a>
          <a href={resumePDF} download className="btn download">
            Download PDF
          </a>
        </div>
      </section>
    </>
  );
};

export default Resume;
