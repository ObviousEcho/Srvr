const router = require("express").Router();
const { Orders, OrderItems } = require("../models");
const withAuth = require("../utils/auth");

router.get("/api/ordersroutes", withAuth, async (req, res) => {
  try {
    const orderData = await Orders.findAll({ include: [{ model: OrderItems}] });
    const orders = orderData.map((order) => order.get({ plain: true }));
    res.render("order", {
      orders,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;