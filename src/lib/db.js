import mongoose from "mongoose";

const ConnectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }catch(error){
        console.log(`MongoDB connection error`, error);
    }
};

export default ConnectDB;