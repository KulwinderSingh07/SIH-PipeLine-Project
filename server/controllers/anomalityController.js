const anomalityModel=require("../model/anomalityPipeline")
const anomalityFetcher=async (req,res)=>{
    try{
        const anomalityList=await anomalityModel.find({status:false})
        console.log(anomalityList)
        res.json({  
            anomalityDataArr:anomalityList
        })

    }catch(err){
        res.json({
            message:err.message
        })
    }
}

module.exports={anomalityFetcher}