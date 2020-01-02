const http = require("http");


http.
    createServer(function (request, respond) {
        respond.writeHead(200),
        respond.end("hello");
    })
    .listen(3000);