const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db_prog");
class PostLike extends Model {}

PostLike.init(
  {
    liketype: DataTypes.INTEGER,
  },
  {
    sequelize,
    tableName: "Postlike",
    timestamps: false,
  }
);

module.exports = PostLike;
