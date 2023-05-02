const express = require("express");
const router = express.Router();
const {registerPatient,GetPatientData,AddPres,AddBill} = require('../controller/UserDataCont')
const {UserDataMW} = require('../middleware/UserDataMW');

router.post('/register',UserDataMW.any(),registerPatient);
router.get('/GetPatientDetails/:id',GetPatientData);
router.put('/AddPresc',AddPres);
router.put("/AddBill",AddBill);


module.exports = router;