"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    static associate({ PropertyCategory, Favorite }) {
      this.belongsTo(PropertyCategory, { foreignKey: "propertyCategoryId" });
      this.hasOne(Favorite, { foreignKey: "propertyId" });
    }
  }
  Property.init(
    {
      propertyCategoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      photo: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Property",
    }
  );
  return Property;
};
