const jwt = require('jsonwebtoken')
const {StatusCodes} = require('http-status-codes')

const authorization = (req,res,next) =>{
  const token = req.cookies.access_token
  if(! token){
    return res.status(StatusCodes.UNAUTHORIZED).send('Unauthorized...')
  } 
  try {
    const payload = jwt.verify(token,process.env.JWT_SECRET)
    req.user = {id:id}
   next() 
  } catch (error) {
    if(!token) return res.status(StatusCodes.UNAUTHORIZED).send('Access token error',error)
  }
}



  module.exports = authorization