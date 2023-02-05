const database = require('../database/dbConfig')
const {StatusCodes} = require('http-status-codes')
const {
    BadRequestError,
    UnauthenticatedError,
    NotFoundError,
  } = require("../errors");

const getComment = () =>{
    const {id} = req.params.id
    if(!id) throw new BadRequestError('Nincs id')
    database.query('SELECT * FROM comment WHERE id = ?',[id],(err,rows)=>{
        if(err){
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err)
        }
        if(rows.length === 0){
          throw new NotFoundError(`No comment with ${id} id`)
        }
        res.status(StatusCodes.OK).send(rows[0])
      })
    }

const allComment = ()=>{
    database.query('SELECT * FROM comment',(err,rows)=>{
        if(err) res.status(StatusCodes.NOT_FOUND).send(err)
        res.status(StatusCodes.OK).send(rows)
    })
}

const deleteComment = () =>{
    const {id} = req.params.id
    if(!id) throw new BadRequestError('Nincs id')
    database.query('DELETE FROM comment WHERE id = ?',[id],(err)=>{
        if(err) res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err)
        res.status(StatusCodes.OK).send('Sikeres törlés')
    })
}

const createComment = () =>{
    const {userId,comment} = req.body
    database.query('INSERT INTO comment VALUES(?,?)',[userId,comment],(err)=>{
        if(err) res.status(StatusCodes.NOT_FOUND).send(err)
        res.status(StatusCodes.CREATED).send('Created')
    })
} 

const updateComment = () =>{
    const {id,userId,comment} = req.body
    if(!comment) res.status(StatusCodes.BAD_REQUEST).send('Nincs hozzászólás')
    database.query('UPDATE comment SET userId = ? ,comment = ? WHERE ?'
    [userId,comment,id],
    (err)=>{
        if (err) {
            res.status(StatusCodes.NOT_FOUND).send(err);
          }
        res.status(StatusCodes.OK).send({comment: comment})
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