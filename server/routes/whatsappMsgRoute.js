const express = require('express');
const router = express.Router();

//controllers imported
const {sendMessage} = require('../controllers/whatsappMsgController');

router.post('/sndMsg',sendMessage);

module.exports = router;