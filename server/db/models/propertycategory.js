'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PropertyCategory extends Model {
    static associate(models) {
      this.hasMany(Property, 'propertyCategoryId')
    }
  }
  PropertyCategory.init({
    title: {
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'PropertyCategory',
  });
  return PropertyCategory;
};