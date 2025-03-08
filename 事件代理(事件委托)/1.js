var ls = document.getElementById("uls1");
// 给列表添加点击事件
ls.addEventListener("click", function () {
    // 用于判断点击的是哪个元素
    //元素的标签名用大写
    if (event.target.tagName === "LI") {
        console.log("LI");
        console.log(event.target.innerHTML);// 输出点击的元素的innerHTML
        // 下面可以做一些其他操作
    }
    // console.log("clicked");
});



