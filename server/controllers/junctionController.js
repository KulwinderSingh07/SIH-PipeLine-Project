const junctionModel = require('../model/junctionModel');

const fetchAllJunctions=async(req,res)=>{
    const Alljunctions=await junctionModel.find()
    res.json(Alljunctions)
}
module.exports={fetchAllJunctions}