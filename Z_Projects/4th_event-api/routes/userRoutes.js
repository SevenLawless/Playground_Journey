const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST /users/register - Register new user
router.post('/register', userController.register);

// POST /users/login - Login user
router.post('/login', userController.login);


module.exports = router;