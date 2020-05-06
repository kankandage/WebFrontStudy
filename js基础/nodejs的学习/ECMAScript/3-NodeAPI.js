/**
 * global
 *      1._filename:返回当前文件的解析后的绝对路径，不是全局，而是模块作用域下的 文件
 *      2._dirname:返回当前文件所在目录的解析后的绝对路径  不是全局 文件夹
 *      3.  process 进程对象 全局对象 对当前进程进行控制和操作
 */

//  定时器 
//  setInterval(() => {
//      var d = new Date();
//      console.log('现在是' + d.getFullYear() + '年')
//  }, 1000);

/**
 *  process   进程对象
 *     1. process.argv(); //  可以带参运行
 *     2.process.env //运行环境
 *      
 *     3. stdin、stdout 标准输入输出流(IO)
 *          //默认情况下，输入流是关闭的，要监听处理输入流数据，首先要开启输入流
 *          process.stdin.resume()
 *          //监听用户数据
 *          process.stdin.on('data',(chunk)={
 *              
 *          })
 */

 /**
  *     Buffer类：一个更好操作二进制的数据流
  *         //new Buffer(size);size[Number]创建一个Buffer对象，并未这个对象分配一个大小
  *         //当我们为一个Buffer对象分配空间大小以后，其长度固定，不能更改
  *         var bf = new Bufffer(5);
  *         conlosle,log(bf);
  *         bf[1] = 2;
  *         console.log(bf);
  * 
  * 
  *         Buffer.write(写入对象，偏移量，写入的长度，写入字符串的编码)   //
  *         
  *         Buffer.toString();
  * 
  *         Buffer.toJSON();
  *     
  *     类方法：静态方法
  *         BufferisEncoding('编码类型')
  *     
  * 
  *         
  */

  /**
   * 文件系统操作  var fs = require('fs');首先要引用
   *    
   *        1.fs.open('路径'，'打开方式'，'文件的模式'，callback)
   *            -异步版的打开一个文件
   *        2.fs.openSync()
   *            -同步的打开文件
   * 
   *        3.fs.read('fd编号',buffer,offset,length,position,callback);
   *            -  读取文件内容
   * 
   *        4.fs.rradSync();
   *        
   *        5.fs.write('fd编号',buffer:要写入的对象,offset,length,position,callback)
   */   


   /**          
    *       //像一个指定文件写入数据，如果该文件不存在，则新建，有就覆盖
    *       fs.writeFile(filename,data,[option],callback);
    * 
    *       //添加文件
    *       fs.appendFile('filname','-len',()=>{})
    * 
    *       //文件的存在?
    *       fs.exists(filname,()=>{})
    */










