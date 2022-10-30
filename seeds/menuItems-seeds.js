const { MenuItems } = require("../models");

const menuItmData = [
  {
    item_name: "Cupcakes",
    price: "6.99",
    image_path: "",
  },
  {
    item_name: "Croissant",
    price: "12.99",
    image_path: "/images/Croissant.PNG ",
  },
  {
    item_name: "Cafe Au Lait",
    price: "34.99",
    image_path: "",
  },
  {
    item_name: "Doughnut",
    price: "4.99",
    image_path: "",
  },
];

const seedMenu = () => MenuItems.bulkCreate(menuItmData);

module.exports = seedMenu;
