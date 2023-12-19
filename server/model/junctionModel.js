const mongoose = require('mongoose');
const junctionSchema = new mongoose.Schema({
    junctionName:{
        type:String,
        required:true
    },
    selected:{        
        type:Boolean,
        default:false
    },
    coordinates:{
    required:true,
    type:[Number]
    },
    issues_pending:{
        type:Number
    },
    isuues_resolved:{
        type:Number   
    },
    water_quality_index:{
        type:Number
    }
})

module.exports = mongoose.model('JunctionModel',junctionSchema); 