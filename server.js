const express = require("express");

const dotenv = require("dotenv");

const customErrorHandler = require("./middlewares/errors/customErrorHandler");

const path = require("path");

dotenv.config({
    path:"./config/env/config.env"
});

const connectDatabase= require("./helpers/database/connectDatabase");

connectDatabase();


const app = express();
//Environment Variables

app.use(express.json());;

const PORT = process.env.PORT;

//Environment Variables
   
const index = require ("./routers/index");


app.use("/api",index);

app.use (customErrorHandler);

app.use(express.static(path.join(__dirname,"public")));

app.listen(PORT,function(){

    console.log(`App started on ${PORT} : ${process.env.NODE_ENV}`);

})

