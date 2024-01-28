const fs = require("fs");

// Synchronous File
// fs.renameSync("write.txt","synchronously.txt");

// if(fs.existsSync("file.txt")){
//     fs.renameSync("file.txt","myfile.txt");
//     console.log("renamed!!!");
// }else{
//     console.log("file not found");
// }

// Asynchronous File
fs.rename("myfile.txt","rfile.txt",(err)=>{
    if(err) throw err;
    console.log("renamed this file!!");
});
