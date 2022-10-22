const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connections");

class MenuItems extends Model {}

MenuItems.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    item_name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    price: {
      type: Datatypes.DECIMAL,
      allowNull: false,
    },
    comments: {
      // verify text for datatype
      type: Datatypes.TEXT,
      allowNull: true,
    },
    image_path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "menuitems",
  }
);

module.exports = MenuItems;
