import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import "../App.css";


export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleLogin = (event) => {
      event.preventDefault();
      // handle login logic here
      try {
        axios.post('http://localhost:8080/api/v1/auth/login',{email,password}).then((res)=>{console.log(res.data);setEmail('');setPassword('');navigate('/')})
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
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="login-form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
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
