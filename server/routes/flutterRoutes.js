const express = require('express');
const router = express.Router();

//controllers imported
const {logInController} = require('../controllers/flutterControllers/logInController');
const {updateBoxes,fetchProgress} = require('../controllers/flutterControllers/workProgressController');
const {theftMailerController} = require('../controllers/flutterControllers/theftMailer');

router.post('/workerLogIn',logInController);
router.post('/workProgress',updateBoxes);
router.post('/fetchProgress',updateBoxes);
router.post('/theftMailer',theftMailerController);

module.exports = router;