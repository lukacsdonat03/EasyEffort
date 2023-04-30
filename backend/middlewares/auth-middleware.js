const jwt = require('jsonwebtoken')
const {StatusCodes} = require('http-status-codes')

const authorization = (req,res,next) =>{
 const token = req.cookies.access_token
 if(!token) return res.status(StatusCodes.UNAUTHORIZED).send('UNAUTHORIZED...')
 jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
    if(err) return res.status(StatusCodes.FORBIDDEN)
    req.user = decoded
    next()
 })
}



  module.exports = authorization