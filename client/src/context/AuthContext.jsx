import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const AuthContext = createContext()

export const Authentication = ({children}) =>{
    const [currentUser,setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('user') || null)
    )
    
    const login = async (inputs) =>{
        const res = await axios.post('http://localhost:8080/api/v1/auth/login',inputs,{withCredentials:true,headers:{'Content-Type':'application/json'}})
        setCurrentUser(res.data)
    }
    const logout = async () =>{
       axios.get('http://localhost:8080/api/v1/auth/logout',{withCredentials:true})
       setCurrentUser(null)
    }

    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(currentUser))
    },[currentUser])

    return (
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}