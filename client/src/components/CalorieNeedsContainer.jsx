import React from 'react'
import { WeightSelect } from './WeightSelect'
import { Grid } from '@mui/material'

export const CalorieNeedsContainer = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <div className='calorie-needs-container'><WeightSelect/></div>
      </Grid>
    </Grid>
  )
}
