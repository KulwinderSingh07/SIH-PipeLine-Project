const selectedModel = require('../model/selectedPipes');

const fetchAllSelectedPipes = async(req,res)=>{
    const allSelected = await selectedModel.find();
    if(allSelected.length==0){
        return res.json({allSelected:[]});
    }
    res.json({allSelected:allSelected});
}

module.exports = {fetchAllSelectedPipes};