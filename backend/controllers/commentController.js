const database = require('../database/dbConfig')
const {StatusCodes} = require('http-status-codes')
const {
    BadRequestError,
    NotFoundError,
  } = require("../errors");

const getComment =(req,res) =>{
    const {id} = req.params
    if(!id) throw new BadRequestError('Nincs id')
    database.query('SELECT * FROM comment WHERE id = ?',[id],(err,rows)=>{
        if(err){
         return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Kaka a palacsintában'+err)
        }
        if(rows.length === 0){  
         return res.sendStatus(StatusCodes.NO_CONTENT)
        }
        return res.status(StatusCodes.OK).send(rows[0])
      })
    }

const allComment = (req,res)=>{
    database.query('SELECT * FROM comment',(err,rows)=>{
        if(err) return  res.status(StatusCodes.NOT_FOUND).send(err)
        return res.status(StatusCodes.OK).send(rows)
    })
}

const deleteComment = (req,res) =>{
    const {id} = req.params
    if(!id) return res.sendStatus(StatusCodes.BAD_REQUEST)
    database.query('DELETE FROM comment WHERE id = ?',[id],(err)=>{
        if(err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err)
        }
        return res.status(StatusCodes.OK).send('Sikeres törlés')
    })
}

const createComment = (req,res) =>{
    const {userId,subject,message} = req.body
    database.query('INSERT INTO comment (userId,subject,message) VALUES(?,?,?)',[userId,subject,message],(err)=>{
        if(err){
           return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err)
        }
        return res.status(StatusCodes.CREATED).send('Created')
    })
} 

const updateComment = (req,res) =>{
    const {subject,message} = req.body
    const id = req.params.id

    database.query('UPDATE comment SET subject = ? , message = ?  WHERE id = ?',
    [message,id],
    (err)=>{
        if(err){
           return res.status(StatusCodes.NOT_FOUND).send(err)
        }
       return res.status(StatusCodes.OK).send("Updated sucessfully")
    }
    )
} 


module.exports ={
    getComment,
    allComment,
    createComment,
    updateComment,
    deleteComment
}