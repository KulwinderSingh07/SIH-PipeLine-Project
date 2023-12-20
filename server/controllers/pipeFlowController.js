const locationModel = require("../model/locationModel")
const pipelineFlowModel = require("../model/pipelineFlowModel")

const fetchPipeFlow=async(req,res)=>{
    try{
        console.log(req.body)
        // const pipeflow=await pipelineFlowModel.find()
        // console.log(pipeflow)
        const pipeFlowArr=await pipelineFlowModel.find({node_name:req.body.junctionName})
        let newArr=[]
        let currdate=new Date().toDateString()
        // let count=0;
        for(let index in pipeFlowArr){
            // if(count==99){
            //     break;
            // }
            // count++;
            console.log(pipeFlowArr[index])
                let obj={x:pipeFlowArr[index].timestamp,y:pipeFlowArr[index].flow_rate}
                newArr.push(obj)
        }
      return  res.json({
        datasets:[{
        label: req.body.junctionName,
        data:newArr,
        }],
        borderColor: 'rgb(23, 152, 225)',
        backgroundColor: 'rgba(13, 142, 225, 0.5)',
    }
        )
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