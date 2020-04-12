//1.箭头函数
//语法： ()=>{}

var f = ()=>{
    console.log(123);
}

//用于返回值
//返回值为2
    // var add =()=>2;
//返回对象需要加()
    //    var add=()=>({});

//2.变量声明
//         var
//             1.可以变量声明
//             2.可以重复声明
//         let
//             1.不允许重复声明
//             2.不存在变量提升
//             3.块级作用域 暂存死区
//         const
//             1.特性同let
//             2.声明一个只读的常量，一旦声明，常量就不能改变

//3.promise 异步机制
//Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。
//!!!!!!!!!!!所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
//promise的特点 
    //1.对象不受外界影响  三种状态 pending 进行中  rejected 已失败  fulfilled已成功  只有异步操作的结果，可以决定当前是哪一种状态，任何操作都无法改变这个状态
    //2.一旦状态改变，就不会改变，任何时候都可以得到这个结果 改变状态有两种可能，从pending到fulfilled和从pending到rejected。只要两种状况发生，状态就凝固了，会一值保持这个状态resloved
    //如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的
    //有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。
//用法
///resolved状态的Promise会回调后面第一个.then
//rejected状态的Promise会回调后面第一个.catch
//任何一个rejected状态且后面没有.catch的Promise,都会造成浏览器/node环境的全局错误
var promise = new Promise(function(resloved,rejected){
    if(/*如果异步成功*/11){
        //成功
        resloved(value);
    }else{
        //失败
        rejected(error);
    }
}).then(function(res){

}).catch(function(error){

});

//4.async/await 是promise的语法糖
//async函数返回一个 Promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。

var result = async function(){
    var content = await new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve();
        },500)
    });
}


//指定多少毫秒输出的方法
function timeout(){
    return new promise((resolve)=>{
        setTimeout(resolve,ms);
    })
}

async function asyncPrint(value,ms){
    await timeout(ms);
    console.log(value);
}

asyncPrint("hello",50)

// try-catch的用法
//Promise{<resolve>:4}
//awiat 关键字可以"暂停" async function 的执行
//await 关键字可以以同步的写法获取promise的执行结果
//try-catch可以获取await所的错误

//改造代码
( async function(){
    try{    
        await interview(1);
        await interview(2);
        await interview(3);

    }catch(e){
        console.log("cry at" + error.round + "round");
    }
    console.log("smile");

}  

)();

//5.展开操作符

const obj1 = { a: 1, b: 2 }
const obj2 = { a: 2, c: 3, d: 4}
const obj3 = {...obj1, ...obj2}


//6.call和.apply区别
//.call和.apply均用于调用函数，并且第一个参数将用作函数中this的值。但是.call将逗号分隔的参数作为下一个参数，而.apply将参数数组作为下一个参数。简单记忆法：C用于call和逗号分隔，A用于apply和参数数组。

function add(a,b){
    return a + b;
}
console.log(add.call(null,1,2));//3
console.log(add.apply(null,[1,2]))//3


//7.forEach的用法：对数组的每个元素执行一次给定函数





//8.循环队列