"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate({ User, Property }) {
      this.belongsTo(User, { foreignKey: "id" });
      this.belongsTo(Property, { foreignKey: "propertyId" });
    }
  }
  Favorite.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      propertyId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Propertys",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Favorite",
    }
  );
  return Favorite;
};
