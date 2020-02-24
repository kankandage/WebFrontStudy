var [a,b,c,d] = [1,2,3,4,5]

//1.对象的解构赋值
    // var miaov ={
    //     fn:function(){alert(1)},
    //     add:function(){alert(2)},
    //     isFunction:function(){alert(3)},
    // }

    // let {add,isFunction} = miaov;
    // console.log(add);

//2.箭头函数
//语法： ()=>{}

var f = ()=>{
    console.log(123);
}

f()

//返回值为2
    // var add =()=>2;
//返回对象需要加()
    //    var add=()=>({});

//3.闭包
var util = function(){
    function add(){}
    function isArry(){}
    miaov
    return{
        //对象的简单表示法
        add,
        isArry,
        miaov
    }
}()