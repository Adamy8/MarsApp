// used type:module to use import instead of require
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './config/db.js';
import appRoutes from './router/app.route.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());  // to fix CORS issue
app.use('/api/applications', appRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at http://localhost:${PORT}`);   //set to be :4000 for node server
});
