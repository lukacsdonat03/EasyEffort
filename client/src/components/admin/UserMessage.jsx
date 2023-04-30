import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'


export const UserMessage = () => {
    

    const {messages,aproveMessage,rejectMessage,listMessage} = useContext(AdminContext) 
    
    useEffect(()=>{
        listMessage()
 },[])
 
    const handleAprove = (id) =>{
        aproveMessage(id)
        listMessage()
    }

    const handleReject = (id) =>{
        rejectMessage(id)
        listMessage()
    }

  
 return (
    <>
        <div className='message-container'>
            <table className='calorie-table'>
                <thead>
                    <tr>
                        <th className='calorie-table-cells'>#</th>
                        <th className='calorie-table-cells'>ID</th>
                        <th className='calorie-table-cells'>UserId</th>
                        <th className='calorie-table-cells'>Subject</th>
                        <th className='calorie-table-cells'>Message</th>
                        <th className='calorie-table-cells'>Option</th>
                    </tr>
                </thead>
                <tbody>
                    {messages.map((singleMessage,index)=>{
                        return <tr key={index}>
                            <td className='calorie-table-cells'>{index+1}</td>
                            <td className='calorie-table-cells'>{singleMessage.id}</td>
                            <td className='calorie-table-cells'>{singleMessage.userId}</td>
                            <td className='calorie-table-cells'>{singleMessage.subject}</td>
                            <td className='calorie-table-cells'>{singleMessage.message}</td>
                            <th className='calorie-table-cells'><button className='list-button' onClick={()=>{handleAprove(singleMessage.id)}}>✅</button><button className='list-button'  onClick={()=>{handleReject(singleMessage.id)}}>❌</button></th>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </>
  )
}
