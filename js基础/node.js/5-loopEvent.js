 
 //事件循环
 const eventLoop = {
    queue:[],

    loop(){
        //检测未处理的消息
        while(this.queue.length){
            //shift 删除第一个元素
            var callback = this.queue.shift();
            callback();
        }

        setTimeout(this.loop.bind(this),500);
    },

    //添加函数
    add(callback){
        this.queue.push(callback);
    }
 }

 eventLoop.loop();

 setTimeout(()=>{
     eventLoop.add(function () {
         console.log(1);
     })
 },500)

 setTimeout(()=>{
    eventLoop.add(function () {
        console.log(2);
    })
},800)