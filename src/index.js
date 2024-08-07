//require('dotenv').config({path:'./env'})
import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path:'./env'
})

connectDB()
















/*
import express from "express";

const app = express();


(async ()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URL}
        /${DB_NAME}`)
        app.on("error",()=>{
            console.log("error:",error)
            throw error
        })

        app.listen(process.envv.PORT,()=>{
            console.log(`App is listing on port ${process.env.PORT}`)
        })

        app.listen
    } catch (error) {
        console.log("ERROR:",error);
        throw error
    }
})
    */