import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'

export const CalorieList = () => {
  
  const rows = [
    //{ id: 1, col1: 'Hello', col2: 'World' },
    {id:1,event_time: Date(),item_name: "apple",total_calorie: 123,carbohydrate:10,protein:2,fat:3,amount:81} 
    
  ];
  
  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/products/all/1').then(res=>{
      const product = res.data
      rows.push(product.event_time,{item_name:product.name,total_calorie:product.totalCalorie},product.carbohydrate,product.protein,product.fat,product.amount)
      console.log(rows);
    })
  }, )
  
 
  
  const columns = [
    { field: 'event_time', headerName: 'Date', width: 150 },
    { field: 'item_name', headerName: 'Product', width: 150 },
    { field: 'total_calorie', headerName: 'Calorie', width: 150 },
    { field: 'carbohydrate', headerName: 'Carbohydrate', width: 150 },
    { field: 'protein', headerName: 'Protein', width: 150 },
    { field: 'fat', headerName: 'Fat', width: 150 },
    { field: 'amount', headerName: 'Amount/Weight', width: 150 },

  ];
  
    return (
      <div className='calorie-list-container'>
        <div style={{ height: 350, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      </div>
    );  
}


 

