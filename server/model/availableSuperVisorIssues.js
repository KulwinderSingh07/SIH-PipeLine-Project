const mongoose = require('mongoose');
const availableSuperVisorIssuesSchema = new mongoose.Schema({
    superVisorName:{
        type:String,
        required:true
    },
    pipeLocationID:{
        required:true,
        type:String
    },
    issueType:{
        type:String,
        enum:['Clogging','Pipe Break','Water Quality']
    },
    issueDateTime:{
        type:String,
    },
},{collection: 'availableSuperVisorIssuesSchema'});

module.exports = mongoose.model('availableSuperVisorIssuesSchema',availableSuperVisorIssuesSchema);