// controllers/blogController.js
import db from '../database/db.js';

// Create Blog
export const createBlog = async (req, res) => {
    const { title, content, userId } = req.body;

    if (!title || !content || !userId) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        await db.query('INSERT INTO Blogs (UserID, Title, Content) VALUES (?, ?, ?)', [userId, title, content]);
        res.status(201).json({ message: 'Blog created successfully!' });
    } catch (error) {
        console.error("Error creating blog:", error);
        res.status(500).json({ message: 'Error creating blog' });
    }
};

// Update Blog
export const updateBlog = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    if (!title && !content) {
        return res.status(400).json({ message: 'At least one field (title or content) is required' });
    }

    try {
        const updates = [];
        const values = [];

        if (title) {
            updates.push('Title = ?');
            values.push(title);
        }

        if (content) {
            updates.push('Content = ?');
            values.push(content);
        }

        values.push(id);
        const query = `UPDATE Blogs SET ${updates.join(', ')} WHERE BlogID = ?`;
        const [result] = await db.query(query, values);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        res.status(200).json({ message: 'Blog updated successfully!' });
    } catch (error) {
        console.error("Error updating blog:", error);
        res.status(500).json({ message: 'Error updating blog' });
    }
};

// Get All Blogs
export const getBlogs = async (req, res) => {
    try {
        const [rows] = await db.query(`
            SELECT 
                b.BlogID,
                b.Title,
                b.Content,
                u.Username,
                COUNT(DISTINCT c.CommentID) AS CommentCount,
                COUNT(DISTINCT l.LikeID) AS LikeCount,
                AVG(br.RatingValue) AS AverageRating
            FROM Blogs b
            JOIN Users u ON b.UserID = u.UserID
            LEFT JOIN Comments c ON b.BlogID = c.BlogID
            LEFT JOIN Likes l ON b.BlogID = l.BlogID
            LEFT JOIN BlogRatings br ON b.BlogID = br.BlogID
            GROUP BY b.BlogID
        `);
        res.status(200).json(rows);
    } catch (error) {
        console.error("Error fetching blogs:", error);
        res.status(500).json({ message: 'Error fetching blogs' });
    }
};



export const getAllBlogsWithDetails = async (req, res) => {
    try {
        const [rows] = await db.query(`
            SELECT 
                b.BlogID,
                b.Title,
                b.Content,
                u.Username,
                COUNT(DISTINCT c.CommentID) AS CommentCount,
                COUNT(DISTINCT l.LikeID) AS LikeCount,
                AVG(br.RatingValue) AS AverageRating
            FROM Blogs b
            JOIN Users u ON b.UserID = u.UserID
            LEFT JOIN Comments c ON b.BlogID = c.BlogID
            LEFT JOIN Likes l ON b.BlogID = l.BlogID
            LEFT JOIN BlogRatings br ON b.BlogID = br.BlogID
            GROUP BY b.BlogID
        `);
        
        res.status(200).json(rows);
    } catch (error) {
        console.error("Error fetching blogs with details:", error);
        res.status(500).json({ message: 'Error fetching blogs with details' });
    }
};
