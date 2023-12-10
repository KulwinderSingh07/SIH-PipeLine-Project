const mongoose=require('mongoose');
const connectiontodb=mongoose.connect('mongodb://localhost:27017',{
    dbName:'SIH-Pipeline-Project'
});
module.exports=connectiontodb;