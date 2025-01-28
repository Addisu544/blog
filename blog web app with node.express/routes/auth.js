// // import express from 'express';
// // import bcrypt from 'bcrypt';
// // import jwt from 'jsonwebtoken';
// // import db from '../database/db.js'; // Import the database connection

// // const router = express.Router();

// // // User Registration
// // router.post('/register', async (req, res) => {
// //     const { username, email, password } = req.body;

// //     try {
// //         const hashedPassword = await bcrypt.hash(password, 10);
// //         db.query(
// //             'INSERT INTO Users (Username, Email, Password) VALUES (?, ?, ?)',
// //             [username, email, hashedPassword],
// //             (err) => {
// //                 if (err) {
// //                     console.error('Database error:', err);
// //                     return res.status(500).send("Error registering user.");
// //                 }
// //                 res.status(201).send("User registered successfully.");
// //             }
// //         );
// //     } catch (error) {
// //         console.error('Hashing error:', error);
// //         res.status(500).send("Error occurred during registration.");
// //     }
// // });

// // // User Login
// // router.post('/login', (req, res) => {
// //     const { email, password } = req.body;

// //     db.query('SELECT * FROM Users WHERE Email = ?', [email], async (err, results) => {
// //         if (err || results.length === 0) return res.status(404).send("User not found.");

// //         const user = results[0];
// //         const passwordIsValid = await bcrypt.compare(password, user.Password);
// //         if (!passwordIsValid) return res.status(401).send("Invalid password.");

// //         const token = jwt.sign({ id: user.UserID }, process.env.JWT_SECRET, { expiresIn: '1d' });
// //         res.status(200).json({ auth: true, token });
// //     });
// // });

// // export default router;


// // import express from 'express';
// // import bcrypt from 'bcrypt';
// // import jwt from 'jsonwebtoken';
// // import db from '../database/db.js'; // Import the database connection

// // const router = express.Router();

// // // User Registration
// // router.post('/register', async (req, res) => {
// //     const { username, email, password } = req.body;

// //     try {
// //         // Hash the password
// //         const hashedPassword = await bcrypt.hash(password, 10);
        
// //         // Insert user into the database
// //         db.query(
// //             'INSERT INTO Users (Username, Email, Password) VALUES (?, ?, ?)',
// //             [username, email, hashedPassword],
// //             (err) => {
// //                 if (err) {
// //                     // Log detailed error information
// //                     console.error('Database error during registration:', err.message);
// //                     return res.status(500).send("Error registering user: " + err.message);
// //                 }
// //                 res.status(201).send("User registered successfully.");
// //             }
// //         );
// //     } catch (error) {
// //         // Log detailed error information for hashing or other issues
// //         console.error('Error occurred during registration:', error.message);
// //         res.status(500).send("Error occurred during registration: " + error.message);
// //     }
// // });

// // // User Login
// // router.post('/login', (req, res) => {
// //     const { email, password } = req.body;

// //     db.query('SELECT * FROM Users WHERE Email = ?', [email], async (err, results) => {
// //         if (err) {
// //             console.error('Database error during login:', err.message);
// //             return res.status(500).send("Error logging in.");
// //         }
        
// //         if (results.length === 0) {
// //             return res.status(404).send("User not found.");
// //         }

// //         const user = results[0];
// //         const passwordIsValid = await bcrypt.compare(password, user.Password);
// //         if (!passwordIsValid) {
// //             return res.status(401).send("Invalid password.");
// //         }

// //         const token = jwt.sign({ id: user.UserID }, process.env.JWT_SECRET, { expiresIn: '1d' });
// //         res.status(200).json({ auth: true, token });
// //     });
// // });

// // export default router;


// import express from 'express';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import db from '../database/db.js'; // Import the database connection

// const router = express.Router();

// // User Registration
// router.post('/register', async (req, res) => {
//     const { username, email, password } = req.body;

//     // Log the incoming request data
//     console.log('Received registration request:', req.body);

//     // Validate request data
//     if (!username || !email || !password) {
//         console.error('Missing fields in registration request');
//         return res.status(400).send("Please provide username, email, and password.");
//     }

//     try {
//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 10);
        
//         // Insert user into the database
//         db.query(
//             'INSERT INTO Users (Username, Email, Password) VALUES (?, ?, ?)',
//             [username, email, hashedPassword],
//             (err) => {
//                 if (err) {
//                     // Log detailed error information
//                     console.error('Database error during registration:', err.message);
//                     return res.status(500).send("Error registering user: " + err.message);
//                 }
//                 res.status(201).send("User registered successfully.");
//             }
//         );
//     } catch (error) {
//         // Log detailed error information for hashing or other issues
//         console.error('Error occurred during registration:', error.message);
//         res.status(500).send("Error occurred during registration: " + error.message);
//     }
// });

// // User Login
// router.post('/login', (req, res) => {
//     const { email, password } = req.body;

//     db.query('SELECT * FROM Users WHERE Email = ?', [email], async (err, results) => {
//         if (err) {
//             console.error('Database error during login:', err.message);
//             return res.status(500).send("Error loggging in.");
//         }
        
//         if (results.length === 0) {
//             return res.status(404).send("User not found.");
//         }

//         const user = results[0];
//         const passwordIsValid = await bcrypt.compare(password, user.Password);
//         if (!passwordIsValid) {
//             return res.status(401).send("Invalid password.");
//         }

//         const token = jwt.sign({ id: user.UserID }, process.env.JWT_SECRET, { expiresIn: '1d' });
//         res.status(200).json({ auth: true, token });
//     });
// });

// export default router;








//logingngng
import express from 'express';
import bcrypt from 'bcrypt';
import db from '../database/db.js'; // Import the database connection

const router = express.Router();

// User Registration
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    console.log('Received registration request:', req.body);

    if (!username || !email || !password) {
        console.error('Missing fields in registration request');
        return res.status(400).send("Please provide username, email, and password.");
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        
        db.query(
            'INSERT INTO Users (Username, Email, Password) VALUES (?, ?, ?)',
            [username, email, hashedPassword],
            (err) => {
                if (err) {
                    console.error('Database error during registration:', err.message);
                    return res.status(500).send("Error registering user: " + err.message);
                }
                res.status(201).send("User registered successfully.");
            }
        );
    } catch (error) {
        console.error('Error occurred during registration:', error.message);
        res.status(500).send("Error occurred during registration: " + error.message);
    }
});

// User Login
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM Users WHERE Email = ?', [email], async (err, results) => {
        if (err) {
            console.error('Database error during login:', err.message);
            return res.status(500).send("Error logging in.");
        }
        
        if (results.length === 0) {
            return res.status(404).send("User not found.");
        }

        const user = results[0];
        const passwordIsValid = await bcrypt.compare(password, user.Password);
        if (!passwordIsValid) {
            return res.status(401).send("Invalid password.");
        }

        // Instead of JWT, you can simply send a success message
        res.status(200).send("User logged in successfully.");
    });
});

export default router;