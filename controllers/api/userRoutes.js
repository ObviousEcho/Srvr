const router = require('express').Router();
const {MenuItems, OrderItems, Orders, User } = require('../../models')
module.exports = router;

router.get('/', async(req, res) => {
  const  users = await User.findAll();
  res.status(200).json(users);
});

router.get('/:id', async (req, res) => {

  try{
    const userData = await User.findByPk(req.params.id);
    if(!userData){
      res.status(404).json({ message: 'no user with id:'+req.params.id})
    }
    res.status(200).json(userData);

  }catch (err){
    res.status(500).json(err)
  }
});

router.post('/', (req, res) => {

  User.create({
    user_name: req.body.user_name,
    is_server: req.body.is_server,
    password: req.body.password
  })
  .then((newUser) =>{
    res.json(newUser);
  })
  .catch((err)=>{
    res.json(err);
  })
});

router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedUser) => {
      res.json(deletedUser);
    })
    .catch((err) => res.json(err));
});
