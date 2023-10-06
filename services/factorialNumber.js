module.exports ={
    factorialNum: async (body)=>{
        try {
            var fact=1;
         
           for(var i=body.input;i>=1;i--){
            fact=fact*i;
            return fact;
           }
        } catch (error) {
            return error
        }
    }
}