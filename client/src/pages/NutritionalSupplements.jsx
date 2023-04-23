import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Grid, Typography } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import supplements from "../supplements/supplements.json";
import { ImgCard } from "../components/ImgCard";
import protein from "../img/supplements/proteinpowder.jpg";
import betaAlanine from "../img/supplements/beta_alanine.jpg";
import creatine from "../img/supplements/creatine.jpg";
import omega3 from "../img/supplements/omega3.jpg";
import vitamineD from "../img/supplements/vitamineD.jpg";

export const NutritionalSupplements = () => {
  const { currentUser } = useContext(AuthContext);
  const imgs = [protein, creatine, betaAlanine, omega3, vitamineD];
  return (
    <div className="ns-container">
      <Navbar />
      <Typography variant="h3" marginBottom={'50px'}>
        Welcome to the supplements Wiki{" "}
        <b>
          <i>{currentUser && currentUser.fullname}</i>
        </b>
      </Typography>
      <Grid container spacing={2} justifyContent={'center'} alignItems={'cemter'} direction={"row"}>
        {supplements.supplements.map((element, index) => {
          return (
            <Grid item xs={12} sm={6} key={index+1}>
              <ImgCard
                key={index+1}
                img={imgs[index]}
                name={element.name}
                description={element.description}
                benefits={element.benefits}
                serving_size={element.serving_size}
                price={element.price}
              />
            </Grid>
          );
        })}
      </Grid>
      <Footer />
    </div>
  );
};
