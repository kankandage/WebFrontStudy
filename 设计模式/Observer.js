//包含消息容器 三个方法 订阅 on 取消 off  发送subscribe
const  Obersver =(function (){
    //防止消息队列暴露而篡改，将消息容器设置为私有变量
    let _message = {};
    return{
        //注册消息
        on:function (type,fn) {
            //如果消息不存在
            if(typeof  _message[type] === "undefined"){
                //将执行方法推入该消息对应的执行队列中
                _message[type] = [fn];
            }else{
                //如果消息存在，直接将该执行方法推入该消息队列
                _message.push(fn);
            }
        },
        //发布消息
        subscribe:function (type,args){
            //消息没有注册，直接返回
            if(!_message[type]) return;
            //定义消息信息
            let event ={
                type:type,
                args:args ||{}
            };
            for(let i= 0;i<_message[type].length;i++){
                //依次执行注册消息的对应方法
                message[type][i].call(this,event);
            }
        },
        //移除消息
        off:function (type,fn) {
            //入锅消息执行队列存在
            if(_message[type] instanceof Array){
                //从最后一条依次遍历
                for(let i =_message[type].length;i >= 0;i--){
                    //如果改变执行函数则移除相对应的动作
                    _message[type][i] === fn && _message[type].splice(i,1);
                }
            }
        }
    }
})();

//订阅消息
Observe.on('say', function (data) {
    console.log(data.args.text);
});
Observe.on('success',function () {
    console.log('success')
});

//发布消息
Observe.subscribe('say', { text : 'hello world' } )
Observe.subscribe('success');