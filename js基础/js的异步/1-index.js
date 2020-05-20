

//命令行输入 process.argv
var playerAction = process.argv[process.argv.length - 1];
console.log(playerAction);

var random = Math.random() * 3;
if(random < 1){
    var computerAction = "rock";
}else if(random > 2){
    var computerAction = "scissor";
}else{
    var computerAction = "paper";
}


console.log(computerAction);


if( playerAction === computerAction){
    console.log("平局");
}else if(
    (playerAction == "rock" && computerAction == "paper")||
    (playerAction == "scissor" && computerAction == "rock")||
    (playerAction == "paper" && computerAction == "scissor")
){
    console.log("你输了");
}else{
    console.log("你赢了");
}