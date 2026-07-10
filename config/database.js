import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config();
export const contactDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected");
    } catch (err) {
        console.error("MongoDB Error:", err);
    }
};

