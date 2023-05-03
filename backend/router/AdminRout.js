const express = require("express");
const router = express.Router();
const {AddPatient,AddDoctor,getAllDoctors} = require('../controller/AdminCont')

router.post('/addPatient',AddPatient);
router.post('/addDoctor',AddDoctor);
router.get('/getDoctors',getAllDoctors)


module.exports = router;