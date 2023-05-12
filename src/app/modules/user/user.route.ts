import express from 'express';
import { createUser, getUserById, getUsers } from './user.controller';
const router = express.Router();

router.route('/')
    .post(createUser)
    .get(getUsers);

router.route('/:id')
    .get(getUserById)

export default router;