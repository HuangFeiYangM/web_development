var a = 10;
var name = "John";
var flag = true;
var obj = { name: "John", age: 30 };
var n = null;
var u = undefined;

console.log(typeof a); //返回number

console.log(typeof name); //  返回string

console.log(typeof flag); // 返回boolean

console.log(typeof obj); // 返回object

console.log(typeof n); // 返回object

console.log(typeof u); // 返回undefined

// 数字运算符
console.log(a + 5); // 15
console.log(a - 5); // 5
console.log(a * 5); // 50
console.log(a / 5); // 2
console.log(a % 5); // 0

//自己增/减
console.log(a++); // 16
console.log(a--); // 17
console.log(a++ + 5); // 16
console.log(++a + 5); // 18
console.log(a-- - 5); // 17
console.log(--a - 5); // 15

// 赋值运算符
console.log(a = 20); // 20
console.log(a += 5); // 25
console.log(a -= 5); // 20
console.log(a *= 5); // 100
console.log(a /= 5); // 20
console.log(a %= 5); // 0

// 条件运算符
console.log(flag ? "true" : "false"); // true
// 逻辑运算符
console.log(flag && true); // true
console.log(flag || false); // true
console.log(!flag); // false
// 位运算符
console.log(a & 5); // 0
a = 10;
// 字符串运算
console.log(name + " Doe"); // "John Doe"
//逻辑运算符
console.log(name == "John"); // true
// 严格相等运算符,用于比较值和类型
console.log(name === "John"); // true
console.log(a === "10"); // false
console.log(a == "10"); // true
// 非严格相等运算符,用于比较值和类型
console.log(a !== "10"); // true
console.log(name != "John"); // false
console.log(name !== "John"); // true
console.log(name < "Jane"); // true
console.log(name > "Jane"); // false
console.log(name <= "Jane"); // true
console.log(name >= "Jane"); // false


//布尔运算符,"&&"表示"与"，"||"表示"或"，"!"表示"非"
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log(!true); // false
console.log(!false); // true
//非布尔值取反运算符:  "", 0, null, undefined, NaN
console.log(!""); // true
console.log(!0); // true
console.log(!null); // true
console.log(!undefined); // true
console.log(!NaN); // true
//对照表
console.log(!" "); // false
console.log(!1); // false
console.log(!"0"); // false
console.log(!"null"); // false
console.log(!"undefined"); // false
console.log(!"NaN"); // false

