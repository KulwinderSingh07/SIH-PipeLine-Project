const mongoose = require('mongoose');

const currentPipelinesSchema = new mongoose.Schema({
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

const selectedSchema = new mongoose.Schema({
    currentPipeline : currentPipelinesSchema,
    junction_name:{
        type:String,
        required:true
    },
    startCoordinates:{
        type: [Number]
    },
    endCoordinates:{
        type: [Number]
    },
    endPointName:{
        type:String,
    },
    startPointName:{
        type:String,
    }
},{collection: 'SelectedSchema'});

module.exports = mongoose.model('selectedSchema',selectedSchema);