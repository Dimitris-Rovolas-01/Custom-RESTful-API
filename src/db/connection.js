const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/students-api",{
   
    useUnifiedTopology:true
   
}).then( ()=> {
    console.log("Connection Successful");
    }).catch((err) => {
        console.log("Connection Failed");
        console.log(err);
        }
    );




