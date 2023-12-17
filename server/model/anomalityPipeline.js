const mongoose = require('mongoose');
const anomalitySchema = new mongoose.Schema({
    pipeId: {
        required: true,
        type:String
    }, 
    anomalityLocLat:{
        type:Number
    },
    anomalityLocLong:{
        type:Number
    },
    anomalityType:{
        type:String,
        required:true
    },
    timeStamp:{
        type:Date,
        default:new Date()
    },
    status:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('anomalityModel',anomalitySchema);