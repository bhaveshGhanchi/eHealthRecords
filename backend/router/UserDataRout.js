const express = require("express");
const router = express.Router();
const {registerPatient} = require('../controller/UserDataCont')
const {UserDataMW} = require('../middleware/UserDataMW')
router.post('/register',UserDataMW.any(),registerPatient)

module.exports = router;