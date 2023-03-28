import React from "react";
import "./Contact.css";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Typography } from "@mui/material";

const ContactPage = () => {
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
          <button type="submit">Send</button>
        </form>
        <div className="bottom-footer-container">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
