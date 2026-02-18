require('dotenv').config();

const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();
const PORT = process.env.PORT || 3000;

// Import routes
const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes');

// Middleware
app.use(express.json());



// Global rate limiter 
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 30,
    message: {
        error: "Too many requests, thank u come again."
    },
    standardHeaders: true,
    legacyHeaders: false,
});

app.use(limiter);

// Mount routes at /events
app.use('/events', eventRoutes);
app.use('/users', userRoutes);

// Test route (optional, just to check server is running)
app.get('/', (req, res) => {
    res.json({ message: "Event Registration API v2.0" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});