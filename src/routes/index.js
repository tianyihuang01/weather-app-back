const express = require('express');
const weatherRoute = require('./weather');
const cityRoute = require('./cities');
const newsRoute = require('./news');

const router = express.Router();

router.use('/weather', weatherRoute);
router.use('/cities', cityRoute);
router.use('/news', newsRoute);

module.exports = router;
