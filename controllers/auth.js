const User = require("../models/User");

const CustomError = require("../helpers/error/CustomError");

const asyncErrorWrapper = require("express-async-handler");

const {sendJwtToClient} = require("../helpers/authorization/tokenHelpers");

const {validateUserInput,comparePassword} = require("../helpers/input/inputHelpers");



const register  = asyncErrorWrapper(async function(req,res,next){

    
    
        const user = await User.create(req.body);
    
        sendJwtToClient(user,res);
    
    
});

const getUser = function(req,res,next){



        res.json({
            success:true,
            message:req.user
        });

};

const login=asyncErrorWrapper(async function(req,res,next){

    const email = req.body.email;
    const password = req.body.password;
    if(validateUserInput(email,password))
    {
       const user = await User.findOne({email}).select("+password");

       if(comparePassword(password,user.password))
       {

        sendJwtToClient(user,res);

       }
       else
       {
        return next(new CustomError("Please check your credentials",400));
       }
    }
    else
    {
        return next(new CustomError("Please check your inputs",400));
    }
   

});

const logout = asyncErrorWrapper(async function(req,res,next){

const {NODE_ENV} =process.env;

   return res.status(200).cookie({
        httpOnly:true,
        expires: new Date(Date.now()),
        secure: false
    }).json({
        success:true,
        message:"Logout succesfull"
    });

});

const imageUpload=asyncErrorWrapper(async (req,res,next) =>{

   const userr = await User.findByIdAndUpdate(req.user.id,{profile_image :req.savedProfileImage},{new:true,runValidators:true});

    
    console.log(userr);

    res.json({
       "slm":"23"
    })

});

module.exports={register,getUser,login,logout,imageUpload};