import http from 'http';

function dateControl (req,resp)
{
    resp.write("<h1>Hello this my NODE server</h1>");
    resp.end();
}

http.createServer(dateControl).listen(4500);
