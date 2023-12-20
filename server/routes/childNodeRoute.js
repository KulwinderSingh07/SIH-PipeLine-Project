const express = require('express');
const router = express.Router();

//controllers imported
const {fetchAllChildNodes} = require('../controllers/nodescontroller');

router.get('/getAllChildNodes',fetchAllChildNodes);

module.exports = router;