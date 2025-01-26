import express from 'express';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import 'dotenv/config';
import userRouter from './routes/userRoute.js';

// Initialize express
const app = express();
connectDB()

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/user', userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running and listening on port ${PORT}`));
