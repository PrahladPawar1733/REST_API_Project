import express from 'express';

import { createUser, getUserById, deleteUserById, updateUserById } from '../controllers/users.js';

const router = express.Router();


router.post('/', createUser);

router.get('/:id', getUserById);

router.delete('/:id', deleteUserById);

router.patch('/:id', updateUserById);

export default router;