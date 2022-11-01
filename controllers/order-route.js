const router = require("express").Router();
const { Orders, OrderItems, MenuItems } = require("../models");
const withAuth = require("../utils/auth");
const orderIdArr = [];


router.get("/", async (req, res) => {
  try {
    const orderData = await OrderItems.findAll({
      include: [{ model: Orders }, { model: MenuItems }],
    });
    const orders = orderData.map((order) => order.get({ plain: true }));
    console.log("orders " + orders[1].order_id);
    const ordersRemade = await repurposeData(orders);
    // const orderArray = orders[orderitems];
    // orderArray.forEach(order => console.log("order items " + order));

    console.log(ordersRemade);
    res.render("order", {
      ordersRemade,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

const repurposeData = (orders) => {
  var finalOrderArray = [];

  for (let i = 0; i < orders.length; i++) {
    if (!orderIdArr.includes(orders[i].order_id)) {
      orderIdArr.push(orders[i].order_id);
    }
  }
  orderIdArr.forEach(element => {
    var tempOrder = [];

    for (let x = 0; x < orders.length; x++) {
      if (orders[x].order_id == element) {
        tempOrder.push(switchMenuItem(orders[x].item));
      }
    }
    finalOrderArray.push({ order_id: element, items: tempOrder });

  });
  console.log("Array " + orderIdArr);
  console.log(orders[orders.length.order_id]);

  return finalOrderArray;

};

function switchMenuItem(menuItemId) {
  var itemName;
  switch (menuItemId) {
    case 1:
      itemName = " Cupcakes";
      break;
    case 2:
      itemName = " Croissant";
      break;
    case 3:
      itemName = " Cafe Au Lait";
      break;
    case 4:
      itemName = " Doughnut";
      break;
    default:
      itemName = " error: item doesn't exist";
      break;
  }
  return itemName;
}

module.exports = router;

