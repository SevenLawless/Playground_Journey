const storage = require('../data/storage');

exports.getEvents = (req, res) => {
    const events = storage.getAllEvents();

    res.json({events: events, total: events.length});
};

exports.getEventById = (req, res) => {
    const id = req.params.id;
    const event = storage.getEventById(id);

    if (!event) {
        return res.status(404).json({error: "Cant find it"});
    }

    res.json({event: event});
};


exports.createEvent = (req, res) => {
    const {title, date, capacity} = req.body;

    if (!title || !date || !capacity) {
        return res.status(400).json({error: "Cant do that"});
    }

    const newEvent = storage.createEvent({title, date, capacity});

    res.status(201).json({event: newEvent});
};


exports.registerForEvent = (req, res) => {
    const id = req.params.id;
    const {userName} = req.body;

    const event = storage.getEventById(id);

    if (!event) {
        return res.status(404).json({error: "Event not found"});
    }

    if (event.registrations.includes(userName)) {
        return res.status(400).json({error: "Already registered"})
    }

    if (event.registrations.length >= event.capacity) {
        return res.status(400).json({error: "Event Full"})
    }


    event.registrations.push(userName);

    res.status(200).json({event: event});

}