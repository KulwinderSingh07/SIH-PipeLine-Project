const express = require('express');
const router = express.Router();

//controllers imported
const {getObjLocation} = require('../controllers/locationController');

router.post('/getObjLocation',getObjLocation);

module.exports = router;