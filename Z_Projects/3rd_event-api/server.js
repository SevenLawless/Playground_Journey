const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000;



let events = [
    {id: 1, title: "Tech", date: "2026-03-15", capacity: 20, registrations: []},
    {id: 2, title: "Clownery", date: "2026-03-8", capacity: 1, registrations: []}
];


app.get('/events', (req, res) => {
    // res.json(events);
    res.json({ events: events, total: events.length });
});

app.post('/events/:id/register', (req, res) => {
    const id = req.params.id;
    const { userName } = req.body;
    const event = events.find((event) => event.id === parseInt(id));

    if(!event) {
        return res.status(404).json({ error: "Event not found" });
    }
    if (event.registrations.includes(userName)) {
        return res.status(400).json({ error: "Already registered" });
    }
    if (event.registrations.length >= event.capacity) {
        return res.status(400).json({error: "Event Full, sorrryyy."})
    }

    event.registrations.push(userName);  // ← FIXED THIS
    res.status(200).json({event: event});
})



app.post('/events', (req, res) => {
    const { title, date, capacity } = req.body;
    const newEvent = {
        id: events.length + 1,
        title: title,
        date: date,
        capacity: capacity,
        registrations: []
    }

    events.push(newEvent);
    res.status(201).json({ event: newEvent });
})


app.get('/events/:id', (req, res) => {
    const id = req.params.id;
    const event = events.find((event) => event.id === parseInt(id));

    if (!event) {
        return res.status(404).json({ error: "Event non existant."});
    }


    res.json({ event: event, total: events.length });
})




app.listen(PORT, () => {
    console.log("serv is gooooood...")
});