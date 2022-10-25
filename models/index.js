const User = require("./User");
const MenuItems = require("./MenuItems");
const Orders = require("./Orders");
const OrderItems = require("./OrderItems");

// Users have many orders
User.hasMany(Orders, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
}),
  Orders.belongsTo(User, {
    foreignKey: "user_id",
  });

MenuItems.belongsTo(OrderItems, {
  foreignKey: "orderitems",
});
OrderItems.hasMany(MenuItems, {
  foreignKey: "orderitems",
});

OrderItems.belongsTo(Orders, {
  foreignKey: "orders",
});
Orders.hasMany(OrderItems, {
  foreignKey: "orders",
  onDelete: "CASCADE",
});

module.exports = {
  User,
  MenuItems,
  Orders,
  OrderItems
};
