const nodemailer = require('nodemailer');

//dotenv
require('dotenv').config();

const sendMailFn = async(req,res)=>{
    const {to,subject,text} = req.body;
    const transport = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"simar9389@gmail.com",
            pass:process.env.GMAIL_APP_PASSWORD
        }
    });
    
    const mailOptions = {
        from:"simar9389@gmail.com",
        to:to,
        subject:subject,
        text:text
    }
    
    transport.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error);
        }else{
            console.log("Email sent: ",info.response);
        }
    })
    
    return res.json({msg:"Mail sent"});
}

module.exports = {sendMailFn};


