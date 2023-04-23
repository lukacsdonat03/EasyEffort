import React, { useEffect, useState } from 'react'
import axios from 'axios'


export const UserMessage = () => {
    const [message, setMessage] = useState([]) 
    
    useEffect(()=>{
    fetchData()
 },[]) 

 const fetchData = () =>{
    axios.get('http://localhost:8080/api/v1/contact/pending',{withCredentials:true})
        .then((res)=>{
            setMessage(res.data)
        })
 }

 const handleAprove = (event,id) =>{
    event.preventDefault()
    axios.put(`http://localhost:8080/api/v1/contact/${id}`,{state:true},{withCredentials:true})
        .then((res)=>{
            if(res.status === 200) alert('Comment status updated successfully...')
            if(res.status === 204) alert('There is no comment with this id!')
        })
        .catch((err)=>{
            alert('Progress failed, check the console...')
            console.log(err);
        })
       
        
 }

 const handleReject = (event,id) =>{
    event.preventDefault()
    axios.put(`http://localhost:8080/api/v1/contact/${id}`,{state:false},{withCredentials:true})
        .then((res)=>{
            if(res.status === 200) alert('Comment status updated successfully...')
            if(res.status === 204) alert('There is no comment with this id!')
        })
        .catch((err)=>{
            alert('Progress failed, check the console...')
            console.log(err);
        })
 }
  
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
                            <th className='calorie-table-cells'><button className='list-button' onClick={(e)=>{handleAprove(e,singleMessage.id)}}>✅</button><button className='list-button'  onClick={(e)=>{handleReject(e,singleMessage.id)}}>❌</button></th>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </>
  )
}
