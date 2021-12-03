import express from 'express';
// import { searchPost } from '../../client/src/api/index.js';

import { getPosts, getPost, createPost, searchPost, searchName, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:state', searchPost);
router.get('/name/:name', searchName);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;