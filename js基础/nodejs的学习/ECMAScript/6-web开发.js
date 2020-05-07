
/**
 * 1.用户通过浏览器发送一个http的请求到指定的主机
 * 2.服务器接收到该请求，对请求进行分析和处理
 * 3/返回对应的数据到用户机器
 * 4.浏览器接手服务器返回数据，并根据接受到的数据进行分析和处理
 */


 /**
  * 搭建一个http的服务器，用于处理用户发送的请求http请求
  * 
  * 
  */

  var http = require('http');
  var url = require('url');

  var server = http.createServer();

  //请求
  server.on('request',(req,res)=>{
      //req 请求
      //res  返回数据
  });


  //接受信息
  server.on('response',(req,res)=>{
    //req 请求
    //res 
});


//
    server.on('request',(req,res)=>{
        //req.url:访问路径
        console.log(req.url);

        var urlStr = url.parse('');

        switch(urlStr.pathname){
            case '/':
                //首页
                break;
            case '/user':
                //用户界面
                break;
            default:
                break;
        }
    })

    server.listen(8080,'localhost');