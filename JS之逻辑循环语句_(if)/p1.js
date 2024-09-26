var a = 1;
if (a) {
    console.log("true");
} else if(a === 0){
    console.log("false");
}
else {
    console.log("undefined");
}

var b = "114514";
switch (b) {
    case 1:
        console.log("a is 1");
        break;
    case 0:
        console.log("a is 0");
        break;
    case "114514":
        console.log("a is 114514");
        break;
    default:    
        console.log("a is undefined");
}
//不加break，会执行后面的语句

//三元运算符
1? console.log("true_3") : console.log("false_3"); //true