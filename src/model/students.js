const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        minlength:2
    },
    email: {
        type:String,
        unique: [true,"Email id already Exists"],
        required: true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error("Invalid email");
                 } 
            }
        }, 
    phone: {
        type: Number,
        maxlength:10,
        minlength:10
    },
    address:{
        type:String,
        required:true
    }      
});

const student = new mongoose.model('student',studentSchema);
module.exports = student;
