import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async()=>{
    try {
       const connectiondb = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       console.log(`mongodb connected !! DB HOST: ${connectiondb.connection.host}`)
    } catch (error) {
        console.log("MONGO connection error",error)
        process.exit(1)

    }
}
export default connectDB