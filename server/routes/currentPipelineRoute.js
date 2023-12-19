const express = require('express');
const router = express.Router();

//controllers imported
const {getCurrentPipelines,selectPipeline, selectAllAreaPipeLines} = require('../controllers/pipelineController');

router.get('/getCurrentPipelines',getCurrentPipelines);
// router.post('/selectPipeline',selectPipeline);
router.post('/selectPipeline',selectAllAreaPipeLines);

module.exports = router;