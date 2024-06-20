'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Property.init({
    propertyCategoryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    title: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    photo: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Property',
  });
  return Property;
};