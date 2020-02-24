//1.async function
console.log(async function(){ 
} ())

console.log(function(){
    return new Promise(resolve =>{
        resolve();
    })
}())


//输出结果相同 
//Promise{undefined}


//2. async 返回值

console.log(async function(){
    throw new Error("4"); 
} ())

console.log(function(){
    return new Promise((resolve,reject) =>{
        reject(new Error("4"))
    })
}())

//输出结果相同
//async/await 
//1.是Promise语法糖封装
//2.异步编程的终极方案-以同步方式写异步


//await

const result = async function(){
    var content = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },500)
    })

    console.log(content);
    return 4;
}

setTimeout(()=>{
    console.log(result);
},800)

//Promise{<pending>}
//Promise{<resolve>:4}

//比较
const result = async function(){
    var content = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },500)
    })

    console.log(content);
    return 4;
}

setTimeout(()=>{
    console.log(result);
},800)

//Promise{<pending>}
//Promise{<resolve>:4}

//比较

const result = async function(){
    var content = await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },500);
    })

    console.log(content);
    return 4;
}

setTimeout(()=>{
    console.log(result);
},800)


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

function interview(round) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(Math.random() < 0.8){
                resolve("success");
            }else{
                reject(new Error("fail"));
                error.round = round;
                reject(round);
            }
              
        }, 500);
    })
 }
