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
    repurposeData(orders);
    // const orderArray = orders[orderitems];
    // orderArray.forEach(order => console.log("order items " + order));
    res.render("order", {
      orders,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

const repurposeData = (orders) => {
  for (let i = 0; i < orders.length; i++) {
    if (!orderIdArr.includes(orders[i].order_id)) {
      orderIdArr.push(orders[i].order_id);
    }
  }
  orderIdArr.push(orders[orders.length.order_id]);
  console.log("Array " + orderIdArr);
  console.log(orders[orders.length.order_id]);
};

module.exports = router;
