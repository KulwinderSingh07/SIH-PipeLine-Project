const pipelineModel= require('../model/currentPipelines');
const selectedModel = require('../model/selectedPipes');
const locationModel = require('../model/nodeModel');
const areaModel = require('../model/junctionModel');
const junctionModel = require('../model/junctionModel');
const locationmoel=require("../model/nodeModel");
const selectedPipes = require('../model/selectedPipes');
const currentPipelines = require('../model/currentPipelines');
const nodeModel = require('../model/nodeModel');

const getCurrentPipelines = async(req,res) =>{
    const allPipelines = await pipelineModel.find();

    console.log('All pipelines data:',allPipelines);

    return res.json({allPipelines:allPipelines});
}


const selectAllAreaPipeLines=async(req,res)=>{
    try{
        const junctionDetails=req.body
        console.log(junctionDetails)

        const junctionDocument=await junctionModel.findOne({junctionName:junctionDetails.junctionName})

        if(!junctionDocument) return res.json({msg:"Junction not found"})

        let selectionOptions
        if(junctionDocument.selected){
            selectionOptions=false;
        }else{
            selectionOptions=true;
        }

        if(selectionOptions==true){
            const ConnectedPipes=await currentPipelines.find({junction_name:junctionDetails.junctionName})

            const StartNode=await junctionModel.findOne({junctionName:junctionDetails.junctionName})
            for(let index in ConnectedPipes){
              console.log("StartNode",StartNode)
              const EndNode=await nodeModel.findOne({node_name:ConnectedPipes[index].end_node_name})
              EndNode==null?console.log("Faile dto get ende node for ",ConnectedPipes[index].end_node_name):console.log("EndNode",ConnectedPipes[index].end_node_name)
              if(!StartNode || !EndNode){
                continue
              }

                const startCoords = StartNode.coordinates;
                const endCoords = EndNode.coordinates;


                const startPointName = StartNode.junctionName;
                const endPointName = EndNode.node_name;

                //Storing advanced data inside SelectedPipes Model/DB
                const selectObj = {
                    currentPipeline: ConnectedPipes[index],
                    startCoordinates: startCoords,
                    endCoordinates: endCoords,
                    startPointName: startPointName,
                    endPointName: endPointName,
                    junction_name:ConnectedPipes[index].junction_name
                    }
                const newDoc = new selectedModel(selectObj);
                await newDoc.save();
                console.log('New doc in Selected Model:\n',newDoc);
                junctionDocument.selected=selectionOptions

                junctionDocument.save()
            }
           return res.json({msg:"Selected all the pipes lying in the area",
        data:ConnectedPipes})

        }else{
            const deletePipes=await selectedPipes.deleteMany({junction_name:junctionDetails.junctionName}) 
            junctionDocument.selected=selectionOptions

            junctionDocument.save()
            return res.json({msg:"Unselected all the Pipes"})
        }

        

    }catch(err){
        res.json({msg:err.message})
    }
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

module.exports = {getCurrentPipelines,selectPipeline,selectAllAreaPipeLines};