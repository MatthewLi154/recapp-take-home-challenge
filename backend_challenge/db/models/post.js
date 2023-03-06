"use strict";
const { Model } = require("sequelize");
const coffee = require("./coffee");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.hasMany(models.Coffee, {
        foreignKey: "id",
      });
    }
  }
  Post.init(
    {
      id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      coffee: DataTypes.INTEGER,
      text: DataTypes.TEXT,
      rating: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
