const { OrderItems } = require('../models');

const orderItemData = [
    {
        mod: 'Test',
        customer_name: 'Andrew'
    },
    {
        mod: '',
        customer_name: 'Cherly',
    },
    {
        mod: 'Testing',
        customer_name: 'Allen'
    },
];

const seedItems = () => OrderItems.bulkCreate(orderItemData);

module.exports = seedItems;