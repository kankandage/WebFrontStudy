const EventEmitter = require("events").EventEmitter;

class GeekTime extends EventEmitter{
    constructor(){
        super();
        setInterval(() => {
            this.emit("newLesson",{price:Math.random()*100});
        }, 3000);
    }
}

const geekTime = new GeekTime;
geekTime.addListener("newLesson",(res)=>{
    if(res.price < 80){
        console.log("buy!",res);
    }
})