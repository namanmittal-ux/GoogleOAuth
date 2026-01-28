import dotenv from 'dotenv'
import mongoose from "mongoose"

dotenv.config();

const connectDB = async () => {
    try {
        const uri =process.env.MONGODB_URI
        await mongoose.connect(uri)
             console.log("DB connected successfully")
    } catch (error) {
        console.log("DB Connection Failed",error)
        process.exit(1)
    }
}

export default connectDB;