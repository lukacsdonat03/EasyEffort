import React from 'react'
import "./HomePage.css"
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';


export const HomePage = () => {
  return (
    <div className="HomePage">
      <Navbar/>
      <div className="container">
      <section className="hero">
        <h1>Welcome to Easy Effort</h1>
        <p>We are a fitness website that helps you achieve your fitness goals with ease and effort.</p>
        <button className="btn">Get Started</button>
      </section>
      <section className="features">
        <h2>Our Features</h2>
        <div className="cards">
          <div className="card">
            <h3>Customized Workout Plans</h3>
            <p>We provide customized workout plans based on your fitness goals and preferences.</p>
          </div>
          <div className="card">
            <h3>Expert Trainers</h3>
            <p>Our trainers are certified experts who will guide you throughout your fitness journey.</p>
          </div>
          <div className="card">
            <h3>Fitness Community</h3>
            <p>Join our fitness community and connect with like-minded individuals who share the same fitness goals.</p>
          </div>
        </div>
      </section>
      <section className="cta">
        <h2>Ready to Get Fit?</h2>
        <button className="btn">Get Started</button>
      </section>
      <Footer/>
    </div>
    </div>
  )
}

export default HomePage;
