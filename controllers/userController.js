const {StatusCodes} = require('http-status-codes')
const {BadRequestError,UnauthenticatedError, NotFoundError} = require('../errors')
const database = require('../database/dbConfig')

const register = async (req,res)=>{
    // jwt token

    const fullname = req.body.fullname
    const email = req.body.email
    const password = req.body.password
    const admin = req.body.admin
    database.query('SELECT * FROM user WHERE email LIKE ?',
        [email],
        (err,rows)=>{
           if(err){
            throw new NotFoundError(err)
           } 
            if(rows.length !== 0){
                console.log('Ezzel az email címmel már létezik felhasználó!');
                //database.release()
                throw new Error('Ezzel az email címmel már létezik felhasználó!')
            } 
        }   
    )
    
    database.query('INSERT INTO user(fullname,email,password,admin) VALUES(?,?,?,?);',
    [fullname,email,password,admin],
    (err)=>{
        if(err) res.status(StatusCodes.IM_A_TEAPOT).send(err)
        res.status(StatusCodes.CREATED).send('Created...')
    }
    )
}

const login = async ( req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        throw new BadRequestError('Adja meg az email és a jelszót')
    }
    database.query('SELECT * FROM user WHERE email LIKE ? AND password LIKE ?;',[email,password],(err,rows)=>{
        if(err) res.status(StatusCodes.NO_CONTENT).send(err)
        if(rows.length === 0) res.status(StatusCodes.NOT_FOUND).send('Not Found')
        res.status(StatusCodes.OK).send(rows[0])
    })
    //jwt token létrehozása


}

module.exports = {
    register,
    login
}