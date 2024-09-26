var str1 = "Hello World";
var str2 = 'I love\
you and\
JavaScript';//注意这里的\要转义,用于写的时候换行,写在每一行的末尾
var str3 = "我买书来\"看\"";//双引号和单引号都可以,但是要注意加上`\`转义符
document.write(str1);
document.write("<br>");//这样可以换行
document.write(str2);
document.write("<br>");

var a = 0;
a = str1.length;//获取字符串长度
document.write("<br>");
document.write("字符串长度为:");
document.write(a);
document.write("<br>");

//cahrtAt()方法可以获取字符串中指定位置的字符
var b = str1.charAt(0);
document.write("<br>");
document.write("第一个字符:");
document.write(b);
b = str1.charAt(-1);//负数会输出空字符串
document.write("<br>");
document.write("最后一个字符:");
document.write(b);
document.write("<br>");

//charCodeAt()方法可以获取字符串中指定位置的字符的ASCII码
var c = str1.charCodeAt(0);
document.write("<br>");
document.write("第一个字符的ASCII码:");
document.write(c);
c = str1.charCodeAt(str1.length - 1);
document.write("<br>");
document.write("最后一个字符的ASCII码:");
document.write(c);
c = str1.charCodeAt(-2);//负数会输出空NAN
document.write("<br>");
document.write("倒数第二个字符的ASCII码:");
document.write(c);
document.write("<br>");


//concat()方法可以将两个或多个字符串连接起来,但是"+"运算符也可以实现字符串连接,甚至可以连接变量和字符串
var f = str1.concat(" ", "I", " ", "love", " ", "JavaScript");
document.write("<br>");
document.write("连接后的字符串:");
document.write(f);
document.write("<br>");

//substring()方法可以截取字符串中的一部分,与slice()方法不同的是,substring()方法可以指定起始位置和结束位置
var h = str1.substring(0, 5);//区间前闭后开
document.write("<br>");
document.write("截取字符串1:");
document.write(h);
document.write("<br>");
h = str1.substring(2, -1);//负数=0,然后函数自动把小的数字放在大的数字前面,截取到字符串末尾,对与正数也一样
document.write("截取字符串2:");
document.write(h);
document.write("<br>");
h = str1.substring(-1);
document.write("截取字符串3:");//负数=0,如果后面不写数字,则截取到字符串末尾
document.write(h);
document.write("<br>");

//substr()方法与substring()方法类似,但是可以指定截取的长度
//substr(起始位置, 截取长度)
var k = str1.substr(0, 5);
document.write("<br>");
document.write(" substr()方法截取字符串:");
document.write(k);
document.write("<br>");
k = str1.substr(2, 3);
document.write(" substr()方法截取字符串:");
document.write(k);
document.write("<br>");
k = str1.substr(2);
document.write(" substr()方法截取字符串:");
document.write(k);
document.write("<br>");
k = str1.substr(-1);
document.write(" substr()方法截取字符串:");
document.write(k);
document.write("<br>");
k = str1.substr(-1, 3);//第一个参数为负数,则从字符串末尾开始截取,从后面开始截取3个字符
document.write(" substr()方法截取字符串:");
document.write(k);
document.write("<br>");
k = str1.substr(-1, -1);//第二个参数为负数,则变为0,输出空字符串
document.write(" substr()方法截取字符串:");
document.write(k);
document.write("<br>");

//indexOf()方法可以查找字符串中指定内容的位置,如果没有找到,则返回-1
//indexOf(查找内容, 开始位置, 结束位置)
//指定内容可以是字符串,也可以是变量,如果是变量,则会先转换为字符串再查找
var l = str1.indexOf("l");
document.write("<br>");
document.write("字符串中第一个'l'的位置:");
document.write(l);
l = str1.indexOf("l", 3);//从第3个字符开始查找
document.write("<br>");
document.write("字符串中第3个'l'的位置:");
document.write(l);
l = str1.indexOf("l", 3, 5);//从第3个字符开始,到第5个字符结束查找
document.write("<br>");
document.write("字符串中第3个'l'的位置:");
document.write(l);
l = str1.indexOf("l", 3, 2);//从第3个字符开始,到第2个字符结束查找,没有找到,返回-1
document.write("<br>");
document.write("字符串中第3个'l'的位置:");
document.write(l);
l = str1.indexOf("l", -2);//从倒数第2个字符开始查找
document.write("<br>");
document.write("字符串中倒数第2个'l'的位置:");
document.write(l);
l = str1.indexOf("l", -2, -1);//从倒数第2个字符开始,到倒数第1个字符结束查找
document.write("<br>");
document.write("字符串中倒数第2个'l'的位置:");
document.write(l);
l = str1.indexOf("l", -2, -2);//从倒数第2个字符开始,到倒数第2个字符结束查找,没有找到,返回-1
document.write("<br>");
document.write("字符串中倒数第2个'l'的位置:");
document.write(l);
//找不到字符串中没有的字符,返回-1
l = str1.indexOf("z");
document.write("<br>");
document.write("字符串中'z'的位置:");
document.write(l);




