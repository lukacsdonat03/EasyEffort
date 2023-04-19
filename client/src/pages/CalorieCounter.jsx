import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CalorieList } from "../components/CalorieList";
import { Counter } from "../components/Counter";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "../App.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { CalorieNeedsContainer } from "../components/CalorieNeedsContainer";
import ProgressBar from "react-bootstrap/ProgressBar";
import axios from "axios";

export const CalorieCounter = () => {
  const { currentUser } = useContext(AuthContext);
  const [actualUser, setActualUser] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/user/", { withCredentials: true })
      .then((res) => {
        setActualUser({
          currentCalorie: res.data.currentCalorie,
          targetCalorie: res.data.targetCalorie,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      {currentUser ? (
        <div className="calorie-counter-page-container">
          <Box sx={{ flexGrow: 1 }}>
            <Grid sx={{ marginTop: "55px" }} container spacing={2}>
              <Grid item md={12} sm={12} xs={12}>
                {actualUser.targetCalorie - actualUser.currentCalorie < 0 ? (
                  <Typography
                    color={"#d5dfe5"}
                    variant="h5"
                    textAlign={"center"}
                    marginBottom={"45px"}
                  >
                    You have exceeded your daily calories
                  </Typography>
                ) : (
                  <Typography
                    color={"#d5dfe5"}
                    variant="h5"
                    textAlign={"center"}
                    marginBottom={"45px"}
                  >
                    You have{" "}
                    {(
                      actualUser.targetCalorie - actualUser.currentCalorie
                    ).toFixed(0)}{" "}
                    calories left
                  </Typography>
                )}
                <div className="progressbar-container">
                  <ProgressBar
                    variant="warning"
                    now={actualUser.currentCalorie}
                    max={actualUser.targetCalorie}
                  />
                </div>
              </Grid>
            </Grid>
            <Grid sx={{ marginTop: "55px" }} container spacing={2}>
              <Grid item md={6} sm={6} xs={8}>
                <CalorieList />
              </Grid>
              <Grid item md={6} sm={6} xs={6}>
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
