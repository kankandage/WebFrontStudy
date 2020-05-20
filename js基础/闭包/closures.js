/*
 * @Description: 
 * @Author: kankandage
 * @Date: 2020-05-14 09:33:09
 * @LastEditTime: 2020-05-14 22:13:59
 * @LastEditors: kankan
 */

 //自执行
 /**
  * 功能
  *     1.它可以帮你封装大量的工作而不会在背后遗留任何全局变量。

        2.你定义的所有变量都会成员立即执行函数的局部变量，所以你不用担心这些临时变量会污染全局空间

        3.可以使用这种技术可以模仿一个私有作用域，用匿名函数作为一个“容器”，“容器”内部可以访问外部的变量，而外部环境不能访问“容器”内部的变量

        4.可以添加更多的加强模块，移除它们，单独测试它们，允许用户去禁用它们等等
  */
 /**
  * 1.最前最后加括号
  */
 (function(){alert(1);}());
 /**
  * 2.function外面加括号
  */
 (function(){alert(1);})();
/**
 * 3.function前面加运算符，常见的是!与void
 */
!function(){alert(1);}(); 
void function(){alert(2);}();


function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push((function (n) {
            return function () {
                return n * n;
            }
        })(i));
    }
    return arr;
}

(function (n) {
    return function () {
        return n * n;
    }
})(i)

var f = function (n) {
    return function () {
        return n * n;
    }
}

f(i);