
// add two promises

var addTwoPromises = async function(promise1, promise2) {
    return Promise.all([promise1,promise2]).then(values=>values.reduce((acc,val)=>acc+val));
     
 };

 // sleep
 async function sleep(millis) {
    await new Promise(resolve=>setTimeout(resolve, millis))
       
   }