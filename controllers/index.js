const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require( './home-route.js');
const menuRoutes = require('./menu-route.js');

router.use('/', homeRoutes);
router.use('/menu', menuRoutes);
router.use('/api', apiRoutes);

module.exports = router;
