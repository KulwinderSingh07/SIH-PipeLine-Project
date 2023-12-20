const express = require('express');
const router = express.Router();

//controllers imported
const {nodecrondata} = require('../controllers/nodecroncontroller');


router.post('/getRealOutput',nodecrondata);


module.exports = router;