const User  = require ('../models/userModel')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError,UnauthenticatedError} = require('../errors')

const register = async (req,res)=>{
    const user = await User.create({...req.body})
    // jwt token
    res.status(StatusCodes.CREATED).json({user: {name: user.fullname}})
}

const login = async ( req,res)=>{
    const {username,password} = req.body
    if(!username || !password){
        throw new BadRequestError('Adja meg a belépési adatokat!')
    }
    const user  = await User.findOne({where:{ username: req.body.username}})
    if(!user){
        throw new UnauthenticatedError('Nem megfelelő belépési adatok!')
    }
    //jelszo ellenorzes az adatbazisbvan

    //jwt token létrehozása
}

module.exports = {
    register,
    login
}