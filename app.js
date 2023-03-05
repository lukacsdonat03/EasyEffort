const express = require('express')
const cors = require('cors')
const { StatusCodes } = require('http-status-codes/build/cjs/status-codes')
const app  = express()
const dbConfig = require('./database/dbConfig')

//routers
const authRouter = require('./routes/authRouter')
const commentRouter = require('./routes/commentRouter')
const calorieRouter = require('./routes/caloprieRouter')
const userRouter = require('./routes/UserRouter')
const calorieCounterRouter = require('./routes/CalorieCounterRouter')

require('http-status-codes')
require('dotenv').config()


//middlerwares
app.use(express.json())
app.use(cors({credentials:true,origin:'*'}))


//error handlers


//routes

app.get('/' ,(req,res)=>{
    res.status(StatusCodes.OK).send('Home page')
})
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/contact',commentRouter)
app.use('/api/v1/products',calorieRouter)
app.use('/api/v1/user',userRouter)
app.use('/api/v1/counter',calorieCounterRouter)

//server
const port = process.env.PORT || 5000;

const start =  ()=>{
    try {
        dbConfig.connect(function (err) {
            if (err) {
                console.log(err)
                return
            }
            console.log('Connected...')
        })
        app.listen(port,()=>{
            console.log(`App is listening on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
};

start();