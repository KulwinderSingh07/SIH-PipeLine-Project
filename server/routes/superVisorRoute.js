const express = require('express');
const router = express.Router();

//controllers imported
const {fetchAvailableSuperVisorIssues,fetchAllottedSuperVisorIssues} = require('../controllers/superVisorControllers/superVisorController');

router.get('/fetchAvailableSuperVisorIssues',fetchAvailableSuperVisorIssues);
router.get('/fetchAllotedSuperVisorIssues',fetchAllottedSuperVisorIssues);

module.exports = router;