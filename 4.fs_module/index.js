const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'store');
// Create file
const filePath = `${dirPath}/file.txt`;

// fs.writeFileSync(filePath , "CRUD using cmd line");

// fs.writeFileSync(dirPath + "/crud.txt","CRUD using cmd line");

// Read file
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log("Reading File...",item)
// });

// Update file
// fs.appendFile(filePath," we can use crud operation by cmd line",(err)=>{
//     if (!err)console.warn("file is updated");
// })

// Rename file
fs.rename(filePath, `${dirPath}/write.txt`, (err) => {
    if (!err) console.log("file is renamed");
});

// Delete the file
// fs.unlinkSync(`${dirPath}/write.txt`);