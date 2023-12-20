const nodeModel = require('../model/nodeModel');
const fetchAllChildNodes=async(req,res)=>{
    const allChildNodes=await nodeModel.find()
    console.log(allChildNodes)
    const filteredChildNodes=allChildNodes.filter((node)=>{
        if(node.node_name!=undefined  && !node.node_name.startsWith("junction")){
            return node
        }
    })
    res.json(filteredChildNodes)
}
module.exports={fetchAllChildNodes}