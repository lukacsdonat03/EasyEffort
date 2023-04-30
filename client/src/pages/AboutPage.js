import React from 'react'
import './About.css';

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer';

function AboutPage() {
  return (<div>
    <Navbar/>
    <div className="about-container">
      <h1>About Us</h1>
      <p>We are a team of passionate developers dedicated to creating amazing websites and applications.</p>
      <h2>Our Mission</h2>
      <p>Our mission is to deliver high-quality software solutions that meet the needs of our clients and exceed their expectations.</p>
      <h2>Our Team</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <div><p>Lukács Donát - Backend Developer</p></div>
        <div><p>Bartha János - Frontend Developer</p></div>
        <div><p>Kecskés Krisztián - Database Engineer</p></div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default AboutPage