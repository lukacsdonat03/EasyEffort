import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CalorieList } from "../components/CalorieList";
import { Counter } from "../components/Counter";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "../App.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export const CalorieCounter = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <div>
        <Navbar />
      </div>
      {currentUser ? (
        <div className="calorie-counter-page-container">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item md={6} sm={6} xs={8}>
                <CalorieList />
              </Grid>
              <Grid item md={6} sm={6} xs={6}>
                <Counter />
              </Grid>
            </Grid>
          </Box>
          <div className="footer-container">
            <Footer />
          </div>
        </div>
      ) : (
        <div className="calorie-counter-page-container">
          <Typography variant="h2" align="center">Unreachable Page,Login for access!</Typography>
        </div>
      )}
    </>
  );
};

export default CalorieCounter;
