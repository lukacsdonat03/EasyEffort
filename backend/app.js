const express = require('express')
const cors = require('cors')
const { StatusCodes } = require('http-status-codes/build/cjs/status-codes')
const app  = express()
const sequelize = require('./database/databaseConfig')
const cookieParser = require('cookie-parser')
//routers
const authRouter = require('./routes/authRouter')
const commentRouter = require('./routes/commentRouter')
const calorieRouter = require('./routes/caloprieRouter')
const userRouter = require('./routes/UserRouter')
const calorieCounterRouter = require('./routes/CalorieCounterRouter')
const authMiddleware = require('./middlewares/auth-middleware.js')

require('http-status-codes')
require('dotenv').config()


//middlewares
app.use(express.json())
app.use(cors({credentials:true,origin:'http://localhost:3000'}))
app.use(cookieParser())



//routes

app.get('/' ,(req,res)=>{
    res.status(StatusCodes.OK).send('Home page')
})
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/contact',commentRouter)
app.use('/api/v1/products',/*authMiddleware,*/calorieRouter)
app.use('/api/v1/user',userRouter)
app.use('/api/v1/counter',calorieCounterRouter)

//server
const port = process.env.PORT || 5000;

const start = async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        app.listen(port,()=>{
            console.log(`App is listening on port ${port}`);
        })
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
};

start();