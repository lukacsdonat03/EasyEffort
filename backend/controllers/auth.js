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

 const login =  (req, res) => {
    const { email, password } = req.body;
    database.query(
      "SELECT * FROM user WHERE email LIKE ?;",
      [email],
      (err, data) => {
        if (err) {
          return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error" });
        }
        if (data.length === 0) {
          return res.status(StatusCodes.NOT_FOUND).json({ message: "User not found." });
        }
  
        const isCorrectPassword = bcrypt.compareSync(password, data[0].password);
        console.log(isCorrectPassword);
        if (!isCorrectPassword)
          return res.status(StatusCodes.BAD_REQUEST).json({ message: "Wrong username or password." });
  
        const token = jwt.sign({ id: data[0].id }, process.env.JWT_SECRET);
        
        res
          .cookie("access_token", token, {
            httpOnly: true,
          })
          .status(200)
          .json({ isAdmin: data[0].admin });
      }
    );
  };

    


module.exports = {
    register,
    login
}