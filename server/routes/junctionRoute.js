const express = require('express');
const router = express.Router();

//controllers imported
const {fetchAllJunctions} = require('../controllers/junctionController');

router.get('/getAllJunctions',fetchAllJunctions);

module.exports = router;