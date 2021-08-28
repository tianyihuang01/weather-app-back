const express = require('express');
const { getOneCall } = require('../controllers/weather');

const router = express.Router();

router.get('/oneCall', getOneCall);

module.exports = router;
