module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    fullname: {
      type: DataTypes.STRING(50),
      allowNull: false,
      required: true,
      unique: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      required: true,
      unique: true,
    },
    password: {
      type: DataTypes.STRING, //hashing miatt nem adom meg a mezo meretet
      allowNull: false,
      required: true,
    },
    currentWeight: {
      type: DataTypes.DOUBLE,
    },
    targetWeight: {
      type: DataTypes.DOUBLE,
    },
    currentCalorie: {
      type: DataTypes.INTEGER,
    },
    targetCalorie: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    admin: {
      type: DataTypes.TINYINT(1),
      default: 0,
      allowNull: false,
    },
    
  },{tableName:'user'});
  return User;
};
