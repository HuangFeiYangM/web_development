# let命令


> <font color="red"> 闭包的概念: </font>
>闭包是指有权访问另一个函数作用域中的变量的函数.

---
## let命令与var命令的区别


### 1.作用范围:
- var:函数级别的作用域,声明的变量只能在函数内使用,函数外不能使用.如果var声明在最外面,则全局作用域.

比如下面的代码会报错:

```javascript
var b = 10;//全局作用域
function test() {
  var a = 20;//函数作用域
  console.log(a);
}
test(); // 20
if (true) {
  console.log(b); // 10,全局作用域
}
if (true) {
    var c = 30; // 这个也是全局作用域
}

console.log(c); // 30
console.log(a); // 报错: a is not defined
```

- let:块级作用域,声明的变量只能在块内使用,块外不能使用.(人话:{}级别的作用域)
  >相比于var,let的申明更加精确与严格. 

```javascript
let a = 10;//块作用域
if (true) {
  let b = 30;
  console.log(b);//正常:b is 30
}
if (true) {
    console.log(a);// 10
}
console.log(b); //报错: b is not defined
```



== 因此,let命令很适合在循环中使用,避免变量污染. ==
<font color = "green">比如index_1.html的例子:</font>

```javascript
var a = [];
        for (var i = 0; i < 10; i++) {
            console.log(i);
            a[i] = function() {
                console.log(i);
            };
            // i最后的值是10
        }
        console.log(a[5]());//输出10
        //原因：函数赋值给了数组,但是这个循环使用的是var关键字，相当于var i = 0 --> var i = 1 --> var i = 2 --> var i = 10，最后i的值是10，所以函数内部的i也是10。

        //以下是解决方案:
        var b = [];
        for (let i = 0; i < 10; i++) {
            console.log(i);
            b[i] = function() {
                console.log(i);
            };
        }
        console.log(b[5]());//输出5
        //原因：let关键字声明的变量只在当前代码块有效，所以不会影响到循环外的i。
```
---
### 2.声明提升:(let不会提升)
- var:声明的变量会提升到函数的最顶部,即使声明在函数内,也会提升到函数的最顶部.
- let:声明的变量不会提升到函数的最顶部,而是声明在块的最顶部.
---
### 3.重复声明:(let不允许重复声明)
- var:允许重复声明,会覆盖之前的变量.
- let:不允许重复声明,会报错.

