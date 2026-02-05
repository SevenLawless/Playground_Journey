const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/', eventController.getEvents);
router.get('/:id', eventController.getEventById);
router.post('/', eventController.createEvent);
router.post('/:id/register', eventController.registerForEvent);
router.put('/:id', eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);
router.delete('/:id/register', eventController.unregisterEvent);
router.get('/:id/registrations', eventController.showRegistrations);
router.get('/:id/available', eventController.showAvailability);


module.exports = router;
