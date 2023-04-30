import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


export const Login = () => {
    const {login} = useContext(AuthContext)
    const[formData,setFormData] = useState({})
    const navigate = useNavigate()
    const handleLogin = (event) => {
      event.preventDefault();
      login(formData).then(()=>navigate('/'))
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
    <Link to='/register' className="link">Don't have an account yet?</Link> 
    </form>
  </div>
  );
};

export default Login;
