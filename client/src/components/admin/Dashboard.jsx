import React, { useContext, useEffect } from 'react'

import { Typography } from '@mui/material'
import { AdmimnModal } from './AdminModal'
import { AdminContext } from '../../context/AdminContext'

export const Dashboard = () => {
  
  
  const {users,allUser} = useContext(AdminContext)
  useEffect(()=>{
      allUser()
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
            {users.map((user,index)=>{
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
