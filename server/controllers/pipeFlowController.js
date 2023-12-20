const locationModel = require("../model/locationModel")
const pipelineFlowModel = require("../model/pipelineFlowModel")

const feetchPipedataForOneDay=async(req,res)=>{
    try{
        console.log(req.body)
        const pipeFlowArr=await pipelineFlowModel.find({node_name:req.body.junctionName})
        if(!pipeFlowArr) return res.json({msg:"Didn/t ere"})
        console.log(new Date().getDate())
        let dataArr=[]
        let labelArr=[]
        let newArr=[]
        const oneDayAgo = new Date();
        const currentDate = new Date();
        oneDayAgo.setDate(currentDate.getDate()-1);

        console.log(currentDate.getDate())
        console.log(oneDayAgo.getDate())
        for(let index in pipeFlowArr){
            let day=pipeFlowArr[index].timestamp.getDate()
            let month=pipeFlowArr[index].timestamp.getMonth()
            let year=pipeFlowArr[index].timestamp.getFullYear()
            if((oneDayAgo.getDate()==day || day==currentDate.getDate()) && month==oneDayAgo.getMonth() && year==oneDayAgo.getFullYear()){
                let xlab=`${pipeFlowArr[index].timestamp.getHours()}:${pipeFlowArr[index].timestamp.getMinutes()}`
                // labelArr.push(pipeFlowArr[index].timestamp.getHours())
                labelArr.push(xlab)
                dataArr.push(pipeFlowArr[index].flow_rate)
                // let obj={x:pipeFlowArr[index].timestamp.getHours(),y:pipeFlowArr[index].flow_rate}
                // newArr.push(obj)
            }
        }
        return  res.json({
            labels:labelArr,
        datasets:[{
        label: req.body.junctionName,
        data:dataArr,
        }],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
    })
    }catch(err){
        res.json({
            message:err.message
        })
    }
}

const fetchPipesdataForWeek=async(req,res)=>{
    try{
        console.log(req.body)
        const pipeFlowArr=await pipelineFlowModel.find({node_name:req.body.junctionName})
        if(!pipeFlowArr) return res.json({msg:"Didn/t ere"})
        console.log(new Date().getDate())
        let newArr=[]
        const oneDayAgo = new Date();
        const currentDate = new Date();
        oneDayAgo.setDate(currentDate.getDate()-7);

        console.log(currentDate.getDate())
        console.log(oneDayAgo.getDate())
        for(let index in pipeFlowArr){
            let day=pipeFlowArr[index].timestamp.getDate()
            let month=pipeFlowArr[index].timestamp.getMonth()
            let year=pipeFlowArr[index].timestamp.getFullYear()

            if(day>=oneDayAgo.getDate() && day<=currentDate.getDate()){


                
            }

            if((oneDayAgo.getDate()==day || day==currentDate.getDate()) && month==oneDayAgo.getMonth() && year==oneDayAgo.getFullYear()){
                let obj={x:pipeFlowArr[index].timestamp.getUTCMilliseconds(),y:pipeFlowArr[index].flow_rate}
                newArr.push(obj)
            }
        }
        return  res.json({
        datasets:[{
        label: req.body.junctionName,
        data:newArr,
        }],
        borderColor: 'rgb(255, 99, 132)',
         backgroundColor: 'rgba(255, 99, 132, 0.5)',
    })

    }catch(err){
        res.json({
            msg:err.message
        })
    }
}

// const fetAllPipeFlow=async(req,res)=>{
//     try{
//         const AllPipeFlowArr=await pipelineFlowModel.find()





//     }catch(err){
//         res.json(err.message)
//     }
// }
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
module.exports={feetchPipedataForOneDay,createPipeFlow,fetchPipesdataForWeek}