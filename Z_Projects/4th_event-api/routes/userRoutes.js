const express = require('express');
const rateLimit = require('express-rate-limit');
const router = express.Router();
const userController = require('../controllers/userController');


// Strict rate limiter for login - 5 attempts per 15 minutes
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: {
        error: "Too many login attempts, thank uuuu come again."
    },
    skipSuccessfulRequests: true,
});


// POST /users/register - Register new user
router.post('/register', userController.register);

// POST /users/login - Login user
router.post('/login', loginLimiter, userController.login);


module.exports = router;