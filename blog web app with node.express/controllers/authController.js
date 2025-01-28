// controllers/authController.js
import db from '../database/db.js';

// Example: User registration (simplified)
export const registerUser = async (req, res) => {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Hash password and save user (implement your hashing logic)
        await db.query('INSERT INTO Users (Username, Password) VALUES (?, ?)', [username, password]);
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: 'Error registering user' });
    }
};