import React from 'react'

import Hero from '../component/Hero';
import Navbar from '../component/Navbar';
import About from '../component/About';
import Skills from '../component/Skills';
import Contact from '../component/Contact';
const Home = () => {
  return (
    <div>
    <Navbar />
      <section id="hero"><Hero /></section>
      <section id="skills"><Skills /></section>
      <section id="about"><About /></section>
      <section id="contact"><Contact /></section>
    </div>
  )
}

export default Home