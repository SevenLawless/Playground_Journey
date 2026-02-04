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
    }
};