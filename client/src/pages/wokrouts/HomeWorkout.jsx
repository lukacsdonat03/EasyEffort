import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import exercises from "../../workout plans/workout.json";
import homewo1 from '../../img/homewo01.jpg'
import homewo2 from '../../img/homewo02.jpg'
import homewo3 from '../../img/homewo03.jpg'

export const HomeWorkout = () => {
  return (
    <>
      <Typography align="center" variant="h3">
        Welcome to the  Exrecises page that you can do at <i>Home</i> 
      </Typography>

      <Typography align="center" variant="h5" marginBottom={'50px'}>
        I would like to draw your attention to the fact that it is important to
        properly warm up before every workout!
        <br />
        You can browse here the basic exercises that can help you get in shape.
      </Typography>

      <Grid container>
      {exercises.home.map((element, index) => {
        return (
          <Grid item xs={3}>
            <Card sx={{ minWidth: 275, boxShadow:' rgba(0, 0, 0, 0.3) 0px 19px 38px,  #4c956c 16px 10px 12px;',marginBottom:'25px'  }} style={{ width: "400px" }} key={index}>
              <CardContent>
              <CardMedia
                component="img"
                height="140"
                image={index %3===1?homewo1: index %3===0 ?homewo2 : homewo3}                                                  
                alt="Just a stock image"
            />
                <Typography variant="h5" color="text.secondary">
                  {element.name}
                </Typography>
                <Typography component="div" variant="h6">
                  Muscle: {element.muscle}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Equipment: {element.equipment}
                </Typography>
                <Typography variant="h6">
                  Short description:
                  <Typography variant="body2">
                    {" "}
                    {element["description:"]}
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
      </Grid>
    </>
  );
};
