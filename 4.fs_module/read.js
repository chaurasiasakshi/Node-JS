// read file sync
// fs.readFileSync(path)

const fs = require("fs");
// data = fs.readFileSync("Asyn_write.txt")
// console.log(data.toString());

// read file Async
// fs.readFileSync(path,callback)

fs.readFile("write.txt",function(err,data){
    if(err){
        console.log(err);
        return;
    }
        console.log(data.toString());
    
});
console.log("after read file");