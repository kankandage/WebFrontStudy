<!--
 * @Description: 
 * @Author: kankandage
 * @Date: 2020-05-14 21:28:21
 * @LastEditTime: 2020-05-14 22:01:38
 * @LastEditors: kankan
 -->

 
1...ES5 其实 this 的指向，始终坚持一个原理：this 永远指向最后调用它的那个对象

var name = "The Window";

var object = {
　　　name : "My Object",

　　　getNameFunc:function(){
　　　　　return function(){
　　　　　　　return this.name;
　　　　　};

　　　}

　};
 fn = object.getNameFunc()
 window.fn();//the window


 2...ES6 箭头函数的 this 始终指向函数定义时的 this，而非执行时



 3.在函数内部使用 _this = this 
 
    var name = "windowsName";

    var a = {

        name : "Cherry",

        func1: function () {
            console.log(this.name)     
        },

        func2: function () {
            var _this = this;
            setTimeout( function() {
                _this.func1()
            },100);
        }

    };

    a.func2()       // Cherry

4.
    1.apply() 方法调用一个函数, 其具有一个指定的this值，以及作为一个数组（或类似数组的对象）提供的参数
           b.apply(a,[1,2])
    2.apply 和 call 的区别是 call 方法接受的是若干个参数列表，而 apply 接收的是一个包含多个参数的数组。
            b.call(a,1,2) 
    3.bind()方法创建一个新的函数, 当被调用时，将其this关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。