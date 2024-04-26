const express = require("express");

const router = express.Router();

const {register,getUser,login,logout,imageUpload} = require("../controllers/auth");

const {getAccessToRoute} = require("../middlewares/authorization/auth");

const {profileImageUpload,upload} = require("../middlewares/libraries/profileImageUpload");

router.get("/",function(req,res){

    res.send("auth home page");

});

router.get("/profile",getAccessToRoute,getUser);

router.post("/register",register);

router.post("/login",login);

router.get("/logout",getAccessToRoute,logout);

router.post("/upload",getAccessToRoute,profileImageUpload.single("profile_image"),imageUpload);



module.exports = router;


