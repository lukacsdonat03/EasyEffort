import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import "../App.css";


export const Login = () => {
    const[formData,setFormData] = useState({})
    const navigate = useNavigate()
    const handleLogin = (event) => {
      event.preventDefault();
      
      try {
        axios.post('http://localhost:8080/api/v1/auth/login',formData).then((res)=>{console.log(res.data);formData.email('');fomrData.password('');navigate('/home')})
      } catch (error) {
        console.error(error)
      }
    };

  return (
    <div className="login-container">
    <form onSubmit={handleLogin} className="login-form">
      <h2 className="login-heading">Login</h2>
      <div className="login-form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          name="email"
          value={fomrData?.email || ''}
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
          value={fomrData?.password || ''}
          onChange={({target : {name,value} })=>{
            setFormData({...formData,[name]:value})
          }}
        />
      </div>
      <button type="submit" className="login-button">
        Login
      </button>
      <br/>
    <Link to='/register'>Nincs még fiókod?</Link> 
    </form>
  </div>
  );
};
