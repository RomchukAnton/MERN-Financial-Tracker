import express,{Express} from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3001;
const mongoURI: any = process.env.MONGODB_CONNECT;

app.use(express.json());




mongoose.connect(mongoURI)
    .then(() => console.log("CONNECTED TO MONGODB !"))
    .catch((err) => console.error("Failed to Connect to MongoDb", err));


app.listen(port, () => console.log(`Server Running on Port ${port}`));