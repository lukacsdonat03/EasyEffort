import   { Grid}  from '@mui/material'
import { Box } from '@mui/system'
import { CalorieList } from '../components/CalorieList'
import { Counter } from '../components/Counter'



export const CalorieCounter = () => {
  
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2}>
        <Grid item md={6} sm={6} xs={8}>
          <CalorieList/>
        </Grid>
        <Grid item md={3} sm={3} xs={4}>
          <Counter/>
        </Grid>
        </Grid>
        </Box>
    </div>
  )
}
