const pipelineFlowModel = require("../model/pipelineFlowModel")

const fetchPipeFlow=async(req,res)=>{
    try{
        // console.log(req)
        const PipeFlowArr=await pipelineFlowModel.find({junctionId:req.body.junctionId})
        console.log(PipeFlowArr)
        const pipeFlowArr= PipeFlowArr.forEach((pipe)=>{
            console.log(pipe)
        })
        res.json({
            flowdata:PipeFlowArr
        })
       
    }catch(err){
        res.json({
            message:err.message
        })
    }
}
const createPipeFlow=async(req,res)=>{
    try{
        const pipeCreationArr=await pipelineFlowModel.create(req.body)
        res.json({
            pipeFlowArr:pipeCreationArr
        })
    }catch(err){
        res.json({
            message:err.message
        })
    }
}
module.exports={fetchPipeFlow,createPipeFlow}