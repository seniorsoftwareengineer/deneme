const mongoose = require("mongoose");

const  connectDatabase =  function(){

    console.log(process.env.MONGO_URI);

    mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true}).then(function(){

        console.log("connected!");

    }).catch(function(err){
        console.log("error" + err);
    })

}

module.exports=connectDatabase;