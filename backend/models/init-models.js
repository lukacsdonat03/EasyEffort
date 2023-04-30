var DataTypes = require("sequelize").DataTypes;
var _calorie = require("./calorie");
var _comment = require("./comment");
var _history = require("./history");
var _user = require("./user");

function initModels(sequelize) {
  var calorie = _calorie(sequelize, DataTypes);
  var comment = _comment(sequelize, DataTypes);
  var history = _history(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  history.belongsTo(user, { as: "user", foreignKey: "userId"});
  user.hasMany(history, { as: "histories", foreignKey: "userId"});

  comment.belongsTo(user,{as:"user",foreignKey: "userId"});
  user.hasMany(comment,{as:"comments",foreignKey:"userId"})
  return {
    calorie,
    comment,
    history,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
