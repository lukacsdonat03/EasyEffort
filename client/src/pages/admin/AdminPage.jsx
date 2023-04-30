import { Grid, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dashboard } from "../../components/admin/Dashboard";
import { UserMessage } from "../../components/admin/UserMessage";
import { Navbar } from "../../components/Navbar";
import { AuthContext } from "../../context/AuthContext";

export const AdminPage = () => {
  const{currentUser} = useContext(AuthContext)

  const navigate = useNavigate()
  useEffect(()=>{
    if(currentUser&&currentUser.isAdmin===false)
      navigate('/')
  },[currentUser, navigate])
  return (
    <>
      <Navbar />
      <div className="admin-page-container">
        <Typography
          paddingBottom={"35px"}
          paddingTop={"15px"}
          variant="h3"
          align="left"
        >
          Welcome to the Admin page <i><b>{currentUser.fullname}</b></i>
        </Typography>
        <Grid
          paddingTop={"25px"}
          justifyContent={"center"}
          display={"flex"}
          alignItems={"center"}
          container
          spacing={1}
        >
          <Grid container item xs={6}>
            <UserMessage />
          </Grid>
          <Grid container item xs={6}>
            <Dashboard />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
