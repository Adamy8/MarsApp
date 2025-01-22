// used type:module to use import instead of require
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';


const app = express();
const PORT = process.env.PORT || 5010;
app.use(express.json());


app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at http://localhost:${PORT}`);
});

