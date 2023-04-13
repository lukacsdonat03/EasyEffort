import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const UserMessage = () => {
    const [message, setMessage] = useState([]) 
    useEffect(()=>{
    axios.get('http://localhost:8080/api/v1/contact/messages',{withCredentials:true})
        .then((res)=>{
            console.log(res.data);
            setMessage(res.data)
        })
 },[]) 
  
 return (
    <>
        <div className='message-container'>
            <table className='calorie-table'>
                <thead>
                    <tr>
                        <th className='calorie-table-cells'>ID</th>
                        <th className='calorie-table-cells'>UserId</th>
                        <th className='calorie-table-cells'>Subject</th>
                        <th className='calorie-table-cells'>Message</th>
                        <th className='calorie-table-cells'>Option</th>
                    </tr>
                </thead>
                <tbody>
                    {message.map((singleMessage,index)=>{
                        return <tr key={index}>
                            <td className='calorie-table-cells'>{index+1}</td>
                            <td className='calorie-table-cells'>{singleMessage.userId}</td>
                            <td className='calorie-table-cells'>{singleMessage.subject}</td>
                            <td className='calorie-table-cells'>{singleMessage.message}</td>
                            <th className='calorie-table-cells'><button className='list-button'>✅</button><button className='list-button'>❌</button></th>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </>
  )
}
