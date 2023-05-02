const express = require("express");
const router = express.Router();
const {register,login,getAllPatients,getUnregPatients} = require('../controller/UserAuthCont')
const jwt = require('jsonwebtoken')
require('dotenv').config()



// routes to POST api to register user in database.  link: http://localhost:{PORT}/user/register
router.post('/register',register)

// routes to POST api to login user. link: http://localhost:{PORT}/user/login
router.post('/login',login);

router.get('/getAllPatient',getAllPatients)

router.get("/getUnregPat",getUnregPatients)

module.exports = router