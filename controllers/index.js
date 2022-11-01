const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require( './home-route.js');
const menuRoutes = require('./menu-route.js');
const orderRoutes = require('./order-route.js');

router.use('/', homeRoutes);
router.use('/menu', menuRoutes);
router.use('/orders', orderRoutes);
router.use('/api', apiRoutes);

module.exports = router;
