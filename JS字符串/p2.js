var str1 = " Hello World ";
var str3 = " \nHello World\n\t  ";

//trim()方法可以去除字符串两端的空格以及换行符占位符等,但是不会改变原字符串
document.write("str3去除两端空格以及换行符制表符等:");
document.write(str3.trim());
document.write("<br>");
document.write("去头:");
document.write(str3.trimStart());
document.write("<br>");
document.write("去尾:");
document.write(str3.trimEnd());
document.write("<br>");

str1 = "1 2 3 1 a b c ABC";

//split()方法可以将字符串分割成数组，默认情况下，split()方法以空格为分隔符，可以指定分隔符
//split( 目标字符串 检测的长度 )
var a = str1.split();//什么都不写就输出原字符串
document.write("<br>");
document.write("str1以空格为分隔符分割成数组:");
document.write(a);
document.write("<br>");
var i = str1.split(" ");
document.write("str1以空格为分隔符分割成数组:");
document.write(i);
document.write("<br>");
var i = str1.split(" ", 3);
document.write("str1以空格为分隔符分割成数组，只分割前3个元素:");
document.write(i);
document.write("<br>");
var i = str1.split(" ", 5);
document.write("str1以空格为分隔符分割成数组，只分割前5个元素:");
document.write(i);
document.write("<br>");



















//toUpperCase()方法可以将字符串中的小写字母转为大写字母
var d = str1.toUpperCase();
document.write("<br>");
document.write("字符串转为大写字母:");
document.write(d);


//toLowerCase()方法可以将字符串中的大写字母转为小写字母
var e = str1.toLowerCase();
document.write("<br>");
document.write("字符串转为小写字母:");
document.write(e);



//slice()方法可以截取字符串中的一部分
var g = str1.slice(0, 5);
document.write("<br>");
document.write(g);




//replace()方法可以替换字符串中的指定内容
var j = str1.replace("World", "Universe");
document.write("<br>");
document.write(j);

