const http = require("http");

const server = http.createServer((req,resp)=>{
    // console.log(req.url);
    if(req.url == "/"){
    resp.end('hello from server sides');
}else if(req.url=="/about"){
    resp.end("Hello from AboutUS sides");
}
else if(req.url=="/contact"){
    resp.end("Hello from AboutUS sides");
}
else{
    resp.statusCode="404";
    resp.end("Error 404 : Page not found");
}
});

server.listen(8080,()=>{
    console.log("port running on 8000");
});