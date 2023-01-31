const express = require('express')
const cors = require('cors')
const { StatusCodes } = require('http-status-codes/build/cjs/status-codes')
const app  = express()

//routers
const userRouter = require('./routes/userRouter')


require('http-status-codes')
require('dotenv').config()


//middlerwares
app.use(express.json())
app.use(cors())

//error handlers


//routes

app.get('/' ,(req,res)=>{
    res.status(StatusCodes.OK).send('Home page')
})
app.use('/api/v1/auth',userRouter)

//server
const port = process.env.PORT || 5000;

const start = async ()=>{
    try {
        // await connect db
        app.listen(port,()=>{
            console.log(`App is listening on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
};

start();