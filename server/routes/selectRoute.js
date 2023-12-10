const express = require('express');
const router = express.Router();

//controllers imported
const {fetchAllSelectedPipes} = require('../controllers/selectedController');

router.get('/getSelectedPipes',fetchAllSelectedPipes);

module.exports = router;