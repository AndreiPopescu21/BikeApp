const express = require('express');
const router = express.Router();

const { setFitness, getFitness, checkInfo } = require('../controllers/Fitness');

router.route("/setfitness").post(setFitness);

router.route("/getfitness").post(getFitness);

router.route("/checkinfo").post(checkInfo);

module.exports = router;
