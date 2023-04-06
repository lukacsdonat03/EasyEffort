const jwt = require('jsonwebtoken')
const {StatusCodes} = require('http-status-codes')

function authenticateJWT(req, res, next) {
    const token = req.cookies.access_token;
    if(token.split(" ")[0] !== "Bearer")
        res.sendStatus(StatusCodes.UNAUTHORIZED)
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
          return res.sendStatus(StatusCodes.FORBIDDEN);
        }
  
        req.user = user;
        next();
      });
    } else {
      res.sendStatus(StatusCodes.UNAUTHORIZED);
    }
  }

  module.exports = authenticateJWT