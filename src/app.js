
//Module Requirement
const express = require("express");
//Schemas for your MongoDB  
require("./db/connection.js");
const student = require("./model/students");
const app = express();
/* Either you host this API externally which is going to get the default server port 
or use your localhost with port 8000 */ 
const port = process.env.PORT || 8000;
//Routing for your URL path
const studentRouter = require("./routers/routing");
app.use(express.json());
app.use(studentRouter);


  
   
app.listen(port, ()=> {
    console.log(`Connection is set up at ${port}`);
});