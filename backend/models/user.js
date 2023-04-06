const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fullname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "email"
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    currentWeight: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    targetWeight: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    currentCalorie: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    targetCalorie: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:0
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
};
