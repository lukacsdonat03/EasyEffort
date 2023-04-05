const DataTypes = require("sequelize").DataTypes;
const _calorie = require("./calorie");
const _comment = require("./comment");
const _user = require("./user");

function initModels(sequelize) {
  const calorie = _calorie(sequelize, DataTypes);
  const comment = _comment(sequelize, DataTypes);
  const user = _user(sequelize, DataTypes);


  return {
    calorie,
    comment,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
