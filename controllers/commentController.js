const database = require('../database/dbConfig')
const {StatusCodes} = require('http-status-codes')
const {
    BadRequestError,
    NotFoundError,
  } = require("../errors");

const getComment = async (req,res) =>{
    const {id} = req.params
    if(!id) throw new BadRequestError('Nincs id')
    database.query('SELECT * FROM comment WHERE id = ?',[id],(err,rows)=>{
        if(err){
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Kaka a palacsintában'+err)
        }
        if(rows.length === 0){  
        throw new NotFoundError(`No comment with ${id} id`)
        }
        res.status(StatusCodes.OK).send(rows[0])
      })
    }

const allComment = async (req,res)=>{
    database.query('SELECT * FROM comment',(err,rows)=>{
        if(err) res.status(StatusCodes.NOT_FOUND).send(err)
        res.status(StatusCodes.OK).send(rows)
    })
}

const deleteComment = async (req,res) =>{
    const {id} = req.params
    if(!id) throw new BadRequestError('Nincs id')
    database.query('DELETE FROM comment WHERE id = ?',[id],(err)=>{
        if(err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err)
        }
        res.status(StatusCodes.OK).send('Sikeres törlés')
    })
}

const createComment = async (req,res) =>{
    const {userId,comment} = req.body
    database.query('INSERT INTO comment (userId,message) VALUES(?,?)',[userId,comment],(err)=>{
        if(err){
            res.status(StatusCodes.NOT_FOUND).send(err)
        }
        res.status(StatusCodes.CREATED).send('Created')
    })
} 

const updateComment =async (req,res) =>{
    const message = req.body.message
    const id = req.params.id

    database.query('UPDATE comment SET message = ?  WHERE id = ?',
    [message,id],
    (err)=>{
        if(err){
            res.status(StatusCodes.NOT_FOUND).send(err)
        }
        res.status(StatusCodes.OK).send("Updated sucessfully")
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