const nodemailer = require('nodemailer');

//dotenv
require('dotenv').config();

const theftMailerController = async(req,res)=>{
    const {workerID,superVisorID,superVisorName,pipeLocationID} = req.body;
    
    const transport = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"simar9389@gmail.com",
            pass:process.env.GMAIL_APP_PASSWORD
        }
    });
    
    let date = new Date();

    const mailOptions = {
        from:"simar9389@gmail.com",
        to:"simar9389@gmail.com",
        subject:'Water Theft Alert',
        text:`Water theft reported by [Supervisor-ID : ${superVisorID}][Supervisor-Name : ${superVisorName}] on ${date.toString()} and at [location-ID : ${pipeLocationID}]`
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

module.exports = {theftMailerController};