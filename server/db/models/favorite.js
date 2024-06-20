'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate({User, Property}) {
      this.belongsTo(User, {foreignKey: 'id'})
      this.hasOne(Property, {foreignKey: 'id'})
    }
  }
  Favorite.init({
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references:{
        model:'Users',
        key: 'id',
      }
      
    },
    propertyId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Propertys',
        key: 'id'
      }
      
    },
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};