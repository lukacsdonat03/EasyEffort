const database = require("../database/dbConfig");
const {
  BadRequestError,
  NotFoundError,
} = require("../errors");
const { StatusCodes } = require("http-status-codes");

const deleteUser = (req,res) =>{
    const{id} = req.params
    database.query('DELETE * FROM user WHERE id = ?',[id],(err)=>{
        if (err) {
            res.status(StatusCodes.NOT_FOUND).send(err);
          }
          res.status(StatusCodes.NO_CONTENT).send("Sikeres törlés...");
    })
}

const getAllUser = (req,res) =>{
    database.query('SELECT * FROM user',(err,rows)=>{
        if(err){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Error: '+err)
        }
        res.status(StatusCodes.OK).send(rows)
    })
} 

const getUser = (req,res) =>{
    const {id} = req.params
    database.query('SELECT * FROM user WHERE id = ?',[id],(err,data)=>{
        if(err){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('ERROR: '+err)
        }
        if(data.length === 0){
            res.status(StatusCodes.NO_CONTENT).send(`No user with id ${id}`)
        }
        res.status(StatusCodes.OK).send(data)
    })
} 

//create == register => auth.js

const setCurrentWeight = (req,res)=>{
    
}

const setTargetWeight = (req,res)=>{
    
}

const setCurrentCalorie = (req,res)=>{

}

const setTargetCalorie = (req,res)=>{
    
}