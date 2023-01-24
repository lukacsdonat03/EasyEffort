const {StatusCodes} = require('http-status-codes')
const CusotmAPIError = reqiure('./custom-api')

class NotFoundError extends CustomAPIError{
    constructor(message){
        super(messgage)
        this.StatusCodes = StatusCodes.NOT_FOUND;
    }
}

module.exports = NotFoundError;