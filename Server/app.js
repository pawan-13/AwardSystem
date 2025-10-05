import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/userRoute.js';

dotenv.config({});

const app = express();

app.use(cors({
    origin: "*",
    Credential: true,
}));

app.use(express.json());

app.use('/api/v1/user', userRouter);

const port = process.env.port || 8000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})