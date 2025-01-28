import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import db from './database/db.js'; // Database connection
import blogRoutes from './routes/blogRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import likeRoutes from './routes/likeRoutes.js';
import ratingRoutes from './routes/ratingRoutes.js';
import authRoutes from './routes/auth.js'; // Import your routes

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('Server is connected and running!');
});

// Use the routes
app.use('/api/blogs', blogRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/likes', likeRoutes);
app.use('/api/ratings', ratingRoutes);
app.use('/api/auth', authRoutes);

// Create HTTP server
const server = createServer(app);

// Start the server
server.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`);
});