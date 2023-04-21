const express = require("express");
const router = express.Router();
const {registerPatient,GetPatientData} = require('../controller/UserDataCont')
const {UserDataMW} = require('../middleware/UserDataMW');

router.post('/register',UserDataMW.any(),registerPatient);
router.get('/GetPatientDetails/:id',GetPatientData);

module.exports = router;