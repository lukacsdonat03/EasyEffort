
import React, { useContext, useEffect, } from 'react'
import { CalorieContext } from '../context/CalorieContext'


export const CalorieList = () => {
 

  const {listItem,productList,deleteItem} = useContext(CalorieContext)


  useEffect(()=>{
      listItem()
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
            <th className='calorie-table-cells'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((value,index)=>{
           return <tr key={index}>
              <td className='calorie-table-cells'>{new Date(value.event_time).toLocaleString()}</td>
              <td className='calorie-table-cells'>{value.name}</td>
              <td className='calorie-table-cells'>{value.totalCalorie}</td>
              <td className='calorie-table-cells'>{value.carbohydrate}</td>
              <td className='calorie-table-cells'>{value.protein}</td>
              <td className='calorie-table-cells'>{value.fat}</td>
              <td className='calorie-table-cells'>{value.amount}</td>
              <td className='calorie-table-cells'><button className='list-button' onClick={()=>{deleteItem(value.id);listItem()}}>❌</button></td>
            </tr>
          })}
        </tbody>
      </table>
      </div>
    </>
  )
}
