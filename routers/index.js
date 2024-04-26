const auth = require("./auth");

const question = require("./question");

const express = require("express");

const router = express.Router();

router.use("/auth",auth);

router.use("/question",question);

router.get("/",function(req,res){
    res.send("selamlar");
})


module.exports=router;

