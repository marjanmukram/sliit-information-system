const express = require('express')
const router = express.Router()
const Admin = require('../models/Admin')
var send_mail = require('../external_service/send_mail'); 

// Add an admin details using POST method
// http://localhost:4000/api/admin/add & Request Body
router.post('/add', (req,res) => {
    const admin = new Admin(req.body);
    admin.save()
        .then(() => {
            res.status(200).send({"message":"Successfully added admin"});
            console.log(req.body.email, req.body.regId, req.body.password)
            send_mail.mail(req.body.email, req.body.regId, req.body.password);
        })
        .catch((err) => {res.status(400).send({"message":err})
    console.log(err)})
});

// Get admins details using GET method
// http://localhost:4000/api/admin/get
router.get('/get', (req,res) => {
    Admin.find()
        .then((admin) => {
            if(!admin.length){
                res.status(400).send({"message":"error"});
            } else{
                res.status(200).json(admin).send({"message":"Successfully retrived","data":admin});
            }
        })
});

// Get an admin details using GET method
// http://localhost:4000/api/admin/get/ + id
router.get('/get/:id', (req,res) => {
    Admin.findById(req.params.id)
        .then((admin) => {
            if(admin.length){
                res.status(400).send({"message":"error"});
            } else{
                res.status(200).json(admin).send({"message":"Successfully retrived","data":admin});
            }
    })
});

// Get an admin details using GET method
// http://localhost:4000/api/admin/getByReg/ + regId
router.get('/getByReg/:regId', (req,res) => {
    Admin.find({'regId':req.params.regId})
        .then((admin) => {
            if(!admin.length){
                res.status(400).send({"message":"error"});
            } else{
                res.status(200).json(admin).send({"message":"Successfully retrived","data":admin});
            }
        })
});

// Update an admin details using PUT method
// http://localhost:4000/api/admin/update + id
router.put('/update/:id', (req,res) => {
    Admin.updateOne({'_id':req.params.id},req.body)
        .then((admin) => res.status(200).send({"message":"Successfully updated","data":admin}))
        .catch((err) => res.status(400).send({"message":err}))
});

// Update an admin details using PUT method FOR PASSWORD RESET FUNCTION
// http://localhost:4000/api/admin/updatePassword + id
router.put('/updatePassword/:id', (req,res) => {
    Admin.updateOne({'_id':req.params.id},req.body)
        .then((admin) =>{ 
            console.log(req.body.email, req.body.regId, req.body.password)
            res.status(200).send({"message":"Successfully updated","data":admin})
            send_mail.mail(req.body.email, req.body.regId, req.body.password);
        })
        .catch((err) => res.status(400).send({"message":err}))
});


// Delete an admin details using DELETE method
// http://localhost:4000/api/admin/delete + id
router.delete('/delete/:regId', (req,res) => {
    Admin.deleteOne({'regId':req.params.regId})
        .then((admin) => {
            
            res.status(200).send({"message":"Successfully deleted","data":admin});
        })
        .catch((err) => res.status(400).send({"message":err}))
})

module.exports = router;