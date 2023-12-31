
// function composition
var compose = function(functions) {
	return function(x) {
        if(functions.length===0){
            return x;
        }
        
    

        return functions.reduceRight((acc,fn)=>fn(acc),x);

        
    }
};


// length of arg passed
var argumentsLength = function(...args) {
    return args.length;
 
};

// allow one function call
var once = function(fn) {
    let called=false;
    
    
    return function(...args){
         if(called) return;
         called=true;
       
       return( fn(...args))
     
    }
};

// memoize
function memoize(fn) {
    //hashmap
    // key stringified args  and val == function result
    let cache={
      };
    return function(...args) {
        const key =JSON.stringify(args);
        if(key in cache){
            return cache[key];
        }
        cache[key]=fn(...args);
        return cache[key];

        
    }
}
//decorator design pattern