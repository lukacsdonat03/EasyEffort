import React from 'react'
import Grid from '@mui/material/Grid';
import { Button} from '@mui/material';



export const Counter = () => {
  return (
    <div style={{height:"580px",width:"500px",borderRadius:"30px",border:"1px solid black",boxShadow:"10px 5px 5px black",margin:"auto"}}>
        <div style={{margin:"auto",textAlign:'center',padding:"5px"}}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                  <label>Keresés: </label>
                  <input type="search" name="searchBar"/> 
                  <br />
                  <input style={{width:'100%'}} type="text" name="numberInput"/>
                </Grid>

                <Grid item xs={4}><Button variant='contained'>1</Button></Grid>
                <Grid item xs={4}><Button variant='contained'>2</Button></Grid>
                <Grid item xs={4}><Button variant='contained'>3</Button></Grid>
                    
                <Grid item xs={4}><Button variant='contained'>4</Button></Grid>
                <Grid item xs={4}><Button variant='contained'>5</Button></Grid>
                <Grid item xs={4}><Button variant='contained'>6</Button></Grid>
                    
                <Grid item xs={4}><Button variant='contained'>7</Button></Grid>
                <Grid item xs={4}><Button variant='contained'>8</Button></Grid>
                <Grid item xs={4}><Button variant='contained'>9</Button></Grid>
                    
                <Grid item xs={4}><Button variant='contained'>,</Button></Grid>
                <Grid item xs={4}><Button variant='contained'>0</Button></Grid>
                <Grid item xs={4}><Button variant='contained' color='success'>Submit</Button></Grid>

              </Grid>
            
        </div>
    </div>
  )
}
