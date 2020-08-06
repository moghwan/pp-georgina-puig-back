const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../model/User');

// INDEX - show all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

// INDEX - users by name
router.get('/name/:name', async (req, res) => {
  try {
    const user = await User.find({ name: req.params.name });
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

// INDEX - users by hobby
router.get('/hobby/:hobby', async (req, res) => {
  try {
    const user = await User.find({ hobby: req.params.hobby });
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

// INDEX - users by name and hobby
router.get('/name/:name/hobby/:hobby', async (req, res) => {
  try {
    const user = await User.find({ name: req.params.name, hobby: req.params.hobby });
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

// NEW - show form to create new user
router.get('/new', (req, res) => {
  res.send('new user route');
});

// CREATE - add new user to db
router.post('/', async (req, res) => {
  // hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: hashPassword,
    age: req.body.age,
    gender: req.body.gender,
    hobby: req.body.hobby
  });

  try {
    const saveUser = await user.save();
    res.json(saveUser);
  } catch (err) {
    res.json({ message: err });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const removeUser = await User.remove({ _id: req.params.id });
    res.json(removeUser);
  } catch (err) {
    res.json({ message: err });
  }
});


module.exports = router;