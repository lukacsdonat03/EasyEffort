import React from 'react'
import './Navbar.css'
import SmallLogo from './../img/round_logo_straight_small.png'
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
   
        <nav>
            <Link className='Link' to="/HomePage"><img src={SmallLogo} alt="logo" height="80" /></Link>
        
        <div>
            <ul id='navbar'>
                <li><NavLink className='Link' to="/HomePage">Home</NavLink></li>
                <li><NavLink className='Link' to="/CalorieCounterPage">Calorie Counter</NavLink></li>
                <li><NavLink className='Link' to="/BMIPage">BMI Calculator</NavLink></li>
                <li><NavLink className='Link' to="/AboutPage">About</NavLink></li>
                <li><NavLink className='Link' to="/ContactPage">Contacts</NavLink></li>
                <li><NavLink className='Link Login' to="/Login">Login</NavLink></li>
            </ul>
        </div>
        </nav>
    
  )
}