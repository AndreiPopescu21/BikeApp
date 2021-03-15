const express = require('express');
const router = express.Router();

const { setInformations, getInformations } = require('../controllers/HandleInformations');

router.route("/setinformations").post(setInformations);

router.route("/getinformations").post(getInformations);

module.exports = router;
