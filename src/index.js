import dotenv from "dotenv"
import mongoose from "mongoose";

// import express from "express"
// const app = express()

import connectDB from "./db/index.js";
dotenv.config({
    path:'./env'
})


connectDB()




// ;( async ()=> {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error) =>{
//             console.log("ERROR",error)
//             throw error
//         })

//         app 
//     } catch (error) {
//         console.log("ERROR",error)
//         throw error
//     }
// })()