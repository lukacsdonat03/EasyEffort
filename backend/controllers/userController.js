const { StatusCodes } = require("http-status-codes");
const fitnessCalculator = require("fitness-calculator");
const sequelize = require("../database/databaseConfig");

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
  const { id } = req.params;
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
  const { id } = req.params;
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
  /*
        TODO:valami option cucc frontenden ahol a user ki tudja választani a listából, hogy melyik legyen beállítiva
        visszatérési érték:
            {
                balance: Number,
                mildWeightLoss: Number,
                mildWeightGain: Number,
                heavyWeightLoss: Number,
                heavyWeightGain: Number
            }
    */
  const { id } = req.params;
  const { gender, age, height, weight, activity } = req.body;
  const calorieNeeds = fitnessCalculator.calorieNeeds(
    gender,
    age,
    height,
    weight,
    activity
  );
  //TODO:eldönteni hogy weightLoss vagy weightGain kell
  if (!id) {
    return res.status(StatusCodes.NOT_FOUND).send("No id provided");
  }
  models.calorie
    .update(
      { targetCalorie: calorieNeeds.mildWeightLoss },
      { where: { id: id } }
    )
    .then(() => {
      return res.status(StatusCodes.OK).send("User updated successfully!");
    })
    .catch((err) => {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send("Error: " + err);
    });
};

module.exports = {
  deleteUser,
  getAllUser,
  getUser,
  setCurrentWeight,
  setTargetWeight,
  setCurrentCalorie,
  setTargetCalorie,
};
