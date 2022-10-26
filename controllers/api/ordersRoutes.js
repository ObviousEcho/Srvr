const router = require('express').Router();
const {MenuItems, OrderItems, Orders, User } = require('../../models')
module.exports = router;

router.get('/', async(req, res) => {
  const  orders = await Orders.findAll();
  res.status(200).json(orders);
});

router.get('/:id', async (req, res) => {

  try{
    const orderData = await Orders.findByPk(req.params.id);
    if(!orderData){
      res.status(404).json({ message: 'no order with id:'+req.params.id})
    }
    res.status(200).json(orderData);

  }catch (err){
    res.status(500).json(err)
  }
});

router.post('/', (req, res) => {

  Orders.create({
    //not sure how we get this in here from front end lol
    user_id: req.body.user_id,

  })
  .then((newOrder) =>{
    res.json(newOrder);
  })
  .catch((err)=>{
    res.json(err);
  })
});




router.delete('/:id', (req, res) => {
  Orders.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedOrder) => {
      res.json(deletedOrder);
    })
    .catch((err) => res.json(err));
});
