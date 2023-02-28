import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Autocomplete, Button, TextField } from "@mui/material";
import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://nutritionix-api.p.rapidapi.com/v1_1/search/cheddar%20cheese',
  params: {fields: 'item_name,item_id,brand_name,nf_calories,nf_total_fat'},
  headers: {
    'X-RapidAPI-Key': '1213c3aae7msh94cb6f7e643c1eep11ed8bjsn987a07e007df',
    'X-RapidAPI-Host': 'nutritionix-api.p.rapidapi.com'
  }
};
const products = []
axios.request(options).then(function (response) {
  products.push(response.data)
}).catch(function (error) {
	console.error(error);
});

export const Counter = () => {
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    setInput(input + e.target.value);
  };

  return (
    <div
      style={{
        height: "580px",
        width: "500px",
        borderRadius: "30px",
        border: "1px solid black",
        boxShadow: "10px 5px 5px black",
        margin: "auto",
      }}
    >
      <div style={{ margin: "auto", textAlign: "center", padding: "5px" }}>
        <Grid container spacing={1}>
          <Grid item xs={12} >
            <label>Keresés: </label>
            <Autocomplete
              style={{ width: "100%" }}
              disablePortal
              options={products}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField{...params} label="Search..." />}
            />
            <br />
            <input style={{ width: "100%" }} type="text" name="numberInput" />
          </Grid>

          <Grid item xs={4}>
            <Button value={1} onClick={handleClick} variant="contained">
              1
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button value={2} onClick={handleClick} variant="contained">
              2
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button value={3} onClick={handleClick} variant="contained">
              3
            </Button>
          </Grid>

          <Grid item xs={4}>
            <Button value={4} onClick={handleClick} variant="contained">
              4
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button value={5} onClick={handleClick} variant="contained">
              5
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button value={6} onClick={handleClick} variant="contained">
              6
            </Button>
          </Grid>

          <Grid item xs={4}>
            <Button value={7} onClick={handleClick} variant="contained">
              7
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button value={8} onClick={handleClick} variant="contained">
              8
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button value={9} onClick={handleClick} variant="contained">
              9
            </Button>
          </Grid>

          <Grid item xs={4}>
            <Button value={","} onClick={handleClick} variant="contained">
              ,
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button value={0} onClick={handleClick} variant="contained">
              0
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              onClick={() => {
                setInput("");
              }}
              variant="contained"
              color="success"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
