const express = require('express');
const router = express.Router();

const { getRentZones } = require('../controllers/Rent');

router.route("/rent").post(getRentZones);

module.exports = router;
