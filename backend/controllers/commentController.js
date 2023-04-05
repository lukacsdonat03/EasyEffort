const sequelize = require('../database/databaseConfig')
const {StatusCodes} = require('http-status-codes')
const initModels = require('../models/init-models')

const models = initModels(sequelize)

const Comment = models.comment

const getComment = async (req,res) =>{
    const {id} = req.params
    if(!id) return res.status(StatusCodes.BAD_REQUEST).send('ID must be provided!');
    Comment.findOne({where:{id:id}})
        .then((comment)=>{
            if(!comment){
                return res.sendStatus(StatusCodes.NO_CONTENT)
            }
            return res.status(StatusCodes.OK).send(comment)
        })
        .catch((err)=>{
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err)
        })
    }

const allComment = async (req,res)=>{
    try {
        const allUser = await Comment.findAll()
        return res.status(StatusCodes.OK).send(allUser)
    } catch (error) {
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

const deleteComment = async (req,res) =>{
    const {id} = req.params
    if(!id) return res.sendStatus(StatusCodes.BAD_REQUEST)
    Comment.destroy({where:{id:id},force:true})
        .then((affectedRows)=>{
            if(affectedRows === 0){
                return res.sendStatus(StatusCodes.NO_CONTENT)
            }
            return res.status(StatusCodes.OK).send('DELETE was successful')
        }).catch((err)=>{
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('ERROR: ',err)
        })
}

const createComment = async (req,res) =>{
    const {userId,subject,message} = req.body
    if(!userId || !subject || !message){
        return res.status(StatusCodes.BAD_REQUEST).send('Credentials must be provided!')
    }
    try {
        const newComment = await Comment.create({id:userId,subject:subject,message:message})
        return res.status(StatusCodes.CREATED).send(newComment)
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error)
    }
} 



module.exports ={
    getComment,
    allComment,
    createComment,
    deleteComment
}