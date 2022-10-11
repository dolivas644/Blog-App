import db from "../db/DBConnection.js";
import express from "express";
const router = express.Router();
import cors from "cors";
import * as dotenv from 'dotenv';
dotenv.config();

//get request from query 
router.get('/', async function (req, res) {
    try{
        const posts = await db.any('SELECT * FROM posts ORDER BY id', [true]);
        res.send(posts);
    }catch(e){
        console.log(e);
        return res.status(400).json({e});
    }
    
});

export default router;