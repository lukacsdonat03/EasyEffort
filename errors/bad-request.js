const {StatusCodes} = require('http-status-codes')
const CustinAPIError = require('./custom-api')

class BadRequestError extends CusotmAPIError{
    constructor(message){
        super(message);
        this.StatusCodes = StatusCodes.BAD_REQUEST;
    }
}

module.exports = BadRequestError;