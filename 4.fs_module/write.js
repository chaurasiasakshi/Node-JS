const fs = require('fs');

// Synchronous File
// fs.writeFileSync("write.txt","File Module Using Write Method ")
// console.log("Done");

// Asynchronous File
// fs.writeFile("filename","data","callbackFunction"()=>{})

fs.writeFile("Asyn_write.txt","Asynchronous execution doesn’t wait for the task to complete and can move on to the next task.  also known as “non-blocking”.",function(err){
    if (err){
        console.log("error occured",err);
    }else{
        console.log("file created");
    }
});

console.log("First Print");