const {getPrescData,getTot,getGenderCnt,getMarCnt,getAgeCnt,getResCnt} = require("../controller/Dashboard")
const express = require("express");
const router = express.Router();

router.get('/getPresdata',getPrescData)
router.get('/getCnt',getTot)
router.get('/getGenderCnt',getGenderCnt)
router.get('/getMarCnt',getMarCnt);
router.get('/getAgeCnt',getAgeCnt);
router.get('/getResCnt',getResCnt);

module.exports = router;