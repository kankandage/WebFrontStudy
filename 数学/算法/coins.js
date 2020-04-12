//凑零钱问题
//给你3种面值的硬币，面值1，2，5，每种面值无限，总金额11，最少需要多少硬币凑出来

function coinChange(coins ,amount){
    if (amount == 0) return 0;
    if (amount < 0) return -1;
    var res = 100000;
    for(var i = 0;i <= n;i++){
        var subproblem = coinChange(coins,amount - coins[i]);
        if(subproblem == -1);continue;
        res = min(res, 1 + subproblem);
    }

    return res != 100000?res:-1;
}


//自底向上

