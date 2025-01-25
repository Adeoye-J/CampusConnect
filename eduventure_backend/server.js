import express from 'express';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import 'dotenv/config';

const app = express();
connectDB()

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running and listening on port ${PORT}`));
