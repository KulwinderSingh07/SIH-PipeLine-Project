const mongoose = require('mongoose');
const pipeFlowSchema = new mongoose.Schema({
    junctionId: {
        required: true,
        type:String
    },
    flowrate:{
        type:Number,
        required:true
    },
    checkEpoch:{
        type:Date,
        default:new Date()
    }
})

module.exports = mongoose.model('pipeFlowModel',pipeFlowSchema);