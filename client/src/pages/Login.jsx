import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'



export const Login = () => {
    const[formData,setFormData] = useState({})
    const navigate = useNavigate()
    const handleLogin = (event) => {
      event.preventDefault();
      axios.post('http://localhost:8080/api/v1/auth/login',formData,{headers: {"Content-Type":'application/json'}})
        .then(res=>console.log(res),navigate('/home'))
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
        Login
      </button>
      <br/>
    <Link to='/register' className="link">Nincs még fiókod?</Link> 
    </form>
  </div>
  );
};
