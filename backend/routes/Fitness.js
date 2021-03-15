const express = require('express');
const router = express.Router();

const { setFitness, getFitness } = require('../controllers/Fitness');

router.route("/setfitness").post(setFitness);

router.route("/getfitness").post(getFitness);

module.exports = router;
