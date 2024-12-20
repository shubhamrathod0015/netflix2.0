// //step-1
// // const express = require("express");
// import express from "express";
// import dotenv from "dotenv";
// import databaseConnection from "./utils/database.js";
// import cookieParser from "cookie-parser";
// import userRoute from "./routes/userRoute.js";
// import cors from "cors";
// import path from 'path';

// // const path = require("path");

// databaseConnection();

// dotenv.config({
//     path:".env"
// })

// const app = express();


// //middlewares 
// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// app.use(cookieParser());
// const corsOptions = {
//     origin:'http://localhost:3000',
//     credentials:true
// }
// app.use(cors(corsOptions));
 
// // api
// app.use("/api/v1/user", userRoute);

// app.get("/" , (req, res) => {
//     app.use(express.static(path.resolve(__dirname, "netflix", "build")));
//     res.sendFile(path.resolve(__dirname, "netflix", "build", "index.html"));
// });

// app.listen(process.env.PORT,() => {
//     console.log(`Server listen at port ${process.env.PORT}`);
// });


import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";
import path from "path";

// Define __dirname manually in ES modules
const __dirname = path.resolve();

databaseConnection();

dotenv.config({
    path: ".env",
});

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};
app.use(cors(corsOptions));

// API
app.use("/api/v1/user", userRoute);

app.get("/", (req, res) => {
    // Serve the static files from the 'netflix/build' directory
    app.use(express.static(path.resolve(__dirname, "netflix", "build")));
    res.sendFile(path.resolve(__dirname, "netflix", "build", "index.html"));
});

app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
});
