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

<<<<<<< HEAD
MenuItems.belongsTo(OrderItems, {
  foreignKey: "order_id",
});
OrderItems.hasMany(MenuItems, {
  foreignKey: "order_id",
=======
OrderItems.hasMany(MenuItems, {
  foreignKey: "item",
});

MenuItems.belongsTo(OrderItems, {
  foreignKey: "item",
});

Orders.hasMany(OrderItems, {
  foreignKey: "order_id",
  onDelete: "CASCADE",
>>>>>>> e72d50a14ce32b70dcf8c4ea312a7719adc4406e
});

OrderItems.belongsTo(Orders, {
  foreignKey: "order_id",
<<<<<<< HEAD
});
Orders.hasMany(OrderItems, {
  foreignKey: "order_id",
  onDelete: "CASCADE",
=======
>>>>>>> e72d50a14ce32b70dcf8c4ea312a7719adc4406e
});


module.exports = {
  User,
  MenuItems,
  Orders,
  OrderItems
};
