import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CalorieList } from "../components/CalorieList";
import { Counter } from "../components/Counter";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "../App.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CalorieNeedsContainer } from "../components/CalorieNeedsContainer";
import ProgressBar from 'react-bootstrap/ProgressBar';

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
            <Grid sx={{marginTop:"55px"}} container spacing={2}>
              <Grid item md={12} sm={12} xs={12}>
                <Typography color={"#d5dfe5"} variant="h5" textAlign={"center"} marginBottom={"45px"}>You have 95 calories left</Typography>
                <div className="progressbar-container">
                  <ProgressBar variant="warning" now={10} label={"12"}/>
                </div>
              </Grid>
            </Grid>
            <Grid sx={{marginTop:"55px"}} container spacing={2}>
              <Grid item md={6} sm={6} xs={8}>
                <CalorieList />
              </Grid>
              <Grid
                item
                md={6}
                sm={6}
                xs={6}
              >
                <Counter />
              </Grid>
              <Grid>
                <CalorieNeedsContainer />
              </Grid>
            </Grid>
          </Box>
          <div className="footer-container">
            <Footer />
          </div>
        </div>
      ) : (
        <div className="calorie-counter-page-container">
          <Typography variant="h2" align="center">
            Unreachable Page,Login for access!
          </Typography>
        </div>
      )}
    </>
  );
};

export default CalorieCounter;
