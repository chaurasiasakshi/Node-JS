const fs = require("fs");
const http = require("http");


const server = http.createServer();

server.on('request',(req,res)=>{
    var fs = require('fs');
    fs.readFile('input.txt',(err,data)=>{
        if(err)return console.error(err);
        console.log(data.toString());
    });
});

server.listen(4010,"127.0.0.1");