const { User } = require('../models');

const userData = [
  {
    user_name: "Allen",
    is_server: false,
    password: "1234",
  },
  {
    user_name: "Emmalee",
    is_server: true,
    password: "5678",
  },
  {
    user_name: "Cheryl",
    is_server: true,
    password: "0000",
  },
  {
    user_name: "Andrew",
    is_server: false,
    password: "1111",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
