import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { bookRoutes } from './Routes/books.route.js';


// creating a server;
const bookApp = new express();

bookApp.listen("7000", ()=> {
    console.log("server is running on the port 7000");
})

// parse middleware
bookApp.use(express.json());

// cors middleware
bookApp.use(cors())

// dotenv config
dotenv.config()

// mongodb connection url
const atlasUrl = process.env.MONGODB_URL;
// mongodb://localhost:27017/

// mongodb connection
mongoose.connect(atlasUrl, {

    serverSelectionTimeoutMS: 5000

}).catch((error) => console.log(error.reason))

// checking database connection
const db = mongoose.connection;
db.on('open', ()=> {
    console.log("Database connection is successful")
})
db.on('error', ()=> {
    console.log("Database connection is not successful")
})



// passing bookApp into the bookRoutes
bookRoutes(bookApp);