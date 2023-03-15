import   { Grid}  from '@mui/material'
import { Box } from '@mui/system'
import { CalorieList } from '../components/CalorieList'
import { Counter } from '../components/Counter'
import { Footer } from '../components/Footer'



export const CalorieCounter = () => {
  
  return (
    <div className='calorie-counter-page-container'>
      <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2}>
        <Grid item md={6} sm={6} xs={8}>
          <CalorieList/>
        </Grid>
        <Grid item md={6} sm={6} xs={6} >
          <Counter/>
        </Grid>
        </Grid>
        </Box>
        <div className='footer-container'>
          <Footer/>
        </div>
    </div>
  )
}
