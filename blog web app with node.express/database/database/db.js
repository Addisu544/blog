// import mysql, { createConnection } from 'mysql'
// const db=createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'blog_platform'
// })
// db.connect((err,res)=>{{
//     if(err){
//         console.log('err while connecting to server',err)
// }
//     else{
//         console.log('Database connected...')
//     }
// }
// })
// export default db;

import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import db from './database/db.js';
import authRoutes from './routes/auth.js'; // Import your routes

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Test route
app.get('/', (req, res) => {
    res.send('Server is connected and running!');
});

// Use the authentication routes
app.use('/api/auth', authRoutes);

// Create HTTP server
const server = createServer(app);

// Start the server
server.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`);
});