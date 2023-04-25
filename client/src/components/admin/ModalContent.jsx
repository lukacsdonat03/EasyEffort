import { Button, Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import axios from "axios";
import { useContext, useState } from "react";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { AdminContext } from "../../context/AdminContext";


export const ModalContent = (props) => {
  const [ open,setOpen ] = useState(false)
  const [ newPassword , setNewPassword] = useState("")

  const {setAdmin,allUser} = useContext(AdminContext)

  const handlePasswordChange = (e) =>{
    e.preventDefault()
    setNewPassword(e.target.value)
  }

  const sendPassword = () =>{

    axios.put('http://localhost:8080/api/v1/user/admin/password',
    {
      id:props.user.id,
      newPassword: newPassword
    },{withCredentials:true}
    ).then(()=>{
      alert('Password updated successfully')
    }).catch((err)=>{
      alert('Error: ',err)
    })
  }

  const handleAdmin = () => {
      setAdmin(props.user.id,props.user.admin)
      
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
                ></Button>
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
                  onClick={()=>{setOpen(!open)}}
                ></Button>
              </Typography>
            </td>
            {open === true
            ? <div>
                <td>
              <Typography marginTop={'10px'} marginLeft={'5px'}> <input type="password" onChange={(e)=>{handlePasswordChange(e)}}/></Typography>
              </td>
              <td>
              <Button
                  color="success"
                  variant="contained"
                  startIcon={<DoneOutlineIcon />}
                  sx={{ height: "25px", width: "5px" }}
                  onClick={sendPassword}
                ></Button>
              </td>
            </div>
            :null}
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
                  onClick={() => {
                    handleAdmin();
                  }}
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
