import express from 'express';
import { registerUser } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send('User Route');
});

userRouter.post('/register', registerUser);