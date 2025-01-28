// routes/blogRoutes.js
import express from 'express';
import { createBlog, updateBlog, getBlogs, getAllBlogsWithDetails } from '../controllers/blogController.js';

const router = express.Router();

router.post('/', createBlog);
router.put('/:id', updateBlog);
router.get('/', getBlogs); // Existing route for getting blogs
router.get('/details', getAllBlogsWithDetails); // New route for getting blogs with details

export default router;