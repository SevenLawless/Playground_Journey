// This is our "fake database" - just arrays in memory
let events = [
  {
    id: 1,
    title: "Web Dev Workshop",
    date: "2026-03-15",
    capacity: 30,
    registrations: []
  }
];

// Helper to generate IDs
let nextId = 2;

module.exports = {
  getAllEvents: () => events,
  
  getEventById: (id) => events.find(event => event.id === parseInt(id)),
  
  createEvent: (eventData) => {
    const newEvent = {
      id: nextId++,
      ...eventData,
      registrations: []
    };
    events.push(newEvent);
    return newEvent;
  },
  
  registerForEvent: (eventId, userName) => {
    const event = events.find(e => e.id === parseInt(eventId));
    if (!event) return null;
    
    // Check if already registered (intermediate feature!)
    if (event.registrations.includes(userName)) {
      return { error: "Already registered" };
    }
    
    // Check capacity (intermediate feature!)
    if (event.registrations.length >= event.capacity) {
      return { error: "Event is full" };
    }
    
    event.registrations.push(userName);
    return event;
  }
};