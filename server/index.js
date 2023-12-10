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
const selectedRoute = require('./routes/selectRoute');

app.use('/pipeline',pipelineRouter);
app.use('/location',locationRouter);
app.use('/selected',selectedRoute);

app.get('/',(req,res)=>{
    return res.send('Backend is running...');
})

app.listen((4000),()=>{
    console.log('Listening on port 4000...');
})