const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('calorie', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    carbohydrate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    protein: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    fat: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    totalCalorie: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    event_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'calorie',
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
        name: "FK_calorieUser",
        using: "BTREE",
        fields: [
          { name: "userId" },
        ]
      },
      {
        name: "event_timestamp",
        using: "BTREE",
        fields: [
          { name: "event_time" },
        ]
      },
    ]
  });
};
