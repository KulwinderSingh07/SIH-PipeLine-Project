const locationModel= require('../model/locationModel');

const getObjLocation = async(req,res) =>{
    const {location} = req.body;
    const locationData = await locationModel.findOne({location:location});

    if(!locationData) return res.json({msg:'Location not found'});

    console.log('Location found is :',locationData);

    return res.json({locationData:locationData});
}

module.exports = {getObjLocation};