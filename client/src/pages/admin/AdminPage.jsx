import { Grid, Typography } from "@mui/material";
import React from "react";
import { Dashboard } from "../../components/admin/Dashboard";
import { UserMessage } from "../../components/admin/UserMessage";
import { Navbar } from "../../components/Navbar";

export const AdminPage = () => {
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
          Welcome to the Admin page {/*currentUser.name*/}
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
