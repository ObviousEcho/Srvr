const { Model, Datatypes } = require("sequelize");
const { Orders } = require(".");
const sequelize = require("../config/connections");

class Orders extends Model {}

Orders.init(

);


module.exports = Orders;
