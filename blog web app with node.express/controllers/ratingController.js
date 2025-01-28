// controllers/ratingController.js
import db from '../database/db.js';

// Create Rating
export const createRating = async (req, res) => {
    const { userId, blogId, ratingValue } = req.body;

    if (!userId || !blogId || !ratingValue) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (ratingValue < 1 || ratingValue > 5) {
        return res.status(400).json({ message: 'Rating must be between 1 and 5' });
    }

    try {
        await db.query(
            'INSERT INTO BlogRatings (UserID, BlogID, RatingValue) VALUES (?, ?, ?)',
            [userId, blogId, ratingValue]
        );
        res.status(201).json({ message: 'Rating added successfully!' });
    } catch (error) {
        console.error("Error adding rating:", error);
        res.status(500).json({ message: 'Error adding rating' });
    }
};