import React, { useContext, useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Typography } from "@mui/material";
import axios from "axios";
import "./Contact.css";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

 const ContactPage = () => {
  const [formData, setFormData] = useState({})
  const {currentUser} = useContext(AuthContext)

  const navigate = useNavigate()
  useEffect(()=>{
    if(!currentUser)
      navigate('/')
  },[currentUser, navigate])

  const handleChange = ({ target: { value, name } }) => {
    setFormData({ ...formData, [name]: value });
  }

  const handleClick = ()=>{
    if(formData.subject === '' || formData.message === ''){
      alert('Both fields are required!')
    }
    axios.post('http://localhost:8080/api/v1/contact/messages',
      {subject:formData.subject,message:formData.message},
      {withCredentials:true}
    ).then(res => {
      if(res.status === 201){
        alert('Message has been sent')
      }
    }).catch(()=>alert('Error'))
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
          If you have any error or propblem contact with our admins
        </Typography>
          <div className="form-container">
            <label htmlFor="subject">Subject</label>
            <input type={"text"} name="subject" value={formData?.subject || ""} onChange={(e)=>handleChange(e)} />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="7" value={formData?.message || ""} onChange={(e)=>handleChange(e)}/>
            <br />
            <button onClick={()=>handleClick()}>Send</button>
          </div>
          <div className="bottom-footer-container">
            <Footer />
        </div>
      </div>
    </>
  );
};
 export default ContactPage