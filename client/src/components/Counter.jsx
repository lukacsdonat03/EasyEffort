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
    e.preventDefeult();
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
        boxShadow: "10px 5px 15px #2C6E49",
        margin: "auto",
        backgroundColor: "#4C956C"
        
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
              style={{ width: "90%" }}
              type="text"
              name="numberInput"
              value={input}
            />
          </Grid>

          <Grid item xs={4}>
            <Button  value={1} onClick={handleClick} variant="contained" color="warning">
              1
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button value={2} onClick={handleClick} variant="contained"  color="warning">
              2
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button value={3} onClick={handleClick} variant="contained"  color="warning">
              3
            </Button>
          </Grid>

          <Grid item xs={4}>
            <Button value={4} onClick={handleClick} variant="contained"  color="warning">
              4
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button value={5} onClick={handleClick} variant="contained"  color="warning">
              5
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button value={6} onClick={handleClick} variant="contained"  color="warning">
              6
            </Button>
          </Grid>

          <Grid item xs={4}>
            <Button value={7} onClick={handleClick} variant="contained"  color="warning">
              7
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button value={8} onClick={handleClick} variant="contained"  color="warning">
              8
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button value={9} onClick={handleClick} variant="contained"  color="warning">
              9
            </Button>
          </Grid>

          <Grid item xs={4}>
            <Button value={","} onClick={handleClick} variant="contained"  color="warning"> 
              ,
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button value={0} onClick={handleClick} variant="contained"  color="warning">
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
