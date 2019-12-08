//apply 方法
var obj = {
    name:"linxin"
}
function func(firstName,lastName) {
    console.log(firstName + this.name + lastName);
}
//传入 1.函数上下文对象  2.函数参数所组成的数组
func.apply(obj,["a","b"]);


//call 方法
var obj = {
    name:"linxin"
}
function func(firstName,lastName) {
    console.log(firstName + this.name + lastName);
}
//传入 1.函数上下文对象  2.单独的参数列表
func.call(obj,"a","b");


//作用
//1.改变this指向，
//call 方法的第一个参数是作为函数上下文的对象，这里把 obj 作为参数传给了 func，此时函数里的 this 便指向了 obj 对象

var obj = {
    name : "linxi"
}

function func() {
    console.log(this.name);
}

func.call(obj);// linxin

//2.调用函数
//apply call
// 方法都会使函数立即执行，因此它们也可以用来调用函数。
function func() {
    console.log("linxin");
}

func.call();

//3.借用别的对象的方法
//Person2 实例化出来的对象 person 通过 getname 方法拿到了 Person1 中的 name。
// 因为在 Person2 中，Person1.call(this) 的作用就是使用 Person1 对象代替 this 对象，那么 Person2 就有了 Person1 中的所有属性和方法了，相当于 Person2 继承了 Person1 的属性和方法。
var Person1 = function () {
    this.name = "linxin";
}

var Person2 = function () {
    this.getname = function () {
        console.log(this.name);
    }
    Person1.call(this);
}

var person = new  Person2();
person.getname();  //linxi


//call 与 bind 的区别
//在 EcmaScript5 中扩展了叫 bind 的方法，在低版本的 IE 中不兼容。
// 它和 call 很相似，接受的参数有两部分，第一个参数是是作为函数上下文的对象，第二部分参数是个列表，可以接受多个参数

//1.bind 发返回值是函数
var obj = {
    name:"linxi"
}
function func() {
    console.log(this.name);
}

var func1 = func.bind(obj);
func1();// linxi

//2.参数的使用
function func(a,b,c) {
    console.log(a,b,c);
}

var func1 = func.bind(null,"linxi");

func("a","b","c"); // a b c
func1("a","b","c"); // linxi a b
func1("b","c"); //linxi b c
func.call(null,"linxi"); // linxi undefined undefined



