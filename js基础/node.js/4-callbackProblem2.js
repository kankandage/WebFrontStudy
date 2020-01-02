

//异步并发
var count = 0;
interview(function (err) {
    if(err){
        return console.log("cry at 1st round");
    }   

    count++;
})

interview(function (err) {
    if(err){
        return console.log("cry at 1st round");
    }
    count++;
})
function interview(callback) {
    setTimeout(() => {
        if(Math.random() < 0.8){
            callback(null,"success");
        }else{
            callback(new Error("fail"));
        }
      
    }, 500);
}