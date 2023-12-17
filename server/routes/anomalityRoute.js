const express = require('express');
const router = express.Router();

//controllers imported
const {anomalityFetcher} = require('../controllers/anomalityController');

router.get('/getAllAnomality',anomalityFetcher);

module.exports = router;