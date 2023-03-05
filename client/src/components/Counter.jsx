import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Autocomplete, Button, TextField } from "@mui/material";
import axios from "axios";

let ITEMS = [];

export const Counter = () => {
  const [input, setInput] = useState("");
  const [search,setSearch] = useState("");

  useEffect(() => {
    ITEMS = [];
    const options = {
      method: "GET",
      url: `https://nutritionix-api.p.rapidapi.com/v1_1/search/${search}`,
      params: {
        fields: "item_name,brand_name,nf_calories,nf_total_fat,nt_protein,nf_total_carbohydrate",
      },
      headers: {
        "X-RapidAPI-Key": "1213c3aae7msh94cb6f7e643c1eep11ed8bjsn987a07e007df",
        "X-RapidAPI-Host": "nutritionix-api.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        //response.data.hits.forEach(element => {ITEMS.push(element.fields.item_name,);console.log(ITEMS);})
        response.data.hits.forEach(element =>{
          const item_name  = element.fields.item_name
          const nf_calories = element.fields.nf_calories
          const item = {label: item_name,nf_calories:nf_calories}
          ITEMS.push(item)
          console.log(ITEMS);
        })
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  const handleClick = (e) => {
    setInput(input + e.target.value);
  };
  const handleSubmit = (e) => {
    setInput("");
  };
  const handleSearch = (e)=>{
    setSearch(e.target.value)
    console.log(search);
  }

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
          <Grid item xs={12}>
            <label>Keresés: </label>
            <Autocomplete
              style={{ width: "100%" }}
              disablePortal
              id="combo-box-demo"
              options={ITEMS}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Search..."  onChange={handleSearch}/>
              )}
            />
            <br />
            <input
              style={{ width: "100%" }}
              type="text"
              name="numberInput"
              value={input}
            />
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
            <Button onClick={handleSubmit} variant="contained" color="success">
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
