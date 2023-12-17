const express = require('express');
const app = express();
const cors = require('cors');

//Middlewares
app.use(express.json());
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST","DELETE"],
    credentials:true
}));

//connection to db
require('./db/config');

//routers
const pipelineRouter = require('./routes/currentPipelineRoute');
const locationRouter = require('./routes/locationRoute');
const selectedRouter = require('./routes/selectRoute');
const msgRouter = require('./routes/whatsappMsgRoute');
const mailRouter = require('./routes/nodeMailerRoute');
const anomalityRouter = require('./routes/anomalityRoute');

app.use('/pipeline',pipelineRouter);
app.use('/location',locationRouter);
app.use('/selected',selectedRouter);
app.use('/twilio',msgRouter);
app.use('/mail',mailRouter);
app.use('/anomality',anomalityRouter);

app.get('/',(req,res)=>{
    return res.send('Backend is running...');
})

app.listen((4000),()=>{
    console.log('Listening on port 4000...');
})