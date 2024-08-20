//Initialize dependencies and modules
const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { error } = require("console");

app.use(express.json());
app.use(cors()); //connect express to port 400

//Database connection with mongoDB
mongoose.connect("mongodb+srv://perismuniu:700700@cluster0.idl1l.mongodb.net/e-commerce")

//API Creation
app.get("/",(req, res)=>{
    res.send("Express App is Running")
})

app.listen(port, (error)=>{
    if (!error) {
        console.log("Server Running on Port"+port)
    }
    else {
        console.log("Error :"+error)
    }
})