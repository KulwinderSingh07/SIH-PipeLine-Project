const cron=require('node-cron')
const axios = require('axios');
const nodecrondata=async(req,res)=>{
    cron.schedule("*/4 * * * * *", async function() {
        const flucutationdata=await axios.get("http://localhost:8000//api/get_data")
        console.log(flucutationdata)
        res.json({
            data:flucutationdata
        })
      });
}
module.exports={nodecrondata}