import axios from "axios";
import { createContext, useState } from "react";

export const AdminContext = createContext()

export  const AdminOperations = ({children}) =>{
    
    const [ messages,setMessages ] = useState([])
     
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
     return ( 
        <AdminContext.Provider value={{messages,listMessage,aproveMessage,rejectMessage}}>
            {children}
        </AdminContext.Provider>
     )
}

