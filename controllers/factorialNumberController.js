const joi=require("joi");

const factorial= require("../services/factorialNumber");


const validateNumber=joi.object({
input:joi.number().required().greater(1)
});



module.exports={
    factorialNum: async (req,res)=>{
        try {
            const validateNum = await validateNumber.validateAsync(request.body);
            if(validateNum){
                response.send(error);
            }
            const result= await factorial.factorialNum(validateNum);
            response.send(result);
        } catch (error) {
            response.send(error);
        }
    }
}