import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = () =>{
    mongoose.connect(process.env.MONGO_URI);
}

export default connectDb