const express = require("express");
 /*Express Router method */
const router = new express.Router();
const student = require("../model/students");



 router.get("/route",(req,res) => {
     res.send("Routing method is being used")
 });


  //Refactored with async
router.post("/students", async (req,res) => {
    try {
            const user = new student(req.body);
            const createUser = await user.save();
            res.status(201).send(createUser);
        }
        catch (err) {
            res.status(400).send(err);
        };
    });

    //This method reads or GETS all the data from students collection
router.get("/students", async (req,res) => {
        try {
            const getData = await student.find();
            res.send(getData)
        }
        catch (err) {
            res.status(400).send(err);
        }

        });



    //This method reads or GETS specific data from students collection
router.get("/students/:id", async (req,res) => {
        try {
            const _id = req.params.id;
            const specificData = await student.findById(_id);
            // res.send(specificData);
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

    //This method will update some fields in your specific document
router.patch("/students/:id", async (req,res) => {
        try {
            const _id = req.params.id;
            const updateStudent = await student.findByIdAndUpdate(_id, req.body, {
                new:true
            })
            res.send(updateStudent) 

        } catch (err) {
            res.status(500).send(err);
        }
    });

    //This method will delete specific data from server
router.delete("/students/:id", async (req,res) => {
        try {
            const _id = req.params.id;
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
