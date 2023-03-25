import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const CalorieList = () => {
  const [ listData,setListData ] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/api/v1/products/all/12")
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
