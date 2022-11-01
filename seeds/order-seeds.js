const { Orders } = require("../models");

const orderData = [
  {
    user_id: 1,
  },
  {
    user_id: 2,
  },
  {
    user_id: 3,
  },
  {
    user_id: 4,
  },
 
];

const seedOrder = () => Orders.bulkCreate(orderData);

module.exports = seedOrder;
