//dotenv
require('dotenv').config();

const twilioClient = require('twilio')(process.env.TWILIO_ACCOUNT_SID,process.env.TWILIO_AUTH_TOKEN);

const sendMessage = async(req,res)=>{
    const {msg} = req.body;
    twilioClient.messages.create({
        from:'whatsapp:+14155238886',
        body:msg,
        to:'whatsapp:+918427204228'
    }).then(message => console.log('Twilio Msg ID is:',message.sid));

    return res.json({msg:"Twilio msg sent"});
}

module.exports = {sendMessage};