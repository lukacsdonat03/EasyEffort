import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'

export const CalorieList = () => {
  
  const rows = [
    {id:1,event_time: Date(),item_name: "apple",total_calorie: 123,carbohydrate:10,protein:2,fat:3,amount:81} 
    
  ];
  
  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/products/all/20').then(res=>{
      console.log(res.data);
      const product = res.data
      rows.push(product.event_time,product.name,product.totalCalorie,product.carbohydrate,product.protein,product.fat,product.amount)
      console.log(rows);
    })
  }, )
  
 
  
  const columns = [
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'name', headerName: 'Product', width: 100 },
    { field: 'totalCalorie', headerName: 'Calorie', width: 100 },
    { field: 'carbohydrate', headerName: 'Carbohydrate', width: 100 },
    { field: 'protein', headerName: 'Protein', width: 100 },
    { field: 'fat', headerName: 'Fat', width: 100 },
    { field: 'amount', headerName: 'Amount/Weight', width: 100 },

  ];
  
    return (
      <div className='calorie-list-container'>
        <div style={{ height: 350, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      </div>
    );  
}


 

