const router = require('express').Router();
const {MenuItems, OrderItems, Orders, User } = require('../../models')
module.exports = router;

router.get('/', async(req, res) => {
  const  menuItems = await MenuItems.findAll();
  res.status(200).json(menuItems);
});

router.get('/:id', async (req, res) => {

  try{
    const menuData = await MenuItems.findByPk(req.params.id);
    if(!menuData){
      res.status(404).json({ message: 'no Menu Item with id:'+req.params.id})
    }
    res.status(200).json(menuData);

  }catch (err){
    res.status(500).json(err)
  }
});

router.post('/', (req, res) => {

  MenuItems.create({
    item_name: req.body.item_name,
    price: req.body.price,
    image_path: req.body.image_path
  })
  .then((newMenuItem) =>{
    res.status(200).json(newMenuItem);
  })
  .catch((err)=>{
    res.json(err);
  })
});

router.delete('/:id', (req, res) => {
  MenuItems.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedMenuItem) => {
      res.json(deletedMenuItem);
    })
    .catch((err) => res.json(err));
});
