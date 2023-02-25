import React from 'react'
import Grid from '@mui/material/Grid';



export const Counter = () => {
  return (
    <div style={{height:"580px",width:"500px",borderRadius:"30px",border:"1px solid black",boxShadow:"10px 5px 5px black",margin:"auto"}}>
        <div style={{margin:"auto",textAlign:'center',padding:"5px"}}>
            <Grid container>
              <Grid item xs={4}><button>1</button> </Grid>
              <Grid item xs={4}><button>2</button> </Grid>
              <Grid item xs={4}><button>3</button> </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={4}><button>4</button> </Grid>
              <Grid item xs={4}><button>5</button> </Grid>
              <Grid item xs={4}><button>6</button> </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={4}><button>7</button> </Grid>
              <Grid item xs={4}><button>8</button> </Grid>
              <Grid item xs={4}><button>9</button> </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={4}><button>,</button> </Grid>
              <Grid item xs={4}><button>0</button> </Grid>
              <Grid item xs={4}><button>Submit</button> </Grid>
            </Grid>
            
        </div>
    </div>
  )
}
