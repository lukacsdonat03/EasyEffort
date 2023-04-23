import React, { useContext, useState } from "react";
import "./Navbar.css";
import SmallLogo from "./../img/round_logo_straight_small.png";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Avatar from '@mui/material/Avatar';
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { UserModal } from "./UserModal";


export const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    logout().then(() => navigate("/"));
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
          {currentUser && (
            <li>
              <NavLink className="Link" to="/counter">
                Calorie Counter
              </NavLink>
            </li>
          )}
          <li>
            <NavLink className="Link" to="/workout">
              Workouts
            </NavLink>
          </li>
          <li>
            <NavLink className="Link" to="/supplements">
              Supplements
            </NavLink>
          </li>
          <li>
            <NavLink className="Link" to="/about">
              About
            </NavLink>
          </li>
          {currentUser &&
            <li>
              <NavLink className="Link" to="/contacts">
                Contacts
              </NavLink>
            </li>
          }
          {currentUser !== null? (
            <li>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{ bgcolor: '#2c6e49' }} alt="Remy Sharp" >{currentUser.fullname.charAt(0)}</Avatar>
              </IconButton>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <UserModal />
                <MenuItem onClick={(e) => { handleLogout(e); handleCloseUserMenu() }}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>

              </Menu>
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
