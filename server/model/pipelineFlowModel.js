const mongoose = require('mongoose');
const pipeFlowSchema = new mongoose.Schema({
    node_name: {
        type:String,
        required: true
    },
    flow_rate:{
        type:Number,
        required:true
    },
    timestamp:{
        type:Date,
        default:new Date()
    }
})

module.exports = mongoose.model('pipeFlowModel',pipeFlowSchema);