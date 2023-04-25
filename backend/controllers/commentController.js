const sequelize = require("../database/databaseConfig");
const { StatusCodes } = require("http-status-codes");
const initModels = require("../models/init-models");
const { Sequelize } = require("sequelize");

const models = initModels(sequelize);

const Comment = models.comment;

const getComment = async (req, res) => {
  const { id } = req.params;
  if (!id)
    return res.status(StatusCodes.BAD_REQUEST).send("ID must be provided!");
  Comment.findOne({ where: { id: id } })
    .then((comment) => {
      if (!comment) {
        return res.sendStatus(StatusCodes.NO_CONTENT);
      }
      return res.status(StatusCodes.OK).send(comment);
    })
    .catch((err) => {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
    });
};

const allComment = async (req, res) => {
    try {
      const allUser = await Comment.findAll();
      return res.status(StatusCodes.OK).send(allUser);
    } catch (error) {
      return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
  
};
const pendingComment = async (req, res) => {
  try {
    const allUser = await Comment.findAll({where:{state:null}});
    return res.status(StatusCodes.OK).send(allUser);
  } catch (error) {
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }

};

const rejectedComment = async (req, res) => {
  try {
    const allUser = await Comment.findAll({where:{state:false}});
    return res.status(StatusCodes.OK).send(allUser);
  } catch (error) {
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }

};

const aprovedComment = async (req, res) => {
  try {
    const allUser = await Comment.findAll({where:{state:true}});
    return res.status(StatusCodes.OK).send(allUser);
  } catch (error) {
    return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }

};

const deleteComment = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.sendStatus(StatusCodes.BAD_REQUEST);
  Comment.destroy({ where: { id: id }, force: true })
    .then((affectedRows) => {
      if (affectedRows === 0) {
        return res.sendStatus(StatusCodes.NO_CONTENT);
      }
      return res.status(StatusCodes.OK).send("DELETE was successful");
    })
    .catch((err) => {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("ERROR: ", err);
    });
};

const createComment = async (req, res) => {
  const { subject, message } = req.body;
  const token = req.user
  if (!token.id || !subject || !message) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send("Credentials must be provided!");
  }
  try {
    const newComment = await Comment.create({
      userId: token.id,
      subject: subject,
      message: message,
    });
    return res.status(StatusCodes.CREATED).send(newComment);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
  }
};

const updateComment = (req,res) =>{
  const {state} = req.body
  const {id} = req.params 
  if(state === null) return res.status(StatusCodes.BAD_REQUEST).send('Please provide the state of the message!')
  Comment.update({state:state},{where:{id:id}})
  .then((updatedRows)=>{
    if(updatedRows[0] === 0) return res.sendStatus(StatusCodes.NO_CONTENT)
    if(updatedRows[0] === 1) return res.status(StatusCodes.OK).send('Comment updated successfully...')
  }).catch((err)=>{
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err)
  })
}


module.exports = {
  getComment,
  allComment,
  createComment,
  deleteComment,
  aprovedComment,
  rejectedComment,
  pendingComment,
  updateComment
};
