const express = require('express');
const router = express.Router();

//controllers imported
const {sendMailFn} = require('../controllers/nodeMailerController');

router.post('/sendMail',sendMailFn);

module.exports = router;