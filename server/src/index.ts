import express,{Express} from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());