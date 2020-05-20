//http 是应用层协议
//一个网页包含两次http包

//1.http服务
const http = require('http');

http
    .createServer(function(req,res){//requset response
        res.writeHead(200);
        res.end("hello");
    })
    .listen(3000)//监听端口
