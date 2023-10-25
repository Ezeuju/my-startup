const router = require("express").Router();
const multer = require("multer")
const upload = multer({storage: multer.memoryStorage()});

router.get("/", function(req, res){
    console.log("home")
    res.send("Welcome to seller");
})

module.exports=router