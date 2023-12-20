const express = require('express');
const app = express();
const http = require('http');
const {Server} = require('socket.io');
const cors = require('cors');

const server = http.createServer(app);
const io = new Server(server);


//Middlewares
app.use(express.json());
app.use(cors({
    origin:["http://localhost:3000","*"],
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
const pipeFlowRoute=require("./routes/pipeFlowRoute")
const juncitonRoutes=require("./routes/junctionRoute")
const flutterRouter = require('./routes/flutterRoutes');
const chronRouter=require("./routes/cronRoutes")
const childNodeRoutes=require("./routes/childNodeRoute");
const  superVisorRouter = require("./routes/superVisorRoute");
const cron=require('node-cron')
const axios = require('axios');

app.use('/pipeline',pipelineRouter);
app.use('/location',locationRouter);
app.use('/selected',selectedRouter);
app.use('/twilio',msgRouter);
app.use('/mail',mailRouter);
app.use('/anomality',anomalityRouter);
app.use("/pipeflow",pipeFlowRoute)
app.use("/junction",juncitonRoutes)
app.use('/flutter',flutterRouter);
app.use("/childnode",childNodeRoutes)
app.use("/superVisor",superVisorRouter);
// app.use("/chron",chronRouter)
// cron.schedule("*/4 * * * * *", async function() {
//     try{
//     const flucutationdata=await axios.get("http://localhost:8000//api/get_data")
//     console.log(flucutationdata.data)
//     io.emit('dataFromServer', flucutationdata.data);
//     }catch(error){
//         console.log(error.message)
//     }
//   });
//   io.on('connection', (socket) => {
//     console.log('A client connected');
  
//     // Send initial data to the connected client if needed
  
//     // Handle disconnection
//     socket.on('disconnect', () => {
//       console.log('A client disconnected');
//     });
//   });



app.get('/',(req,res)=>{
    return res.send('Backend is running...');
})

server.listen((4000),()=>{
    console.log('Listening on port 4000...');
})