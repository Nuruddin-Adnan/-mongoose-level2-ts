import express from 'express';
import { createUser, getAdminUsers, getUserById, getUsers } from './user.controller';
const router = express.Router();

router.route('/')
    .post(createUser)
    .get(getUsers);

router.route('/admins')
    .get(getAdminUsers);

router.route('/:id')
    .get(getUserById)

export default router;