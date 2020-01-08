
const http = require('http');
const url = require("url");
const fs = require('fs');
const querystring = require("querystring");

const game = require("./game")

let playWon = 0;

let playerLastAction = null;
let sameCount = 0;

http
    .createServer(function(requset,response){
        const parseUrl = url.parse(requset.url);
        if(requset.url == "./favicon.ico"){
            response.writeHead(200);
            response.end();
            return;
        }
        
        if(parseUrl.pathname == "/game"){
            const query = querystring.parse(parseUrl.query);
            const playerAction = query.action;

            const gameResult = game(playerAction);

            if(playerAction >=3){
                response.writeHead(500);
                response.end("我在也不跟你玩了");
            }

            response.writeHead(200);
            if(gameResult == 0){
                response.end("平局！");
            }else if(gameResult == 1){
                playWon++;
                response.end("你赢了！");
            }else{
                response.end("你输了");
            }
            response.end();

            console.log(playerAction);

        }

        if(requset.url == "/"){
            fs.createReadStream("../node.js/html/1.html").pipe(response);
        }
    })
    .listen(3000)//监听端口
