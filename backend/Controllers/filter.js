const user = require("../MongoDB/UserSchema");

const filterFunction = async (req,res)=>{
     const {profession,location} = req.body;
     try{
         if(profession && location){
            const result = await user.find({"profession":profession,"location":location});
            res.send(result);
         }
         else{
            const result = await user.find({"profession":profession});
            res.send(result);
         }
       
     }
     catch(err){
        res.send({
            err,
            result:"Error occured"
        })
     }
    
     
}

module.exports = filterFunction;