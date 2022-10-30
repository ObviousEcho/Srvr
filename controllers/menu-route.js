const router = require("express").Router();
const { MenuItems } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const menuData = await MenuItems.findAll();
    const menus = menuData.map((menu) => menu.get({ plain: true }));
    res.render("menu", {
      menus,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
