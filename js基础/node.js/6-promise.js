 
 //promise

//1.使用
var promise = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve();
    },500);
    
})


console.log(promise);

setTimeout(()=>{
    console.log(promise);
},800)

//结果
//promise{padding}
//promise{resolved:undefined}
//状态只能转换一次?????


//2.then catch
//resolved状态的Promise会回调后面第一个.then
//rejected状态的Promise会回调后面第一个.catch
//任何一个rejected状态且后面没有.catch的Promise,都会造成浏览器/node环境的全局错误
var promise = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve(3);
    },500);
    
}).then(function(res){
    //获得结果 resolve
    console.log(res);
}).catch(function(err){
    //未获得想要的结果  rejected
    console.log(err);
})


console.log(promise);

setTimeout(()=>{
    console.log(promise);
},800)

//3.面试代码的修改

(function(){
    var promise = interview();
    promise
        .then((res)=>{
            conlose.log("smile");
        })
        .catch((err)=>{
            conlose.log("cry");
        });


    function interview() {
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if(Math.random() < 0.8){
                    resolve("success");
                }else{
                    reject(new Error("fail"));
                }
                  
            }, 500);
        })
     }

})();

//4.promise的区别

(function(){
    var promise = interview();
    var promise2 = promise
        .then((res)=>{
            throw new Error("accept");
        })

        setTimeout(()=>{
            console.log(promise);// resolved:"success"
            //then catch 会产生新的promise 产生结果根据then catch函数执行结果返回
            console.log(promise2);//rejected:Error

        },800);
        function interview() {
            return new Promise((resolve,reject)=>{
                setTimeout(() => {
                    if(Math.random() < 0.8){
                        resolve("success");
                    }else{
                        reject(new Error("fail"));
                    }
                  
                }, 500);
            })
        }
        
})();

//5.返回promise

(function(){
    var promise = interview();
    var promise2 = promise
        .then((res)=>{
            return new Promise(function(resolve,reject){
                setTimeout(()=>{
                    resolve("accept");
                },400)
            });
        })

        setTimeout(()=>{
            console.log(promise);// resolved:"success"
            console.log(promise2);//padding

        },800);

        setTimeout(()=>{
            console.log(promise);// resolved:"success"
            //回调返回一个promise,该promise会和回调的return的promise保持一致
            console.log(promise2);//resolved:"accept"

        },1000);

        function interview() {
            return new Promise((resolve,reject)=>{
                setTimeout(() => {
                    if(Math.random() < 0.8){
                        resolve("success");
                    }else{
                        reject(new Error("fail"));
                    }
                  
                }, 500);
            })
        }
})();

//7.串行异步 面试

(function(){
    var promise = interview(1);
    promise
        .then(()=>{
           return interview(2);
        })
        .then(()=>{
            return interview(3);
         })
        .then(()=>{
            console.log("smile");
        })
        .catch((err)=>{
            console.log("cry at" + error.round + "round");
        })

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

})();


//8.多个promise同时执行


(function(){
    
    promise
        .all([
            interview("1111"),
            interview("222")
        ]).then(()=>{
            console.log("smile");
        }).catch((err)=>{
            console.log("cry" + err.name)
        })
        

    function interview(name) {
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if(Math.random() < 0.8){
                    resolve("success");
                }else{
                    reject(new Error("fail"));
                    error.name = name;
                    reject(name);
                }                 
            }, 500);
        })
     }

})();
