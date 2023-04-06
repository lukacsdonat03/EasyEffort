import React, { useContext } from "react";
import "./Navbar.css";
import SmallLogo from "./../img/round_logo_straight_small.png";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    logout().then(() => navigate("/login"));
  };
  return (
    <nav>
      <Link className="Link" to="/home">
        <img src={SmallLogo} alt="logo" height="80" />
      </Link>

      <div>
        <ul id="navbar">
          <li>
            <NavLink className="Link" to="/home">
              Home
            </NavLink>
          </li>
          {currentUser && currentUser.isAdmin === true ? (
            <li>
              <NavLink className="Link" to="/admin">
                Admin
              </NavLink>
            </li>
          ) : null}
           {currentUser && 
            <li>
              <NavLink className="Link" to="/counter">
                Calorie Counter
              </NavLink>
            </li>}
          <li>
            <NavLink className="Link" to="/bmi-page">
              BMI Calculator
            </NavLink>
          </li>
          <li>
            <NavLink className="Link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="Link" to="/contacts">
              Contacts
            </NavLink>
          </li>
          {currentUser ? (
            <li>
              <NavLink className="Link Login" onClick={handleLogout}>
                Logout
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink className="Link Login" to="/login">
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
