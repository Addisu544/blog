// routes/commentRoutes.js
import express from 'express';
import { createComment, updateComment } from '../controllers/commentController.js';

const router = express.Router();

router.post('/', createComment);
router.put('/:id', updateComment);

export default router;