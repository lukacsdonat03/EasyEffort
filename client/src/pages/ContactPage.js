import React from 'react'
import "./Contact.css"
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar'

const ContactPage = () => {
  return (
    <div>
    <Navbar></Navbar>
    <div>
      <h1>Contact Us</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" />
        <br />
        <button type="submit">Send</button>
      </form>
      <Footer/>
    </div>
    </div>
  )
}

export default ContactPage