const express = require('express');
const weatherRoute = require('./weather');
const cityRoute = require('./cities');

const router = express.Router();

router.use('/weather', weatherRoute);
router.use('/cities', cityRoute);

module.exports = router;
