    1.声明变量 
        var
        let
            1.不允许重复声明
            2.不存在变量提升
            3.块级作用域 暂存死区
        const
            1.特性同let
            2.声明一个只读的常量，一旦声明，常量就不能改变
    2.解构赋值：ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
        数组的结构赋值：
    3.模板字符串
    4.箭头函数：使用箭头函数 
        1.改变this指向，箭头函数中this绑定的是所定义的作用域
        ()=>{}

    5.函数的扩展
        1.
        2.argument为类数组，
            function fn(){
                //会报错
                console.log(argument.push);
            }
        ES6中引入reset 
        function fn(...arr){
                //不报错
                console.log(arr.push)
        }
    6.对象的简单表示法

    7.Object.assgin()
        Object.assgin(目标对象，源对象属性)
        用户合并对象，将源对象属性复制到目标对象
    8.扩展运算符 spread
       var arr = [1,2,3];
       //将arr放到 arr2中
       var arr2 = [...arr];
    9.数组方法
      map()映射
        var arr = [1,2,3]
        //将数组每一项都乘2，放在新数组中
        //方法1
        arr.forEach(function(item,index){
            console.log(item,index);
        })
        //方法2
        var newArr = arr.map(function(item,index){
            console.log(item,index);
        })
    filter()
    find()
    findIndex()

1.ES5与ES6的区别
    1.ECMAScript的第五版 2009 现在浏览器中完全支持
    2.ECMAScript的第六版  2015 大部分浏览器支持

2.箭头函数有字符串插值