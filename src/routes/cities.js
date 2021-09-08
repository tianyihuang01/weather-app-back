const express = require('express');
const { getCityByCityId, getCityByField } = require('../controllers/cities');

const router = express.Router();

router.get('/:id', getCityByCityId);
router.get('/', getCityByField);

module.exports = router;
