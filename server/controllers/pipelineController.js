const pipelineModel= require('../model/currentPipelines');
const selectedModel = require('../model/selectedPipes');
const locationModel = require('../model/locationModel');

const getCurrentPipelines = async(req,res) =>{
    const allPipelines = await pipelineModel.find();

    console.log('All pipelines data:',allPipelines);

    return res.json({allPipelines:allPipelines});
}

const selectPipeline = async(req,res)=>{
    const  {pipeLineObject} = req.body;
    console.log(pipeLineObject);
    const currPipeLine = await pipelineModel.findOne({$and:[{start_node_name:pipeLineObject.start_node_name},{end_node_name:pipeLineObject.end_node_name}]});

    console.log('Found : ',currPipeLine);

    if(!currPipeLine) return res.json({msg:'Object not found in db'});

    if(currPipeLine.selected == true){//means initially was selected
        currPipeLine.selected = false;
    }else{//not selected
        currPipeLine.selected = true;
    }

    //saving the new changes
    await currPipeLine.save();

    //Fetching coordinates from locationDB
    const startObj = await locationModel.findOne({location:pipeLineObject.start_node_name});
    const endObj = await locationModel.findOne({location:pipeLineObject.end_node_name});

    const startCoords = startObj.coordinates;
    const endCoords = endObj.coordinates;

    const startPointName = startObj.name;
    const endPointName = endObj.name;

    //Storing advanced data inside SelectedPipes Model/DB
    const selectObj = {
        currentPipeline: pipeLineObject,
        startCoordinates: startCoords,
        endCoordinates: endCoords,
        startPointName: startPointName,
        endPointName: endPointName
    }

    //check if already present inside the selected
    const findObj = await selectedModel.findOne({$and:[{startPointName:startPointName},{endPointName:endPointName}]});
    if(!findObj){//not found then insert
        const newDoc = new selectedModel(selectObj);
        await newDoc.save();
        console.log('New doc in Selected Model:\n',newDoc);
    }else{
        //delete
        const doc = await selectedModel.deleteOne({$and:[{startPointName:startPointName},{endPointName:endPointName}]});
        console.log('Deleted doc:',doc);
    }

    return res.json({msg:`Made changes succesfully to ${currPipeLine}`});
}

module.exports = {getCurrentPipelines,selectPipeline};