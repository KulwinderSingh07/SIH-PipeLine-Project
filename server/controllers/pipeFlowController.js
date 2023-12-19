const locationModel = require("../model/locationModel")
const pipelineFlowModel = require("../model/pipelineFlowModel")

const fetchPipeFlow=async(req,res)=>{
    try{
        console.log(req.body)
        const JunctionObj=await locationModel.findOne({name:req.body.junctionName})
        console.log(JunctionObj)
        const PipeFlowArr=await pipelineFlowModel.find({junctionId:JunctionObj._id})
        const dataPropForLineChart={
            label: req.body.junctionName,
            data:[],
            borderColor: 'rgb(23, 152, 225)',
            backgroundColor: 'rgba(13, 142, 225, 0.5)',
          }
         const newDataset=PipeFlowArr.map((instanceFlow)=>{
            return {x:instanceFlow.checkEpoch,y:instanceFlow.flowrate}
          })
          dataPropForLineChart.data=newDataset
          console.log(dataPropForLineChart)
        res.json({
            flowdata:dataPropForLineChart
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