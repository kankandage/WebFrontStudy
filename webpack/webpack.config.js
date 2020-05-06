const path = requrie('path');
module.export = {
    //入口文件
    entry:'./src/app.js',
    //输出
    output:{
        //地址
        path:path.resolve(_dirname,'dist'),
        //文件名
        filename:'main.js'
    }
};