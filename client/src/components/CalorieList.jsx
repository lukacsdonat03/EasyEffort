import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import Cookies from 'js-cookie'

export const CalorieList = () => {
  const [ listData,setListData ] = useState([])

  const{ currentUser } = useContext(AuthContext)
//TODO:cookiból kinyerni a jwt-t és decóüdolni az id miatt
  useEffect(()=>{
   console.log(Cookies.get('access_token'));
    axios.get(`http://localhost:8080/api/v1/products/all/${currentUser.id}`)
      .then(res=>{
        setListData(res.data)
      })
  },[])

  return (
    <>
      <div className='calorie-table-div'>
      <table className='calorie-table'>
        <thead>
          <tr>
            <th className='calorie-table-cells'>Date</th>
            <th className='calorie-table-cells'>Product</th>
            <th className='calorie-table-cells'>Cals</th>
            <th className='calorie-table-cells'>Carbs<sub>(g)</sub></th>
            <th className='calorie-table-cells'>Protein<sub>(g)</sub></th>
            <th className='calorie-table-cells'>Fat<sub>(g)</sub></th>
            <th className='calorie-table-cells'>Weight <sub>(g)</sub></th>
          </tr>
        </thead>
        <tbody>
          {listData.map((value,index)=>{
           return <tr key={index}>
              <td className='calorie-table-cells'>{value.event_time}</td>
              <td className='calorie-table-cells'>{value.name}</td>
              <td className='calorie-table-cells'>{value.totalCalorie}</td>
              <td className='calorie-table-cells'>{value.carbohydrate}</td>
              <td className='calorie-table-cells'>{value.protein}</td>
              <td className='calorie-table-cells'>{value.fat}</td>
              <td className='calorie-table-cells'>{value.amount}</td>
            </tr>
          })}
        </tbody>
      </table>
      </div>
    </>
  )
}
