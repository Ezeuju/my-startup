//MARTINS, PLEASE USE COMMENTS SO I DONT GET CONFUSED.
//imports
const mongoose=require("mongoose");
const express=require("express");
const cookie=require("cookie-parser");
const router=require("./routes/mainRouter");

require("dotenv").config({path:"./config.env"});

// initializations
const app=express();
const port=3030|| process.env.port;
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set("view engine", "ejs")
app.use("/", router);

// Martins, please set up cookie parser

//Mongoos
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database Connected");
    try {
      app.listen(port);
      console.log("Running on at localhost:"+(port));
    } catch (error) {
      console.log("Error: ", error.stack);
    }
  });
