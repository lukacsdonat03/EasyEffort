const { StatusCodes } = require("http-status-codes");
const fitnessCalculator = require("fitness-calculator");
const sequelize = require("../database/databaseConfig");
const bcrypt = require('bcrypt')
const initModels = require("../models/init-models");

const models = initModels(sequelize);

const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(StatusCodes.NOT_FOUND).send("No id provided");
  }
  models.user
    .destroy({ where: { id: id } })
    .then(() => {
      return res.status(StatusCodes.NO_CONTENT).send("Deleted successfully");
    })
    .catch((err) => {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
    });
};

const getAllUser = async (req, res) => {
  models.user.findAll().then((users) => {
    return res.status(StatusCodes.OK).send(users);
  });
};

const getUser = async (req, res) => {
  const { id } = req.user;
  if (!id) {
    return res.status(StatusCodes.NOT_FOUND).send("No id provided");
  }
  models.user
    .findOne({ where: { id: id } })
    .then((user) => {
      return res.status(StatusCodes.OK).send(user);
    })
    .catch((err) => {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
    });
};

const setCurrentWeight = async (req, res) => {
  const { id } = req.user;
  const { currentWeight } = req.body;

  if (!id) {
    return res.status(StatusCodes.NOT_FOUND).send("No id provided");
  }
  if (!currentWeight) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .send("There is no weight provided");
  }
  if (currentWeight < 1) {
    return res.status(StatusCodes.BAD_REQUEST).send("Invalid weight!");
  }

  models.user
    .update({ currentWeight: currentWeight }, { where: { id: id } })
    .then(() => {
      return res
        .status(StatusCodes.OK)
        .send(`Weight updated to ${currentWeight} successfully.`);
    })
    .catch((err) => {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send("Error: " + err);
    });
};

const setTargetWeight = async (req, res) => {
  const { id } = req.params;
  const { targetWeight } = req.body;

  if (!id) {
    return res.status(StatusCodes.NOT_FOUND).send("No id provided");
  }
  if (!targetWeight) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .send("There is no weight provided");
  }
  if (targetWeight < 50) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send("Weight must be at least 50!");
  }

  models.user
    .update({ targetWeight: targetWeight }, { where: { id: id } })
    .then(() => {
      return res
        .status(StatusCodes.OK)
        .send(`Weight updated to ${targetWeight} successfully.`);
    })
    .catch((err) => {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send("Error: " + err);
    });
};

const setCurrentCalorie = async (req, res) => {
  const { id } = req.params;
  const { totalCalorie } = req.body;
  if (!id || !totalCalorie) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send("Id and calorie must be provided");
  }
  models.user
    .update({ currentCalorie: totalCalorie }, { where: { id: id } })
    .then(() => {
      return res.status(StatusCodes.OK).send("User updated successfully!");
    })
    .catch((err) => {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send("Error: " + err);
    });
};

const setTargetCalorie = async (req, res) => {
  const token = req.user
  const { gender, age, height, weight, activity,goal } = req.body;
  const calorieNeeds = fitnessCalculator.calorieNeeds(
    gender,
    age,
    height,
    weight,
    activity
  );
  if (!token.id) {
    return res.status(StatusCodes.NOT_FOUND).send("No id provided");
  }
  let result = 0
  switch (goal) {
    case 'balance':
      result = calorieNeeds.balance
      break;
    case 'mildWeightLoss':
      result = calorieNeeds.mildWeightLoss
      break
    case 'mildWeightGain':
      result = calorieNeeds.mildWeightGain
      break
      case 'heavyWeightLoss':
      result = calorieNeeds.heavyWeightLoss
      break
    case 'heavyWeightGain':
      result = calorieNeeds.heavyWeightGain
      break
    default:
      result = calorieNeeds.balance
      break;
  }
  models.user
    .update(
      { targetCalorie: result },
      { where: { id: token.id } }
    )
    .then(() => {
      return res.status(StatusCodes.OK).send('User updated successfully');
    })
    .catch((err) => {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send(err);
    });
};

const updateAdmin = (req,res)=>{
  const {id,admin} = req.body
  models.user.update({admin:admin},{where:{id:id}})
    .then((updatedRows)=>{
      if(updatedRows[0] === 1) return res.status(StatusCodes.OK).send('User updated successfully')
      if(updatedRows[0] === 0) return res.sendStatus(StatusCodes.NO_CONTENT)
      }).catch((err)=>{
      return res.send(StatusCodes.INTERNAL_SERVER_ERROR,err)
    })
}

const updatePassword = (req,res)=>{
  const {id, newPassword} = req.body
  if(!id || !newPassword) return res.status(StatusCodes.BAD_REQUEST).send("All creadentials are required!")
  const salt = bcrypt.genSalt(12)
  const hash = bcrypt.hashSync(newPassword,salt)
  console.log(typeof hash);
  models.user.update({password:hash},{where:{id:id}, individualHooks: true})
    .then((updatedRows)=>{
      if(updatedRows[0] === 0) return res.sendStatus(StatusCodes.NO_CONTENT)
      if(updatedRows[0] === 1) return res.status(StatusCodes.OK).send('User updated successfully...')
    }).catch((err)=>{
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err)
    })
}

module.exports = {
  deleteUser,
  getAllUser,
  getUser,
  setCurrentWeight,
  setTargetWeight,
  setCurrentCalorie,
  setTargetCalorie,
  updateAdmin,
  updatePassword
};
