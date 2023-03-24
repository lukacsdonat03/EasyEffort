const database = require("../database/dbConfig");
const {
  BadRequestError,
  NotFoundError,
} = require("../errors");
const { StatusCodes } = require("http-status-codes");
const fitnessCalculator = require('fitness-calculator')


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
    const {id} = req.params
    const {totalCalorie} = req.body
    if(!id || !totalCalorie){
        return res.status(StatusCodes.BAD_REQUEST)
    }
    database.query('UPDATE user SET currentCalorie = currentCalorie + ? WHERE id = ? ',[totalCalorie,id],(err)=>{
        if(err) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err)
        return res.status(StatusCodes.OK).send('Calorie updated...')
    })
}  

const setTargetCalorie = (req,res)=>{
    /*
        TODO:valami option cucc frontenden ahol a user ki tudja választani a listából, hogy melyik legyen beállítiva
        visszatérési érték:
            {
                balance: Number,
                mildWeightLoss: Number,
                mildWeightGain: Number,
                heavyWeightLoss: Number,
                heavyWeightGain: Number
            }
    */ 
    const{id} = req.params
    const {gender,age,height,weight,activity} = req.body
    const calorieNeeds = fitnessCalculator.calorieNeeds(gender,age,height,weight,activity)
    //TODO:eldönteni hogy weightLoss vagy weightGain kell
    //database query
    //TODO: szar az sql paraméteresen valamiért
    database.query('UPDATE user SET targetCalorie = ? WHERE id = ?',[calorieNeeds.mildWeightLoss,id],(err)=>{
        if(err){
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Error: '+err)
        }
        return res.status(StatusCodes.OK).json(calorieNeeds)
    })
}

module.exports = {
    deleteUser,
    getAllUser,
    getUser,
    setCurrentWeight,
    setTargetWeight,
    setCurrentCalorie,
    setTargetCalorie
}