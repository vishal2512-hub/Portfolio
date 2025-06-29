import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom"; // ✅ Import Link

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Vishal.dev</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="/Project">Projects</a>
        </li>
        <li>
          <Link to="/resume">My Resume</Link>
        </li>

        <li>
          <Link to="/Archieve">Achivements</Link>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
