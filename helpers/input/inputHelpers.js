const bcrypt = require("bcryptjs");


const validateUserInput = function(email,password){

        return (email && password);

}

const comparePassword = function(password,hashedPassword){

      return bcrypt.compareSync(password,hashedPassword);

}


module.exports={validateUserInput,comparePassword};
 
 