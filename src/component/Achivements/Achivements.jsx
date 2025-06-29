import React from "react";
import "./Achivements.css";

import udemy from "../../assets/udemy.png";
import jp from "../../assets/jp.png";
import tata from "../../assets/tata.png";
import Navbar from '../Navbar'
import udemy1 from "../../assets/udemy.pdf";
import jp1 from "../../assets/jp.pdf";
import tata1 from "../../assets/tata.pdf"; // Correct the file name if it's a PDF

const Certifications = () => {
  const data = [
    {
      title: "Next-Gen Web Development: JavaScript & AI Essentials",
      org: "Udemy",
      date: "March, 2025",
      link: udemy1,
      logo: udemy,
    },
    {
      title: " Software Engineering Job Simulation",
      org: "Forage",
      date: " April, 2025",
      link: jp1,
      logo: jp,
    },
    {
      title: "Data Visualisation: Empowering Business with Effective Insights",
      org: "Forage",
      date: "April, 2025",
      link: tata1,
      logo: tata,
    },
  ];

  return (
    <>
      <Navbar/>
      <section id="certifications" className="certifications-section">
        <h3 className="section-label">MY CERTIFICATIONS</h3>
        <h2 className="certifications-heading">Checkout my certificates and learnings</h2>

        <div className="certificates-grid">
          {data.map((cert, index) => (
            <div className="certificate-card" key={index}>
              <img src={cert.logo} alt={cert.org} className="certificate-logo" />
              <div className="certificate-info">
                <h4>{cert.title}</h4>
                <p className="org">{cert.org}</p>
                <p className="date">Obtained in: {cert.date}</p>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn view-btn"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Certifications;
