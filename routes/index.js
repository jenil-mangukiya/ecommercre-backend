var express = require('express');


var router = express.Router();
const User = require('../model/user.model'); // Import the User model
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// New routes for backend functionalities
router.post('/register', async function(req, res) {
  try {
    const { firstName, lastName, email, password, number } = req.body;
    const newUser = new User({ firstName, lastName, email, password, number });
    await newUser.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(400).send('Error registering user: ' + error.message);
  }
});

router.post('/login', function(req, res) {
  // Handle user login
});

router.get('/products', function(req, res) {
  // Handle fetching products
});

router.post('/products', function(req, res) {
  // Handle adding a new product
});

router.put('/products/:id', function(req, res) {
  // Handle updating a product
});

router.delete('/products/:id', function(req, res) {
  // Handle deleting a product
});



module.exports = router;
