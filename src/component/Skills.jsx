import React from 'react';
import './Skills.css';

import html from '../assets/html.png';
import css from '../assets/css3.png';
import js from '../assets/js.jpeg';
import react from '../assets/react.svg';
import tailwind from '../assets/Tailwind.png';
import nodeLogo  from '../assets/node.png';
import git from '../assets/git.png';
import github from '../assets/github.jpeg';

const skills = [
  { name: 'HTML', icon: html },
  { name: 'CSS', icon: css },
  { name: 'Javascript', icon: js },
  { name: 'React Js', icon: react },
  { name: 'Tailwind CSS', icon: tailwind },
  { name: 'Node', icon: nodeLogo   },
  { name: 'Git VC', icon: git },
  { name: 'Github', icon: github },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <h3 className="section-label">EXPLORE MY</h3>
      <h2>Skills and Expertise</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <img src={skill.icon} alt={skill.name} />
            <h2>{skill.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
