const customError = require("../../helpers/error/CustomError");

const jwt = require("jsonwebtoken");
const {isTokenIncluded} = require("../../helpers/authorization/tokenHelpers");

const {JWT_SECRET_KEY} =process.env;

const getAccessToRoute= function(req,res,next){

    if(isTokenIncluded(req)){



    }
    else{
            return next(new customError("You are not authorized to access this route",401));
    }


    let code = req.headers.authorization.split(" ")[1];

    jwt.verify(code,JWT_SECRET_KEY,function(err,decoded){

        if(err){

            return next(new customError("You are not authorized to access this route",401));

        }

        req.user = {
            id:decoded.id,
            name: decoded.name
        }
        next();

    });

    next();

}   

module.exports={getAccessToRoute};