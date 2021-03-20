const express = require('express');
const router = express.Router();

const { setBadges, getBadges } = require('../controllers/Badges');

router.route("/setbadges").post(setBadges);

router.route("/getbadges").post(getBadges);

module.exports = router;
