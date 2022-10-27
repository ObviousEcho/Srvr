const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class OrderItems extends Model {}

OrderItems.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    item: {
      type: DataTypes.INTEGER,
      references: {
        model: "menuitems",
        key: "id",
      },
    },
    mod: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    customer_name: {
      type: DataTypes.STRING,
      alloNull: false,
    },
    order_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "orders",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "orderitems",
  }
);

module.exports = OrderItems;
