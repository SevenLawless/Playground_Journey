let events = [
    {id: 1, title: "Tech", date: "2026-03-15", capacity: 20, registrations: []},
    {id: 2, title: "Clownery", date: "2026-03-04", capacity: 1, registrations: []}
];

module.exports = {
    getAllEvents: function () {
        return events;
    },

    getEventById: function(id) {
        return events.find((event) => event.id === parseInt(id));
    },

    createEvent: function(eventData) {
        const newEvent = {
            id: events.length + 1,
            title: eventData.title,
            date: eventData.date,
            capacity: eventData.capacity,
            registrations: []
        };
        events.push(newEvent);
        return newEvent;
    },

    updateEvent: function(id, updates) {
        const eventToEdit = events.find((event) => event.id === parseInt(id));

        if (!eventToEdit) {
            return null;
        }


        if (updates.title) {
            eventToEdit.title = updates.title;
        }
        if (updates.date) {
            eventToEdit.date = updates.date;
        }
        if (updates.capacity) {
            eventToEdit.capacity = updates.capacity;
        }

        return eventToEdit;
    },

    deleteEvent: function(id) {
        const eventToDelete = events.find((event) => event.id === parseInt(id));

        if (!eventToDelete) {
            return null;
        }

        events = events.filter((event) => event.id !== parseInt(id));

        return eventToDelete;
    },

    deleteRegistration: function(id, username) {
        const eventToUnregister = events.find((event) => event.id === parseInt(id));

        if (!eventToUnregister) {
            return null;
        }

        if (!eventToUnregister.registrations.includes(username)) {
        return { error: "User not even registered" };
        }


        eventToUnregister.registrations = eventToUnregister.registrations.filter((name) => name !== username);

        return eventToUnregister;
    }
};