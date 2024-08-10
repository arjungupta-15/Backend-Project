//require('dotenv').config({path:'./env'})
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import express from "express";
const app = express();

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("mongodb connection failed:", err);
  });

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
