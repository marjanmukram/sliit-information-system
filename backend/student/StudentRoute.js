const express = require('express');
const router = express.Router();
const Student = require('../models/Student')

//Add student details
router.post('/add', (req, res) => {
    const student =  new Student(req.body);
    student.save()
        .then(() => res.status(200).send({"message": "Succussfully addded student"}))
        .catch((err) => res.status(400).send({err}));
});

//Get student details
router.get('/get', (req,res) => {
    Student.find()
        .then( student => {
            res.status(200).send({"message":"Student details sucussfullt retrieved", "data":student})
        })
        .catch( err => {
            res.status(400).send({err});
        })
});

//Get a particular student details
router.get('/get/:id', (req,res) => {
    Student.findById(req.params.id)
        .then( student  => {
            res.status(400).send({"message":"Sucuessfully retrieced the student's data", "data":student})
        }).catch( err => {
            res.status(400).send({err});
        })
});

//Update a particular student detail
router.put('/update/:id', (req,res) => {
    Student.updateOne({'_id':req.params.id}, req.body)
        .then( student => {
            res.status(200).send({"message":"Sucuessfully updated a particular student", "data":student})
        }).catch( err => {
            res.status(400).send({err});
        })
})

//Delete a student by regid
router.delete('/delete/:id', (req,res) => {
    Student.deleteOne({'_id':req.params.id})
        .then( student => {
            res.status(200).send({"message":"Deleted the student", "data":admin})
        }).catch( err => {
            res.status(400).send({err})
        })
})

module.exports = router;