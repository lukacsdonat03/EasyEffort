import React, { useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Gym } from "./wokrouts/Gym";
import { StreetWorkout } from "./wokrouts/StreetWorkout";
import { HomeWorkout } from "./wokrouts/HomeWorkout";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Wokrouts() {
  const [ value , setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Navbar />
      <div className="workout-container">
        <Box sx={{ width: '100%' }} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider',justifyContent:'center',display:'flex' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Gym"  sx={{ '&.MuiTab-root:hover': { color: 'white' } }} />
            <Tab label="Street Workout" sx={{ '&.MuiTab-root:hover': { color: 'white' } }} />
            <Tab label="Home" sx={{ '&.MuiTab-root:hover': { color: 'white' } }} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Gym/>
        </TabPanel>
        <TabPanel  value={value} index={1}>
          <StreetWorkout/>
        </TabPanel>
        <TabPanel  value={value} index={2}>
          <HomeWorkout/>
        </TabPanel>
      </Box>
      </div>
      <Footer />
    </div>
  );
}

export default Wokrouts;
