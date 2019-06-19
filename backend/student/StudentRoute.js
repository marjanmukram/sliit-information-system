const express = require('express');
const router = express.Router();
const Student = require('../models/Student')
const incomingForm = require('formidable').IncomingForm;


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
    Student.find({"regNumber":req.params.id})
        .then( student  => {
            res.status(400).send({"message":"Sucuessfully retrieced the student's data", "data":student})
        }).catch( err => {
            res.status(400).send({err});
        })
});

//Update a particular student detail
router.put('/update/:id', (req,res) => {
    Student.updateOne({'regNumber':req.params.id}, req.body)
        .then( student => {
            res.status(200).send({"message":"Sucuessfully updated", "data":student})
        }).catch( err => {
            res.status(400).send({err});
        })
})

//Delete a student by regid
router.delete('/delete/:id', (req,res) => {
    Student.deleteOne({'regNumber':req.params.id})
        .then( student => {
            res.status(200).send({"message":"Deleted the student", "data":student})
        }).catch( err => {
            res.status(400).send({err})
        })
})

router.post('/upload', (req, res) => {
    const form = new IncomingForm()
  
    form.on('file', (field, file) => {
      // Do something with the file
      // e.g. save it to the database
      // you can access it using file.path
    })
    form.on('end', () => {
      res.json()
    })
    form.parse(req)
  });

module.exports = router;