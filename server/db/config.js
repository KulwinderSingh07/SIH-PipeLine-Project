const mongoose=require('mongoose');
require('dotenv').config();
const connectiontodb=mongoose.connect(process.env.MONGO_ATLAS_CONNECTION_STRING,{
    dbName:'SIH-Pipeline-Project'
});
module.exports=connectiontodb;