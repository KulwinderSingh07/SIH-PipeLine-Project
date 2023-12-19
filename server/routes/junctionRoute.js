const express = require('express');
const router = express.Router();

//controllers imported
const {fetchAllJunctions, fetchSelectedJunctions} = require('../controllers/junctionController');

router.get('/getAllJunctions',fetchAllJunctions).get("/getSelectedJunctions",fetchSelectedJunctions);

module.exports = router;