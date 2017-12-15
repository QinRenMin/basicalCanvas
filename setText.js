

var c = document.getElementById("myCanvas1"); //获取HTML的canvas标签
var ctx = c.getContext("2d");//设置2D环境
ctx.beginPath();
ctx.font = "30px Arial"; //设置字体大小和字体
ctx.fillText("Hello World",50,70,200);

// ctx.beginPath();
// ctx.font="bold 30px Arial";
// ctx.fillText("Hello World",50,100);//normal bold bolder lighter 也可以通过数字来写
//
// ctx.beginPath();
// ctx.font="italic 30px Arial";
// ctx.fillText("Hello World",50,130);//italic oblique

var c2 = document.getElementById("myCanvas2"); //获取HTML的canvas标签
var ctx2 = c2.getContext("2d");//设置2D环境
ctx2.font = "30px Arial"; //设置字体大小和字体
ctx2.strokeText("Hello World",50,70,200);