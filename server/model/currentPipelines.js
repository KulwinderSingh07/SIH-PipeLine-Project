const mongoose = require('mongoose');
const currentPipelinesSchema = new mongoose.Schema({
    junction_name:{
        type:String,
        required:true
    },
    start_node_name: {
        required: true,
        type:String
    }, 
    end_node_name : {
        required: true,
        type:String
    }, 
    length: {
        type:Number
    },
    diameter : {
        type: Number
    },
    initial_status : {
        type:String
    }, 
    minor_loss: {
        type:Number
    }, 
    selected: {
        type: Boolean
    },
},{collection: 'CurrentPipeline'});

module.exports = mongoose.model('currentPipeLinesSchema',currentPipelinesSchema);