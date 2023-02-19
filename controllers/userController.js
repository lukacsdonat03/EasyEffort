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
    const {id} = req.params
    const {currentWeight} = req.body

    if(!id)
        throw new BadRequestError('Nincs id negadva!')

    if(currentWeight<1 )
        throw new BadRequestError('Invalid súly')

    database.query('UPDATE user SET currentWeight = ? WHERE id = ?',[currentWeight,id],(err)=>{
        if(err){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Error: '+err)
        }
        res.status(StatusCodes.OK).send(`Weight updated to ${currentWeight}.`)
    }) 
}

const setTargetWeight = (req,res)=>{
    const {id} = req.params
    const {targetWeight} = req.body
    
    if(!id)
        throw new BadRequestError('Nincs id negadva!')

    if(targetWeight<50 )
        throw new BadRequestError('Nem adhatsz meg 50kg-nál kisebb értéket')

    database.query('UPDATE user SET targetWeight = ? WHERE id = ?',[targetWeight,id],(err)=>{
        if(err){
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Error: '+err)
        }
        res.status(StatusCodes.OK).send(`Your target weight updated to ${targetWeight}.`)
    }) 
}

const setCurrentCalorie = (req,res)=>{
    //external lib??
    //api
}

const setTargetCalorie = (req,res)=>{
    //external lib??
}

module.exports = {
    deleteUser,
    getAllUser,
    getUser,
    setCurrentWeight,
    setTargetWeight
}