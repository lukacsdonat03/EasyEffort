const { StatusCodes } = require("http-status-codes");
const sequelize = require("../database/databaseConfig");
const initModels = require("../models/init-models");
const jwt = require('jsonwebtoken');
const { Sequelize } = require("sequelize");
const models = initModels(sequelize);

const Calorie = models.calorie;

const deleteItem = async (req, res) => {
  const { id } = req.params;
  if (!id)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send("There is no product with this id!");
  Calorie.destroy({ where: { id: id }, force: true })
    .then(() => {
      return res.status(StatusCodes.NO_CONTENT).send("Deleted successfully");
    })
    .catch((err) => {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
    });
};

const createItem = async (req, res) => {
  const product = { ...req.body };
  const token = req.user
  models.user.update({currentCalorie: Sequelize.literal(`currentCalorie + ${product.totalCalorie * product.amount}`)},{where:{id:token.id}})
  Calorie.create({
    name: product.name,
    amount: product.amount,
    carbohydrate: product.carbohydrate * product.amount,
    protein: product.protein * product.amount,
    fat: product.fat * product.amount,
    totalCalorie: product.totalCalorie * product.amount,
    userId: token.id,
  }).then((result)=>{
    return res.status(StatusCodes.OK).send(result)
  }).catch((err)=>{return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err)})
};

const updateItem = async (req, res) => {
  const product = { ...req.body };
  const {id} = req.params 
  try {
    const newProduct = await Calorie.update({
      name: product.name,
      amount: product.amount,
      carbohydrate: product.carbohydrate * amount,
      protein: product.protein * product.amount,
      fat: product.fat * product.amount,
      totalCalorie: product.totalCalorie * product.amount,
      userId: product.userId,
    },{where:{id:id}});
    return res.status(StatusCodes.CREATED).send(newProduct)
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error)
  }
};

const allItem = async (req, res) => {
  const token = req.user
  try {
    const products = await Calorie.findAll({where: {userId:token.id}})
    if(!products){
      return res.sendStatus(StatusCodes.NO_CONTENT)
    }
    return res.status(StatusCodes.OK).send(products)
  } catch (error) {
    return res.send(StatusCodes.INTERNAL_SERVER_ERROR,error)
  }
};

const getItem = async (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(StatusCodes.BAD_REQUEST).send('ID must be provided!')
  try {
    const product = await Calorie.findOne({where:{id:id}})
    if(!product) return res.sendStatus(StatusCodes.NO_CONTENT)
    return res.status(StatusCodes.OK).send(product)
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error)
  }
  
};


module.exports = {
  getItem,
  allItem,
  updateItem,
  createItem,
  deleteItem,
};
