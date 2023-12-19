const mongoose = require('mongoose');
const workProgressSchema = new mongoose.Schema({
    workerID:{
        required:true,
        type:String
    },
    superVisorID:{
        required:true,
        type:String
    },
    workerName:{
        required:true,
        type:String
    },
    superVisorName:{
        required:true,
        type:String
    },
    pipeLocationID:{
        required:true,
        type:String
    },
    currentProgressPercent:{
        required:true,
        type:Number
    },
    stageOne:{
        required:true,
        type:Boolean
    },
    stageTwo:{
        required:true,
        type:Boolean
    },
    stageThree:{
        required:true,
        type:Boolean
    },
    stageFour:{
        required:true,
        type:Boolean
    },
    stageFive:{
        required:true,
        type:Boolean
    },
},{collection: 'WorkProgressCollection'});

module.exports = mongoose.model('workProgressSchema',workProgressSchema);