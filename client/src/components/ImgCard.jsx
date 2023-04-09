import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export const ImgCard = (props) => {
  return (
    <Card sx={{ maxWidth: 600, height: 500 ,marginBottom:"45px",borderRadius: "25px",marginLeft:'180px',boxShadow:' rgba(0, 0, 0, 0.3) 0px 19px 38px,  #0d1f2d 16px 10px 12px;'}}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="240"
        image={props.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Short description: {props.description}
          <br />
          <br />
          Recommended serving unit: {props.serving_size}
          <br />
          Avarage price: {props.price}
        </Typography>
        Benefits: <ul>
          {props.benefits.map((element,index)=>{
           return <li key={index}>{element}</li>    
         })} 
          </ul>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}
