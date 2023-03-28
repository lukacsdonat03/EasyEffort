import React, { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Typography } from "@mui/material";
import axios from "axios";
import "./Contact.css";

 const ContactPage = () => {
  const [formData, setFormData] = useState({})

  const handleSubmit = (e)=>{
    //axios.post('http://localhost:8080/api/v1/contact/messages',
      //{subject:formData.subject,message:formData.message},
      //{headers:{'Content-Type':'application/json'},withCredentials:true}
    //)
    e.preventDefault();
    console.log('hello');
  }

  return (
    <>
      <Navbar />
      <div>
        <h1>Contact Us</h1>
        <Typography
          align="center"
          variant="h5"
          fontFamily={"Tilt Warp"}
          fontStyle={"italic"}
        >
          If you have any error or propblem contact with our admins:{" "}
        </Typography>
        <form>
          <label htmlFor="subject">Subject</label>
          <input type={"text"} name="subject" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="7" />
          <br />
          <button onClick={(e)=>handleSubmit}>Send</button>
        </form>
        <div className="bottom-footer-container">
          <Footer />
        </div>
      </div>
    </>
  );
};
 export default ContactPage