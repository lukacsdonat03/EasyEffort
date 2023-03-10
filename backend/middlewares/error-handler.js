const {StatusCodes} = require('http-status-codes')
const errorHanlerMiddleware = (err,req,res,next) =>{
    let customError = {
        //alap
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Szerver hiba, próbája újra később...'
    }

    if(err.name === 'ValidationError'){
        customError.msg = Object.values(err.errors)
            .map((val)=>val.message)
            .join(', ')
        customError.statusCode = 400
    }
    if(err.code && err.code === 11000){
        customError.msg = `Duplicate value entered for${Object.keys(
            err.keyValue
          )} field, please choose another value`
          customError.statusCode = 400
    }
    if(err.name = 'CastError'){
        customError.msg = `Nincs adat ezzel az id-vel ${err.value}`
        customError.statusCode = 404
    }
    return res.status(customError.statusCode).json({msg: customError.msg})
}

module.exports = errorHanlerMiddleware;