const express = require('express');
const { getEverything } = require('../controllers/news');

const router = express.Router();

router.get('/', getEverything);

module.exports = router;
