"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PropertyCategory extends Model {
    static associate({ Property }) {
      this.hasMany(Property, { foreignKey: "propertyCategoryId" });
    }
  }
  PropertyCategory.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "PropertyCategory",
    }
  );
  return PropertyCategory;
};
