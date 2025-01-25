// used type:module to use import instead of require
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './config/db.js';
import appRoutes from './router/app.route.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import next from 'next';         //no next in backend/
// const nextPath = path.resolve(__dirname, '../frontend/mars-front/node_modules/next');
// const next = await import(nextPath);

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());  // to fix CORS issue
app.use('/api/applications', appRoutes);


//deploy nextjs             -- might have path issue!!
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });      //, dir: '../frontend/mars-front'
const handle = nextApp.getRequestHandler();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// nextApp
nextApp.prepare().then(() => {
    if (process.env.NODE_ENV === "production") {
        app.use(express.static(path.join(__dirname, ".next/static")));
        app.get("*", (req, res) => {
            return handle(req, res);
        });
    }
});
// const __dirname = path.resolve();
// if(process.env.NODE_ENV === "production"){
//     app.use(express.static(path.join(__dirname, ".next", "static")));
//     app.get("*", (req,res) => {
//         res.sendFile(path.resolve(__dirname, "frontend", "mars-front", "src", "app","pages.tsx"));
//     })
// }


app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at http://localhost:${PORT}`);   //set to be :4000 for node server
});
