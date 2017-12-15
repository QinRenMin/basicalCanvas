// //通过HTML标签获取
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
//
// var img = document.getElementById("myImage");
// ctx.drawImage(img,20,20);

//通过添加onload事件侦听，当图片加载完成时将其绘制到画板上面
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// var img = document.getElementById("myImage");
// img.onload = function () {
//     ctx.drawImage(img,20,20);
// };
//onload事件侦听
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var image = new Image();
image.src="Image/LiBai.jpg";
image.onload = function () {
  ctx.drawImage(image,20,20);
};
