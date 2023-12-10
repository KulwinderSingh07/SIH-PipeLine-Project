const mongoose = require('mongoose');
const locationSchema = new mongoose.Schema({
    location:{
        required:true,
        type:String
    },
    name:{
        required:true,
        type:String
    },
    coordinates:{
        required:true,
        type:[Number]
    }
},{collection: 'Location'});

module.exports = mongoose.model('locationSchema',locationSchema);