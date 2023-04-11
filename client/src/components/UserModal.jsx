import { Button, MenuItem, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import axios from "axios";

export const UserModal = () => {
  const [open, setOpen] = useState(false);
  const [openWeight, setOpenWeight] = useState(false);
  const [currentWeight, setCurrentWeight] = useState(0);
  const [ user, setUser ] = useState({})

    useEffect(()=>{
        axios.get('http://localhost:8080/api/v1/user',{withCredentials:true}).then((res)=>{setUser(res.data)}).catch((err)=>console.error(err))
    },[user])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSetButtonClick = () => {
    setOpenWeight(!openWeight);
  };

  const handleCurrentWeight = (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
      axios
        .put("http://localhost:8080/api/v1/user/current-weight", {currentWeight},{withCredentials:true})
        .then((res) => {
          if (res.status === 200)
            alert(
              `Your curret weight updated successfully to ${currentWeight}!`
            );
        })
        .catch((err) => {
          console.error(err);
          alert("Something went wrong...");
        });
    }
  };

  return (
    <div>
      <MenuItem onClick={handleOpen}>
        <Typography textAlign="center">Set Weight</Typography>
      </MenuItem>
      <Modal open={open} onClose={handleClose}>
        <div className="modal-container">
          <Typography variant="h3" color={" #0d1f2d"} align="center">
            Set Your Goal <i>{user.fullname}</i>
          </Typography>

          <Typography >Your current weight: {user.currentWeight} kg</Typography>
          <Button
            variant="contained"
            color="success"
            startIcon={<CreateIcon />}
            sx={{ height: "25px", width: "5px" }}
            onClick={handleSetButtonClick}
          ></Button>
          <br />
          {openWeight && (
            <div>
                <input
              type="number"
              className="weight-input"
              min={40}
              max={250}
              onChange={(e) => setCurrentWeight(e.target.value)}
              onKeyDown={(e) => handleCurrentWeight(e)}
            />
            <Typography marginLeft={2} fontSize={12} color={'#64686b'}>(Press Enter to update your weight)</Typography>
            </div>
          )}

          
          <button
            className="dashboard-button"
            style={{ position: "absolute", right: 10, bottom: 10 }}
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};
