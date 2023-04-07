import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Typography } from '@mui/material'
import { AdmimnModal } from './AdminModal'

export const Dashboard = () => {
  
  const [userList, setUserList] = useState([]) 

  useEffect(()=>{
    axios.get('http://localhost:8080/api/v1/user/all')
      .then((res)=>setUserList(res.data))
  },[])



  
  return (
       
    <>
      <div className='dashboard-container'>
        <table>
          <thead>
            <tr><th colSpan={6}><Typography variant='h4' textAlign={'center'} >Dashboard</Typography></th></tr>
            <tr>
              <td className='dashboard-cells'>#</td>
              <td className='dashboard-cells'>ID</td>
              <td className='dashboard-cells'>Fullname</td>
              <td className='dashboard-cells'>Email</td>
              <td className='dashboard-cells'>Admin</td>
              <td className='dashboard-cells'>More Information</td>
            </tr>
          </thead>
          <tbody>
            {userList.map((user,index)=>{
              return <tr key={index+1}>
                <td className='dashboard-cells'>{index+1}</td>
                <td className='dashboard-cells'>{user.id}</td>
                <td className='dashboard-cells'>{user.fullname}</td>
                <td className='dashboard-cells'>{user.email}</td>
                <td className='dashboard-cells'>{user.admin ?<span>💹</span>:<span>❌</span>}</td>
                <td className='dashboard-cells'><AdmimnModal users={user}/></td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
