const { OrderItems } = require('../models');

const orderItemData = [
    {
        item: 1,
        mod: 'Test',
        customer_name: 'Andrew',
        order_id: 1,
    },
    {
        item: 2,
        mod: '',
        customer_name: 'Cherly',
        order_id: 2,
    },
    {
        item: 3,
        mod: 'Testing',
        customer_name: 'Allen',
        order_id: 2,
    },
];

const seedItems = () => OrderItems.bulkCreate(orderItemData);

module.exports = seedItems;