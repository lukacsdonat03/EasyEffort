import { Button, Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import axios from "axios";
import { useState } from "react";

export const ModalContent = (props) => {
  const [updatedUser,setUpdatedUser] = useState({})

  const handleAdmin = () => {
    console.log(props.user.admin);
    axios.put('http://localhost:8080/api/v1/user/admin',
        {
            admin:!props.user.admin,
            id:props.user.id    
        })
        .then((res)=>{setUpdatedUser(res.data);props.onUpdateUser(updatedUser);alert('User updated successfully')})
        .catch((err)=>{alert('Error: ',err)})
  };
 
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <Typography
                marginRight={"5px"}
                marginLeft={"10px"}
                fontWeight="bold"
              >
                Current Weight:
              </Typography>
            </td>
            <td>
              <Typography marginRight={"5px"} fontWeight="bold">
                {props.user.currentWeight}
              </Typography>
            </td>
            <td>
              <Button
                variant="contained"
                startIcon={<CreateIcon />}
                sx={{ height: "25px", width: "5px" }}
              ></Button>
            </td>
          </tr>
          <tr>
            <td>
              <Typography
                marginTop={"15px"}
                marginRight={"5px"}
                marginLeft={"10px"}
                fontWeight="bold"
              >
                Target Weight:
              </Typography>
            </td>
            <td>
              <Typography
                marginTop={"15px"}
                marginRight={"5px"}
                fontWeight="bold"
              >
                {props.user.targetWeight}
              </Typography>
            </td>
            <td>
              <Typography marginTop={"15px"}>
                <Button
                  variant="contained"
                  startIcon={<CreateIcon />}
                  sx={{ height: "25px", width: "5px" }}
                ></Button>{" "}
              </Typography>
            </td>
          </tr>
          <tr>
            <td>
              <Typography
                marginTop={"10px"}
                marginRight={"5px"}
                marginLeft={"10px"}
                fontWeight="bold"
              >
                Change Password:
              </Typography>
            </td>
            <td>
              <Typography marginTop={"10px"} marginLeft={"5px"}>
                <Button
                  color="warning"
                  variant="contained"
                  startIcon={<CreateIcon />}
                  sx={{ height: "25px", width: "5px" }}
                ></Button>{" "}
              </Typography>
            </td>
          </tr>
          <tr>
            <td>
              <Typography
                marginTop={"10px"}
                marginRight={"5px"}
                marginLeft={"10px"}
                fontWeight="bold"
              >
                Set admin:
              </Typography>
            </td>
            <td>
              <Typography marginTop={"10px"} marginLeft={"5px"}>
                <Button
                  onClick={()=>{handleAdmin()}}
                  color="warning"
                  variant="contained"
                  startIcon={<CreateIcon />}
                  sx={{ height: "25px", width: "5px" }}
                ></Button>
              </Typography>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
