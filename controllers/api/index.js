const router = require('express').Router();
const userRoutes = require('./userRoutes');
const menuItemsRoutes = require('./menuItemsRoutes');
const ordersRoutes = require('./ordersRoutes');
const orderItemsRoutes = require('./orderItemsRoutes');

router.use('/users', userRoutes);
router.use('/menuitems', menuItemsRoutes)
router.use('/ordersroutes', ordersRoutes)
router.use('/orderitems', orderItemsRoutes)

module.exports = router;