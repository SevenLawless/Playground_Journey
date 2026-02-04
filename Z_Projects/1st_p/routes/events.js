const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Define all routes
router.get('/', eventController.getEvents);
router.get('/:id', eventController.getEvent);
router.post('/', eventController.createEvent);
router.post('/:id/register', eventController.registerForEvent);

module.exports = router;