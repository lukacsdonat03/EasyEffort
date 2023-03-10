import   { Grid}  from '@mui/material'
import { Box } from '@mui/system'
import { CalorieList } from '../components/CalorieList'
import { Counter } from '../components/Counter'



export const CalorieCounter = () => {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <CalorieList/>
        </Grid>
        <Grid item xs={4}>
          <Counter/>
        </Grid>
        </Grid>
        </Box>
  )
}
