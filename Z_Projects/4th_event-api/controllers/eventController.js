const storage = require('../data/storage');

exports.getEvents = (req, res) => {
    let events = storage.getAllEvents();
    const available = req.query.available;
    const date = req.query.date;
    
    if (req.query.available) {
        const availableEvents = events.filter((event) => event.capacity > event.registrations.length);
        return res.json({events: availableEvents});
    }

    if (req.query.date) {
        const dateEvents = events.filter((event) => event.date === req.query.date);
        return res.json({events: dateEvents});
    }

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

    // Existing check
    if (!title || !date || !capacity) {
        return res.status(400).json({error: "Missing required fields"});
    }

    // NEW: Check if title is empty string
    if (title.trim() === '') {
        return res.status(400).json({error: "Title cannot be empty"});
    }

    // NEW: Check if capacity is a number
    if (typeof capacity !== 'number' ) {
        return res.status(400).json({error: "Capacity must be a number"});
    }

    // NEW: Check if capacity is at least 1
    if (capacity <= 0) {
        return res.status(400).json({error: "Capacity must be at least 1"});
    }

    // NEW: Check if date is in the future
    if (new Date(date) <= new Date()) {
        return res.status(400).json({error: "Date must be in the future"});
    }

    const newEvent = storage.createEvent({
        title,
        date,
        capacity,
        createdBy: req.user.userId
    });
    res.status(201).json({event: newEvent});
};


exports.registerForEvent = (req, res) => {
    const id = req.params.id;
    // const {username} = req.body;
    const username = req.user.email;

    const event = storage.getEventById(id);

    if (!event) {
        return res.status(404).json({error: "Event not found"});
    }

    if (event.registrations.includes(username)) {
        return res.status(400).json({error: "Already registered"})
    }

    if (event.registrations.length >= event.capacity) {
        return res.status(400).json({error: "Event Full"})
    }


    event.registrations.push(username);

    res.status(200).json({event: event});

}



exports.updateEvent = (req, res) => {
    const id = req.params.id;
    const updates = req.body;

    const event = storage.getEventById(id);

    
    if (!event) {
        return res.status(404).json({error: "Event to be edited : Not Found!"});
    }

    if (event.createdBy !== req.user.userId) {
        return res.status(403).json({error: "You can only update ur own events"})
    }

    const updated = storage.updateEvent(id, updates);
    res.status(200).json({event: updated});
}


exports.deleteEvent = (req, res) => {
    const id = req.params.id;

    const event = storage.getEventById(id);
    
    if (!event) {
        return res.status(404).json({error: "Event to be deleted : Not Found!"}); 
    }

    if (event.createdBy !== req.user.userId) {
        return res.status(403).json({error: "You can only delete your own events"});
    }

    const selected = storage.deleteEvent(id);
    res.status(200).json({message: "Event deleted", event: selected});
}



exports.unregisterEvent = (req, res) => {
    const id = req.params.id;
    const username = req.user.email;

    const unregister = storage.deleteRegistration(id, username);

    if (!unregister) {
        return res.status(404).json({error: "Event not found"});
    }

    if (unregister.error) {
        return res.status(400).json({error: unregister.error});
    }

    res.status(200).json({message: "Unregistered from event.", event: unregister});
}



exports.showRegistrations = (req, res) => {
    const id = req.params.id;


    const selectedEvent = storage.getEventById(id);

    if (!selectedEvent) {
        return res.status(404).json({error: "Event Not Found"});
    }

    res.status(200).json({
        eventId: selectedEvent.id,
        event_title: selectedEvent.title, 
        registrations: selectedEvent.registrations,
        totalRegistered: selectedEvent.registrations.length,
        capacity: selectedEvent.capacity,
        availableSpots: selectedEvent.capacity - selectedEvent.registrations.length
    });
}



exports.showAvailability = (req, res) => {
    const id = req.params.id;


    const selectedEvent = storage.getEventById(id);

    if (!selectedEvent) {
        return res.status(404).json({error: "Event Not Found"});
    }

    const spots = selectedEvent.capacity - selectedEvent.registrations.length

    res.status(200).json({
        eventId: selectedEvent.id,
        eventTitle: selectedEvent.title, 
        available: spots > 0,
        spotsLeft: spots,
        capacity: selectedEvent.capacity,
        registered: selectedEvent.registrations.length
    });
}