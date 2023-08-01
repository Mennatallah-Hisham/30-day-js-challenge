// apply transformation

var map = function(arr, fn) {
    let ans=[];
    for(let i=0;i<arr.length;i++){
      ans.push(fn(arr[i],i))
  
  
    }
   return ans;
      
  };


// filter elements
var filter = function(arr, fn) {
    let ans=[];
    for(let i=0;i<arr.length;i++){
      if(fn(arr[i],i)){
        ans.push(arr[i])
      }
    }
      return ans;
  };




// array reduce transformation
var reduce = function(nums, fn, init) {

    for(let i=0;i<nums.length;i++){
    init=fn(init,nums[i]);
    }
  return init;
      
  };