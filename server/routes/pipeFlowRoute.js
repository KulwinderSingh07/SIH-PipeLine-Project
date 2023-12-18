const express = require('express');
const router = express.Router();


const {fetchPipeFlow, createPipeFlow} = require('../controllers/pipeFlowController');

router.post('/getPipeFlow',fetchPipeFlow);
router.post("/createPipeFlow",createPipeFlow)

module.exports = router;