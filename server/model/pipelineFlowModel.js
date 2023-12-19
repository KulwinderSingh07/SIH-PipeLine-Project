const mongoose = require('mongoose');
const pipeFlowSchema = new mongoose.Schema({
    junctionId: {
        type:mongoose.Schema.Types.ObjectId,
        required: true
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