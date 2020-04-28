class Event{
    constructor(){
        this.handlers = {};//记录所有事件及处理函数
        /*
            {
                click:[fn1,fn2]
                mouseover:[fn3,fn4]
            }
        */
    }
    //on 添加事件监听
    // type 事件类型
    // handler 事件处理
    on(type,handler,once = false){
        if(!this.handlers[type]){
            this.handlers[type] = [];
        }

        if(!this.handlers[type].includes(handler)){
            this.handlers[type].push(handler);
            handler.once = once;
        }
        
    };

    //off 取消事件监听
    off(type,handler){
        if(this.handlers[type]){
            if(handler === undefined){
                this.handlers[type] = [];
            }else{
                this.handlers[type] = this.handlers[type].filter(f => f != handler)
            }
        }
    };

    //type 要执行的函数
    //eventData 事件对象
    // point this执行
    trigger(type,eventData = {},point=this){
        if(this.handlers[type]){
            this.handlers[type].forEach(f =>{
                f.call(point,eventData);
                if(f.once){
                    this.off(type.f)
                }
            })
        }
    }

    once(type,handler){
        this.on(type,hanlder,true);
    }
}