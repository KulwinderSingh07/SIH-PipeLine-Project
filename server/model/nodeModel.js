const mongoose = require('mongoose');
const nodeSchema = new mongoose.Schema({
    node_name:{
        required:true,
        type:String
    },
    coordinates:{
        required:true,
        type:[Number]
    },
    junction_name:{
        type:String,
        required:true
    },
    selected:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('nodeModel',nodeSchema);