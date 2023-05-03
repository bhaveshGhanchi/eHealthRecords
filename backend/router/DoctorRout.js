const express = require("express");
const router = express.Router();
const {getDoctorData, AddEdu,AddWork} = require('../controller/DoctorDataCont');


router.get('/GetDoctorDetails/:id',getDoctorData);
router.put('/addEdu',AddEdu);
router.put('/addWork',AddWork);


module.exports = router;