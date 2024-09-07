import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connetionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("mongoDB connected");
        console.log(connetionInstance.connection.host);
        
        
    }
    catch(error){
        console.log("ERROR",error)
        process.exit(1)
    }
}

export default connectDB