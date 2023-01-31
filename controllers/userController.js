const User = require ('../models/userModel')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError,UnauthenticatedError} = require('../errors')

const register = async (req,res)=>{
    const user = await User.create({ ...req.body })
    // jwt token
    res.status(StatusCodes.CREATED).json({user: {name: user.email}})
}

const login = async ( req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        throw new BadRequestError('Adja meg a belépési adatokat!')
    }
    const user  = await User.findOne({where:{ email: req.body.email}})
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