'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(Favorite, {foreignKey: 'userId'})
    }
  }
  User.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    lastName: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.TEXT
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    allowNull: false,
    isAdmin: {
      type: DataTypes.BOOLEAN
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};