const workerAuthModel = require('../../model/flutterModels/workerAuthModel');
const workProgressModel = require('../../model/flutterModels/workProgessModel');

const logInController = async(req,res)=>{
    const {workerID,password,pipeLocationID} = req.body;
    // console.log('Flutter Data:',req.body);

    //check if these are present inside the db, if not then return the message that not present inside DB
    const user = await workerAuthModel.findOne({workerID:workerID,password:password,pipeLocationID:pipeLocationID});

    if(!user){
        return res.json({msg:'User not found in DB'});
    }else{
        //If user found in DB then send his currentProgress with stages
        let currentProgress = await workProgressModel.findOne({workerID:workerID,pipeLocationID:pipeLocationID});
        if(!currentProgress){
            currentProgress = {superVisorID:'None',workerName:'None',superVisorName:'None',workerID,pipeLocationID,currentProgressPercent:0,stageOne:false,stageTwo:false,stageThree:false,stageFour:false,stageFive:false};
        }
        return res.json({msg:'User found in DB',user:user,currentProgress:currentProgress});
    }
}

module.exports={logInController};