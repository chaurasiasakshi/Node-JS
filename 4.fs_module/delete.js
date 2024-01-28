const fs = require("fs");

// fs.unlink() //Asynchronous
// fs.unlinkSync() //Synchronous

// fs.unlinkSync("11write.txt");

// try{
//     fs.unlinkSync("22write.txt")
// }
// catch(err){
//     console.log("error")}

fs.unlink("2write.txt",function(err){
    if (err) throw err;
    console.log("deleted successfully");
})