const { OrderItems } = require('../models');

const orderItemData = [
    {
        mod: 'Test'
    },
    {
        mod: ''
    },
    {
        mod: 'Testing'
    },
];

const seedItems = () => OrderItems.bulkCreate(orderItemData);

module.exports = seedItems;