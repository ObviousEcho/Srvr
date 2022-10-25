const router = require('express').Router();
const {MenuItems, OrderItems, Orders, User } = require('../../models')
module.exports = router;

router.get('/', async(req, res) => {
  const  orderItems = await OrderItems.findAll();
  res.status(200).json(orderItems);
});

router.get('/:id', async (req, res) => {

  try{
    const orderItemData = await OrderItems.findByPk(req.params.id);
    if(!orderItemData){
      res.status(404).json({ message: 'no order Item with id:'+req.params.id})
    }
    res.status(200).json(orderItemData);

  }catch (err){
    res.status(500).json(err)
  }
});

router.post('/', (req, res) => {

  OrderItems.create({
    item: req.body.item,
    mod: req.body.mod,
    image_path: req.body.image_path,
    //how do we get the correct order_id in here? not sure if next line is right or if we need something fancier
    order_id: req.body.order_id
  })
  .then((newOrderItem) =>{
    res.json(newOrderItem);
  })
  .catch((err)=>{
    res.json(err);
  })
});


router.put('/:id', (req, res) => {

  OrderItems.update(
    {
      item: req.body.item,
      mod: req.body.item
    },
    {
      where:{
        id: req.params.id,
      }
    }
  )
  .then((updatedOrderItem) => {
    res.json(updatedOrderItem);
  })
  .catch((err) => {
    console.log(err);
    res.json(err);
  });
});

router.delete('/:id', (req, res) => {
  OrderItems.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedOrderItem) => {
      res.json(deletedOrderItem);
    })
    .catch((err) => res.json(err));
});
