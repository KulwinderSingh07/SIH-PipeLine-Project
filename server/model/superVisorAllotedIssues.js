const mongoose = require('mongoose');
const superVisorAllotedIssuesSchema = new mongoose.Schema({
    superVisorName:{
        type:String,
        required:true
    },
    superVisorID:{
        type: String,
        require:true
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
    stageOne:{
        type:Boolean,
        default:false
    },
    stageTwo:{
        type:Boolean,
        default:false
    },
    stageThree:{
        type:Boolean,
        default:false
    },
    stageFour:{
        type:Boolean,
        default:false
    },
    stageFive:{
        type:Boolean,
        default:false
    },
    verificationSent:{
        type:Boolean,
        default:false
    },
    progressBar:{
        type:Number
    }

},{collection: 'superVisorAllotedIssuesSchema'});

module.exports = mongoose.model('superVisorAllotedIssuesSchema',superVisorAllotedIssuesSchema);