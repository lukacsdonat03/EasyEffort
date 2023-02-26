import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import "../App.css";
import { useNavigate } from 'react-router-dom';


export const Register = () => {
   
        const [fullname, setFullName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const navigate = useNavigate();
        const handleRegister = (event) => {
          event.preventDefault();
          // handle registration logic here
          axios.post('http://localhost:8080/api/v1/auth/register',{fullname,email,password}).then((res)=>{console.log(res.data+' sikeres regisztráció');navigate('/')})
        };
  
  
    return (
    <div className="register-container">
    <form onSubmit={handleRegister} className="register-form">
      <h2 className="register-heading">Register</h2>
      <div className="register-form-group">
        <label htmlFor="full-name">Full Name</label>
        <input
          type="text"
          id="full-name"
          placeholder="Enter your full name"
          value={fullname}
          onChange={(event) => setFullName(event.target.value)}
        />
      </div>
      <div className="register-form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="register-form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit" className="register-button">
        Register
      </button>
    </form>
  </div>
  )}

