
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const authMiddleware = require('../middleware/auth');

router.get('/', eventController.getEvents);
router.get('/:id', eventController.getEventById);
router.post('/', authMiddleware, eventController.createEvent);
router.post('/:id/register', authMiddleware, eventController.registerForEvent);
router.put('/:id', authMiddleware, eventController.updateEvent);
router.delete('/:id', authMiddleware, eventController.deleteEvent);
router.delete('/:id/register', authMiddleware, eventController.unregisterEvent);
router.get('/:id/registrations', eventController.showRegistrations);
router.get('/:id/available', eventController.showAvailability);


module.exports = router;
