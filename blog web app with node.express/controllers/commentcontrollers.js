// controllers/commentController.js
import db from '../database/db.js';

// Create Comment
export const createComment = async (req, res) => {
    const { userId, blogId, content } = req.body;

    if (!userId || !blogId || !content) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        await db.query('INSERT INTO Comments (UserID, BlogID, Content) VALUES (?, ?, ?)', [userId, blogId, content]);
        res.status(201).json({ message: 'Comment added successfully!' });
    } catch (error) {
        console.error("Error adding comment:", error);
        res.status(500).json({ message: 'Error adding comment' });
    }
};

// Update Comment
export const updateComment = async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;

    if (!content) {
        return res.status(400).json({ message: 'Content is required' });
    }

    try {
        const [result] = await db.query(
            'UPDATE Comments SET Content = ? WHERE CommentID = ?',
            [content, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        res.status(200).json({ message: 'Comment updated successfully!' });
    } catch (error) {
        console.error("Error updating comment:", error);
        res.status(500).json({ message: 'Error updating comment' });
    }
};