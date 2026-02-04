const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/', eventController.getEvents);
router.get('/:id', eventController.getEventById);
router.post('/', eventController.createEvent);
router.post('/:id/register', eventController.registerForEvent);



module.exports = router;
