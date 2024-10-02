
// function f1() {
//     console.log("Hello, World!");
// }
// // 10秒后执行f1()
// //注意不要直接写f1()，因为f1()是函数名，不是函数体
// setTimeout(function () {
//     f1();
// }, 10000);


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
    }
}

user.getname() // John
user.getname_1() // SB
