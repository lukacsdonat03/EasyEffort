import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import "../App.css";
import { useNavigate } from 'react-router-dom';


export const Register = () => {
        const [formData,setFormData] = useState({})
        const navigate = useNavigate();
        const handleRegister = (event) => {
          event.preventDefault();
          axios.post('http://localhost:8080/api/v1/auth/register',formData).then((res)=>{console.log(res.data+' sikeres regisztráció');navigate('/home')})
        };
  
  
    return (
    <div className="login-container">
    <form onSubmit={handleRegister} className="login-form">
      <h2 className="login-heading">Register</h2>
      <div className="login-form-group">
        <label htmlFor="full-name">Full Name</label>
        <input
          type="text"
          id="full-name"
          placeholder="Enter your full name"
          name="fullname"
          value={formData?.fullname || ''}
          onChange={({target : {name,value} })=>{
            setFormData({...formData,[name]:value})
          }}
        />
      </div>
      <div className="login-form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          name="email"
          value={formData?.email || ''}
          onChange={({target : {name,value} })=>{
            setFormData({...formData,[name]:value})
          }}
        />
      </div>
      <div className="login-form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          name="password"
          value={formData?.password || ''}
          onChange={({target : {name,value} })=>{
            setFormData({...formData,[name]:value})
          }}
        />
      </div>
      <button type="submit" className="login-button">
        Register
      </button>
    </form>
  </div>
  )}

