const CustomError = require("../../helpers/error/CustomError");


const customErrorHandler = function(err,req,res,next){

    let customError = err;

    if(err.name==="SyntaxError"){

         customError = new CustomError("Unexpected Syntax",400);

    }
    else if(err.name==="ValidationError")
    {

        customError = new CustomError(err.message,400);

    }
    else if(err.code===11000){

        customError = new CustomError("Duplicate Key Found: Check Your Input",400);
    
    }
    res.status(customError.status|| 500).json({

        status:"failed",
        message:customError.message ||"Internal Server Error"
    
    })

};


module.exports= customErrorHandler;

