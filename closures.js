// create hello world
var createHelloWorld = function() {
    return function(...args) {
        return"Hello World"
        
    }
};

// counter
var createCounter = function(n) {
    count=n;
     return function() {

         return count++;
         
     };
 };

 //to be or not to be
 var expect = function(val) {
    return {
        toBe:(val2)=>{
            if(val!==val2){
                    throw new Error("Not Equal") ;
           
            }
                 return true;
        

        },
        notToBe:(val2)=>{
             if(val===val2){
                  throw new Error("Equal") ;
               
            }
             return true
              
          

        }
    }
    
};
// counter2
var createCounter = function(init) {
    let current= init;

    return {
        increment:()=> ++current
        ,
        decrement:()=>--current
        ,
        reset:()=> current=init

    }
    
};


