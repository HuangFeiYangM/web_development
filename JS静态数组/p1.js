var arr = [1, 2, 3, 4, 5];
var b = 0;
document.write(arr);
document.write("<br>");
document.write(typeof arr);//输出object,可见数组不能用typeof运算符判断类型
document.write("<br>");
document.write(Array.isArray(arr));//输出true,可见数组有isArray()方法,可以判断是否为数组
document.write("<br>");
document.write(Array.isArray(b));//输出false,5不是数组