"use strict";
const { Model } = require("sequelize");
const { toLocaleString } = require(process.cwd() + `/helpers/datetime`);
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Product, { foreignKey: "category_id" }),
        Category.hasMany(models.Voucher, { foreignKey: "category_id" });
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      deletedAt: {
        type: DataTypes.DATE,
        get: function () {
          if (this.getDataValue("deletedAt")) {
            return toLocaleString(this.getDataValue("deletedAt"));
          }
          return null;
        },
      },
      createdAt: {
        type: DataTypes.DATE,
        get: function () {
          if (this.getDataValue("createdAt")) {
            return toLocaleString(this.getDataValue("createdAt"));
          }
          return null;
        },
      },
      updatedAt: {
        type: DataTypes.DATE,
        get: function () {
          if (this.getDataValue("updatedAt")) {
            return toLocaleString(this.getDataValue("updatedAt"));
          }
          return null;
        },
      },
    },
    {
      sequelize,
      modelName: "Category",
    },
  );
  return Category;
};
