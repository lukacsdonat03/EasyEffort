const {StatusCodes} = require('http-status-codes')
const {BadRequestError,UnauthenticatedError, NotFoundError} = require('../errors')
const database = require('../database/dbConfig')
const bcrypt = require('bcrypt')
const jwt  = require('jsonwebtoken')
const bodyParser = require('body-parser')
require('dotenv').config()

const register = async (req,res)=>{

    const fullname = req.body.fullname
    const email = req.body.email
    const password = req.body.password
    database.query('SELECT * FROM user WHERE email LIKE ?',
        [email],
        (err,rows)=>{
           if(err){
            return res.status(StatusCodes.NOT_FOUND).send(err)
           } 
            if(rows.length !== 0){
               return res.status(StatusCodes.CONFLICT).send("Ezzel a emaillal már létezik felhasználó!")
            }

        }   
    )
    //password hash
    const salt = bcrypt.genSaltSync(12)
    const hash = bcrypt.hashSync(password,salt)


    database.query('INSERT INTO user(fullname,email,password) VALUES(?,?,?);',
    [fullname,email,hash],
    (err)=>{
        if(err) return res.status(StatusCodes.IM_A_TEAPOT).send(err)
        res.status(StatusCodes.CREATED).send('Created...')
    }
    )
}

const login = async ( req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        return res.status(StatusCodes.BAD_REQUEST).send('Adja meg az email és a jelszót!')
    }
    database.query('SELECT * FROM user WHERE email = ?;',[email],(err,rows)=>{
        if(err) return res.status(StatusCodes.NO_CONTENT).send(err)
        if(rows.length===0) return res.status(StatusCodes.NOT_FOUND).send('Nincs regisztrálva ez az email')
        
        const isCorrenctPassword = bcrypt.compare(password,rows[0].password)
        if(! isCorrenctPassword)
            return res.status(StatusCodes.UNAUTHORIZED).send("Unauthorized")
        
        const token = jwt.sign({id: rows[0].id},process.env.JWT_SECRET,{
            expiresIn: process.env.JWT_LIFETIME
        })

        res.cookie('access token',token,{
            httpOnly: true
        }).status(StatusCodes.OK).send({isAdmin: rows[0].admin,password: rows[0].password})

       
    })



}

module.exports = {
    register,
    login
}