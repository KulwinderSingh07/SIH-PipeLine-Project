const availableSuperVisorIssues = require('../../model/availableSuperVisorIssues');
const superVisorAllotedIssuesSchema = require('../../model/superVisorAllotedIssues');

const fetchAvailableSuperVisorIssues = async(req,res)=>{
    const findData = await availableSuperVisorIssues.find({});

    console.log('Backend call at availableSuperVisorIssues');

    return res.json({backendData:findData});
}

const fetchAllottedSuperVisorIssues = async(req,res)=>{
    const findData = await superVisorAllotedIssuesSchema.find({});
    return res.json({backendData:findData});
}

module.exports = {fetchAvailableSuperVisorIssues,fetchAllottedSuperVisorIssues};