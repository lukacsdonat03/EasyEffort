import React, { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Autocomplete, Button, TextField } from "@mui/material";
import axios from "axios";
import { CalorieContext } from "../context/CalorieContext";

let PRODUCTS = [];

export const Counter = () => {
  const{createItem,listItem} = useContext(CalorieContext)

  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(()=>{
    axios.post('http://localhost:8080/api/v1/counter/items',{item_name:"%20"},{headers:{'Content-Type':'application/json'},withCredentials:true})
      .then(res => {
        res.data.map((element,index)=>PRODUCTS.push({id:index+1,label:element.item_name,fields:element}))
        console.log(PRODUCTS); 
      })
  },[])

  const handleInput = (e) => {
    axios
      .post(
        "http://localhost:8080/api/v1/counter/items",
        { item_name: search },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        res.data.map((element, index) =>
          PRODUCTS.push({
            id: index + 1,
            label: element.item_name,
            fields: element,
          })
        );
        console.log(PRODUCTS);
        console.log(search);
      });
  };

  const handleClick = (e) => {
    setInput(input + e.target.value);
  };
  const handleSubmit = () => {
    const item = selectedItem.fields;
    createItem(item,input)
    listItem()
  };
  const handleSearch = (e) => {
      PRODUCTS.splice(0, PRODUCTS.length);
      setSearch(e.target.value);
      console.log(search);
      console.log(Object.keys(PRODUCTS));
  };

  return (
    <div className="counter-box">
      <div className="counter-container">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Autocomplete
              style={{ width: "100%" }}
              disablePortal
              id="combo-box-demo"
              //className="fullwidth" nem irja felul ://
              options={PRODUCTS}
              renderOption={(props, option) => {
                return (
                  <li {...props} key={option.id}>
                    {option.label}
                  </li>
                );
              }}
              sx={{ width: 300 }}
              onChange={(event, value) => {
                setSelectedItem(value);
                console.log(value.fields);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search..."
                  onChange={handleSearch}
                />
              )}
            />
            <br />
            <Button variant="contained" color="primary" className="counter-button" onClick={handleInput}>
              Search:
            </Button>
            <br />
          </Grid>
          <Grid item xs={8}>
            <input
              className="fullwidth border-radius"
              type="text"
              name="numberInput"
              value={input}
              readOnly
            />
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" onClick={()=>setInput("")}>Clear</Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              value={1}
              className="counter-button"
              onClick={handleClick}
              variant="contained"
            >
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
            <Button onClick={(e)=>{handleSubmit(e)}} variant="contained" color="success">
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
