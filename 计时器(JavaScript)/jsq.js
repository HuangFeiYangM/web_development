
function f1() {
    console.log("Hello, World1!");
}
// 10秒后执行f1()
//注意不要直接写f1()，因为f1()是函数名，不是函数体
setTimeout(function () {
    f1();
}, 10000);

var f2 = setTimeout(function () {
    console.log("Hello, World2!");
}, 10000);



//取消定时器
clearTimeout(f2);



//=========================================分界线==============================================================================
var name = "SB"

var user = {
    name: "John",
    age: 30,
    greet: function () {
        console.log("Hello, " + this.name + "!");
    },
    getname: function () {
        //this永远指向调用它的对象
        console.log(this.name)

    },
    getname_1: function () {
        setTimeout(function () {
            console.log(this.name)//this指向全局对象window，所以打印的是SB,而不是John,因为setTimeout里面的this指向window
        },10000)
    },
    getname_2: function () {
        var that = this;//用一个变量保存this的引用
        setTimeout(function () {
            console.log(that.name)//这样就可以打印John了
        },10000)
    }

}

user.getname() // John
user.getname_1() // SB
