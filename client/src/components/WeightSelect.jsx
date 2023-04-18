import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import axios from 'axios'


export const WeightSelect = () => {
  const [formData, setFormData] = useState({
    //set initial data
    age:1,
    goal:"balance",
    weight:75,
    height:170,
    activity:"moderate",
    gender:"male"
  });

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.put('http://localhost:8080/api/v1/user/target-cal',formData,{withCredentials:true})
      .then((res)=>{alert('Data saved successfully!');console.log(res.data);console.log(formData);})
      .catch((err)=>{
        alert('Save failed!')
        console.error(err);
      })
  }

  return (
    <div>
      <Box>
        <Typography
          fontStyle={"italic"}
          align="center"
          variant="h5"
          marginBottom={2}
        >
          Choose Your Goal
        </Typography>
        <FormControl fullWidth sx={{margin:'15px',marginLeft:"10%"}}>
          <InputLabel id="demo-simple-select-label">Options:</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formData?.goal || "balance"}
            label="Options"
            name="goal"
            sx={{ width: "280px" }}
            onChange={({ target: { name, value } }) => {
              setFormData({ ...formData, [name]: value });
            }}
            
          >
            <MenuItem value={"balance"}>Balance</MenuItem>
            <MenuItem value={"mildWeightLoss"}>Mild Weight Loss</MenuItem>
            <MenuItem value={"mildWeightGain"}>Mild Weight Gain</MenuItem>
            <MenuItem value={"heavyWeightLoss"}>Heavy Weight Loss</MenuItem>
            <MenuItem value={"heavyWeightGain"}>Heavy Weight Gain</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{margin:'15px',marginLeft:"10%"}}>
          <FormLabel id="demo-radio-buttons-group-label">Gender:</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            
            name="gender"
            value={formData?.gender || "male"}
            onChange={({ target: { name, value } }) => {
              setFormData({ ...formData, [name]: value });
              console.log(formData.gender);
            }}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
        <FormControl fullWidth sx={{margin:'15px',marginLeft:"10%"}}>
          <TextField
            label="Age"
            name="age"
            type="number"
            
            sx={{ width: "280px" }}
            value={formData?.age || 1}
            onChange={({ target: { name, value } }) => {
              setFormData({ ...formData, [name]: value });
            }}
          />
        </FormControl>
        <FormControl fullWidth sx={{margin:'15px',marginLeft:"10%"}}>
          <TextField
            label="Height(cm)"
            name="height"
            type="number"
            sx={{ width: "280px" }}
            value={formData?.height || 170}
            
            onChange={({ target: { name, value } }) => {
              setFormData({ ...formData, [name]: value });
            }}
          />
        </FormControl>
        <FormControl fullWidth sx={{margin:'15px',marginLeft:"10%"}}>
          <TextField
            label="Weight(kg)"
            name="weight"
            type="number"
            sx={{ width: "280px" }}
            
            value={formData?.weight || 75}
            onChange={({ target: { name, value } }) => {
              setFormData({ ...formData, [name]: value });
            }}
          />
        </FormControl>
        <FormControl fullWidth sx={{margin:'15px',marginLeft:"10%"}}>
          <InputLabel id="demo-simple-select-label">Activity:</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={formData?.activity || "moderate"}
            label="Activity Level"
            name="activity"
            
            sx={{ width: "280px" }}
            onChange={({ target: { name, value } }) => {
              setFormData({ ...formData, [name]: value });
            }}
          >
            <MenuItem value={"sedentary"}>Sedentary</MenuItem>
            <MenuItem value={"light"}>Light</MenuItem>
            <MenuItem value={"moderate"}>Moderate</MenuItem>
            <MenuItem value={"active"}>Active</MenuItem>
            <MenuItem value={"extreme"}>Extreme</MenuItem>
          </Select>
        </FormControl>
        <button
            className="dashboard-button"
            onClick={(e)=>handleSubmit(e)}
            style={{marginLeft:'525px'}}
          >
            Save
          </button>
      </Box>
    </div>
  );
};
