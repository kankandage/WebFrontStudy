//斐波那契数列
//f(n) = f(n-1) + f(n-2)
//带备忘录，简化方法
function fib(n){
    if(n == 2||n == 1){
        return 1;
    }

    var sum  = 0;
    var pre,curr = 1;
    for(var i = 3;i <= n;i++){
        sum = pre + curr;
        pre = curr;
        curr = sum;
    }

    return sum ;
}