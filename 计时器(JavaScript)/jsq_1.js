var time1 = 0;

//setInterval的用法,与setTimeout类似,但是setInterval可以指定时间间隔,每隔指定的时间间隔执行一次函数
//每隔一秒执行一次
setInterval(function () {
    time1++;
    console.log(time1);
}, 1000)//每隔一秒执行一次


var div = document.getElementById("box1");
var op = 0;
//透明度:opacity,取值范围0-1,0为完全透明,1为完全不透明
var fader = setInterval(function () {
    op += 0.1;
    div.style.opacity = op;//设置div的透明度
    if (op >= 1) {
        op = 0;
    }
}, 100); //每隔100毫秒执行一次

// clearInterval(fader); //停止定时器

var div_1 = document.getElementById("box2");
var op_1 = 1;
var fader_1 = setInterval(function () {
    op_1 -= 0.1;
    div_1.style.opacity = op_1;
    if (op_1 <= 0) {
        clearInterval(fader_1);//停止定时器,不在改变div的透明度
    }
}, 200); //每隔100毫秒执行一次







