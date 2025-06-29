import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  
  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  return (
    <nav className="navbar">
      <div className="logo">Vishal.dev</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {isHomePage ? (
            <a href="#about">About</a>
          ) : (
            <Link to="/about">About</Link>
          )}
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/achievements">Achievements</Link>
        </li>
        <li>
          {isHomePage ? (
            <a href="#contact">Contact</a>
          ) : (
            <Link to="/contact">Contact</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;