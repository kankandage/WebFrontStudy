
var fs = require('fs');


var filedir = './kankan/source';

fs.watch(filedir,(ev,file)=>{
    //console.log(ev + '/' + file) //这里不需要判断file是否有内容

    fs.readdir(filedir,()=>{
        var arr = [];
        dataList.forEach(f => {
            var info = f.statSync(filedir + '/' + f);
        });
    })
})