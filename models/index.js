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

OrderItems.hasMany(MenuItems, {
  foreignKey: "item",
});

MenuItems.belongsTo(OrderItems, {
  foreignKey: "item",
});

Orders.hasMany(OrderItems, {
  foreignKey: "order_id",
  onDelete: "CASCADE",
});

OrderItems.belongsTo(Orders, {
  foreignKey: "order_id",
});


module.exports = {
  User,
  MenuItems,
  Orders,
  OrderItems
};
