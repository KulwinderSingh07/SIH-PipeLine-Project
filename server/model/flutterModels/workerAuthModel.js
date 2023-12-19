const mongoose = require('mongoose');
const workerAuthSchema = new mongoose.Schema({
    workerID:{
        required:true,
        type:String
    },
    pipeLocationID:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    }
},{collection: 'WorkerCollection'});

module.exports = mongoose.model('WorkerAuthSchema',workerAuthSchema);