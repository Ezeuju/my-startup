const router = require("express").Router();
const userRoutes = require("./userRoutes");
const sellerRoutes = require("./sellerRoutes");

router.use("/", userRoutes);
router.use("/seller", sellerRoutes);

router.get("/", function(req, res){
    console.log("home")
    res.sendFile("/index.html")
})

module.exports=router