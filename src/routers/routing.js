const express = require("express");
 /*Express Router method */
const router = new express.Router();
const student = require("../model/students");


//Testing Router in your terminal
 router.get("/route",(req,res) => {
     res.send("Routing method is being used")
 });

//This method creates a new student registration ( *meaning a new document in your MongoDb Collection)
/* In your Postman request you need to send the data as JSON in the body of the Request
    eg
    {
    "name":"Michael",
    "email":"michael@gmail.com",
    "phone":"555000123",
    "address" : "New York City"
    }
*/    
router.post("/students", async (req,res) => {
    try {
            const entry = new student(req.body);
            const createEntry = await entry.save();
            res.status(201).send(createEntry);
        }
        catch (err) {
            res.status(400).send(err);
        };
    });

    //This method GETS all the data from students collection
router.get("/students", async (req,res) => {
        try {
            const getData = await student.find();
            res.send(getData)
        }
        catch (err) {
            res.status(400).send(err);
        }

        });



    //This method GETS specific data from students collection 
router.get("/students/:id", async (req,res) => {
        try {
            const _id = req.params.id;
            //In your postman request you need to query with your documents unique ID
            // eg  GET localhost:8000/students/6362bf590243fc8a6861eafc
            const specificData = await student.findById(_id);
          
            console.log(specificData);
            if (!specificData) {
                res.status(404).send();
            } else {
                res.send(specificData);
            }
        }
        catch (err){
            res.send(err);
        }
    })

    //This method will update some fields in a specific document
router.patch("/students/:id", async (req,res) => {
        try {
            const _id = req.params.id;
             //In your postman request you need to query with your documents unique ID
            // eg  PATCH localhost:8000/students/6362bf590243fc8a6861eafc
            const updateStudent = await student.findByIdAndUpdate(_id, req.body, {
                new:true
            })
            res.send(updateStudent) 

        } catch (err) {
            res.status(500).send(err);
        }
    });

    //This method will delete specific data from your DB Collection
router.delete("/students/:id", async (req,res) => {
        try {
            const _id = req.params.id;
             //In your postman request you need to query with your documents unique ID
            // eg  GET localhost:8000/students/6362bf590243fc8a6861eafc
            const deleteStudent = await student.findByIdAndDelete(_id);
            if (!_id) {
                return res.status(400).send();
            } else {
                res.send(deleteStudent);
            } 
        } catch (err) {

            res.status(500).send(err);
        }
    });


 module.exports = router;
