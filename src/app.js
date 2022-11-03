/*
API  - Application Programming Interface
software interface that allows two or more apps to communicate with each 
other over the internet and through various devices. 
---------
REST API 
REpresentational State Transfer API 
Architectural style for API (Application Programming Interface) 
that uses http requests to access and use data 
*/

const express = require("express");
require("./db/connection.js");
const student = require("./model/students");
const app = express();
const port = process.env.PORT || 8000;
const studentRouter = require("./routers/routing");
app.use(express.json());
app.use(studentRouter);


  
   
app.listen(port, ()=> {
    console.log(`Connection is set up at ${port}`);
});