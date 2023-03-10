import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Autocomplete, Button, TextField } from "@mui/material";
import axios from "axios";

let PRODUCTS = []

export const Counter = () => {
  const [input, setInput] = useState("");
  const [search,setSearch] = useState("");
  const [ selectedItem, setSelectedItem ] = useState({})
  
  useEffect(()=>{
    axios.post('http://localhost:8080/api/v1/counter/items',{item_name:search},{headers:{'Content-Type':'application/json'}})
      .then(res => {
        res.data.forEach(element=>PRODUCTS.push({label:element.item_name,fields:element}))
        console.log(PRODUCTS); 
      })

  },[search])

  const handleClick = (e) => {
    setInput(input + e.target.value);
  };
  const handleSubmit = (e) => {
    setInput("");
    PRODUCTS = []
    if(!selectedItem){
      return alert('Please choose an item')
    }
    axios.post('http://localhost:8080/api/v1/calorie/producst',{selectedItem},{headers:{'Content-Type':'application/json'}})
      .then(res =>{ console.log(res.data);})
  };
  const handleSearch = (e)=>{
    PRODUCTS = []
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
              options={PRODUCTS}
              renderOption={(props,option)=>{
                return(
                  <li {...props} key={Object.keys(option)} >{option.label}</li> 
                )
              }}
              sx={{ width: 300 }}
              onChange={(event,value)=>{setSelectedItem(value);console.log(value);}}
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
