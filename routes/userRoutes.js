const router = require("express").Router();
const multer = require("multer")
const upload = multer({storage: multer.memoryStorage()});

router.get("/register", function(req, res){
    res.send("Welcome to register");
})

router.get("/signin", function(req, res){
    res.send("Welcome to login");
})

router.get("/ownshop", function(req, res){
    res.send("Welcome to ownshop");
})

router.get("/help", function(req, res){
    res.send("Welcome to help");
})



module.exports=router 