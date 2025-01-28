// controllers/likeController.js
import db from '../database/db.js';

// Create Like
export const createLike = async (req, res) => {
    const { userId, blogId } = req.body;

    if (!userId || !blogId) {
        return res.status(400).json({ message: 'Both User ID and Blog ID are required' });
    }

    try {
        await db.query('INSERT INTO Likes (UserID, BlogID) VALUES (?, ?)', [userId, blogId]);
        res.status(201).json({ message: 'Like added successfully!' });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ message: 'You have already liked this blog' });
        }
        console.error("Error adding like:", error);
        res.status(500).json({ message: 'Error adding like' });
    }
};