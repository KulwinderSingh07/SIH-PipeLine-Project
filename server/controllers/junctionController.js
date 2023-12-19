const junctionModel = require('../model/junctionModel');

const fetchAllJunctions=async(req,res)=>{
    const Alljunctions=await junctionModel.find()
    res.json(Alljunctions)
}

const fetchSelectedJunctions=async(req,res)=>{
    const selectedJunctions=await junctionModel.find({selected:true
    })
    res.json({
        selectedJunctions:selectedJunctions
    })
}
module.exports={fetchAllJunctions,fetchSelectedJunctions}