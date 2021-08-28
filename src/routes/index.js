const express = require('express');
const weatherRoute = require('./weather');

const router = express.Router();

router.use('/weather', weatherRoute);

module.exports = router;
