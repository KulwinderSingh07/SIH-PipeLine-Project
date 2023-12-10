const express = require('express');
const router = express.Router();

//controllers imported
const {getCurrentPipelines,selectPipeline} = require('../controllers/pipelineController');

router.get('/getCurrentPipelines',getCurrentPipelines);
router.post('/selectPipeline',selectPipeline);

module.exports = router;