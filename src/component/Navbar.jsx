import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">Vishal.dev</div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li>
          {isHomePage
            ? <a href="#about" onClick={closeMenu}>About</a>
            : <Link to="/about" onClick={closeMenu}>About</Link>}
        </li>
        <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
        <li><Link to="/resume" onClick={closeMenu}>Resume</Link></li>
        <li><Link to="/achievements" onClick={closeMenu}>Achievements</Link></li>
        <li>
          {isHomePage
            ? <a href="#contact" onClick={closeMenu}>Contact</a>
            : <Link to="/contact" onClick={closeMenu}>Contact</Link>}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
