import axios from "axios";
import { createContext, useState } from "react";

export const AdminContext = createContext()

export  const AdminOperations = ({children}) =>{
    
    const [ messages,setMessages ] = useState([])
    const [ users, setUsers ] = useState([]) 
     
    const listMessage = () =>{
        axios.get('http://localhost:8080/api/v1/contact/pending',{withCredentials:true})
        .then((res)=>{
            setMessages(res.data)
        })
        .catch(err=>{console.error(err);alert('Something went wrong! Try again or check the console for more information')} )
     }
     const aproveMessage = (id) =>{
        axios.put(`http://localhost:8080/api/v1/contact/${id}`,{state:true},{withCredentials:true})
        .then((res)=>{
            if(res.status === 200) alert('Comment status updated successfully...')
            if(res.status === 204) alert('There is no comment with this id!')
        })
        .catch((err)=>{
            alert('Progress failed, check the console...')
            console.log(err);
        })
        
        //Ha már döntött az admin ne jelenlen meg
        listMessage()
     }

     const rejectMessage = (id) =>{
        axios.put(`http://localhost:8080/api/v1/contact/${id}`,{state:false},{withCredentials:true})
        .then((res)=>{
            if(res.status === 200) alert('Comment status updated successfully...')
            if(res.status === 204) alert('There is no comment with this id!')
        })
        .catch((err)=>{
            alert('Progress failed, check the console...')
            console.log(err);
        })

        listMessage()
     }

     const setAdmin = (id,admin) =>{
        axios.put('http://localhost:8080/api/v1/user/admin',{
            admin: !admin,
            id:id
        },{withCredentials:true})
            .then((res)=>{
                if(res.status === 200) alert('User updated successfully...')
            })
            .catch(err=>{
                console.error(err)
                alert('Something went wrong, check the console from more information!')
            })
            allUser()
     }      

     const allUser = () =>{
        axios.get('http://localhost:8080/api/v1/user/all',{withCredentials:true})
      .then((res)=>setUsers(res.data))
     }
     return ( 
        <AdminContext.Provider value={{users,messages,listMessage,aproveMessage,rejectMessage,setAdmin,allUser}}>
            {children}
        </AdminContext.Provider>
     )
}

