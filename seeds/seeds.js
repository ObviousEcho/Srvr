const seedUser = require('./user-seeds');
const seedMenu = require('./menuItems-seeds');
const seedOrders = require('./order-seeds');
const seedItems = require('./orderItems-seeds');

const sequelize = require('../config/connections');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUser();
    console.log('\n----- USERS SEEDED -----\n');
    await seedMenu();
    console.log('\n----- BLOG SEEDED -----\n');
    await seedOrders();
    console.log('\n----- COMMENTS SEEDED -----\n');
    await seedItems();
    console.log('\n----- ITEMS SEEDED -----\n');


    process.exit(0);
};

seedAll();