const express = require("express");
const router = express.Router();
const {AddPatient} = require('../controller/AdminCont')

router.post('/addPatient',AddPatient);

module.exports = router;