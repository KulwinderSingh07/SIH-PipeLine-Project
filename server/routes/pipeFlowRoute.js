const express = require('express');
const router = express.Router();


const {feetchPipedataForOneDay, createPipeFlow} = require('../controllers/pipeFlowController');

router.post('/getPipeFlow',feetchPipedataForOneDay); 
router.post("/createPipeFlow",createPipeFlow)

module.exports = router;