/*
    模块加载系统
    require('模块')
 */

 /**
  * 模块加载机制
  *     路径：
  *         1.绝对路径  require();
  *         2.相对路径  
  *                 require('2.js');    有问题 //加载node的核心文件,或者是node_modules
  */

  /**
   *    在模块中定义var的变量,其作用域范围是当前模块，外部不能够直接的访问
   *    如果想一个模块能够访问另一个模块的中定义的变量
   *        1.把变量作为global对象的一个属性，但是这样是不推荐的
   *        2.使用模块对象 module:保存提供当前模块有关的信息  
   *                       在这个对象中有个子对象 exports 使模块的变量方便别人使用
   *        
   *        
   *        3.
   */








