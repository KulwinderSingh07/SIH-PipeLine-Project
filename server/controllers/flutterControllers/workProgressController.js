const workProgressModel = require('../../model/flutterModels/workProgessModel');

const updateBoxes = async(req,res)=>{
    console.log(req.body);

    let {workerID,superVisorID,stageName} = req.body;

    const findData = await workProgressModel.findOne({workerID:workerID,superVisorID:superVisorID});
    console.log('Before Updation :\n',findData);

    if(stageName == "stageOne"){
        if(findData.stageOne==false){
            findData.stageOne = true;
            findData.currentProgressPercent += 20;
        }else{
            findData.stageOne= false;
            findData.currentProgressPercent -= 20;
        }
    }else if(stageName == "stageTwo"){
        if(findData.stageTwo==false){
            findData.stageTwo = true;
            findData.currentProgressPercent += 20;
        }else{
            findData.stageTwo= false;
            findData.currentProgressPercent -= 20;
        }
    }else if(stageName == "stageThree"){
        if(findData.stageThree==false){
            findData.stageThree = true;
            findData.currentProgressPercent += 20;
        }else{
            findData.stageThree= false;
            findData.currentProgressPercent -= 20;
        }
    }else if(stageName == "stageFour"){
        if(findData.stageFour==false){
            findData.stageFour = true;
            findData.currentProgressPercent += 20;
        }else{
            findData.stageFour = false;
            findData.currentProgressPercent -= 20;
        }
    }

    await findData.save();

    console.log('After Updation :\n',findData);

    //send Backdata
    return res.json({backendData:findData});
}

const fetchProgress = async(req,res)=>{
    let {workerID,superVisorID} = req.body;

    const findData = await workProgressModel.findOne({workerID,superVisorID});

    return res.json({backendData:findData});
}

module.exports = {updateBoxes,fetchProgress};