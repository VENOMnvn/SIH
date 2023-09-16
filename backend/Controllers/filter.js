const user = require("../MongoDB/UserSchema");
const ProfessionModel = require('../MongoDB/professionSchema');

const filterFunction = async (req,res)=>{
     const {occupation,Location,Category} = req.body;
     try{
         const result = await ProfessionModel.find({Category,Location}).populate("userid");
         res.send({
         result
         });
       
     }
     catch(err){
      console.log(err);
        res.send({
            err,
            result:"Error occured"
        })
     }    
}

module.exports = filterFunction;