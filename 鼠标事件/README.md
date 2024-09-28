# 鼠标事件

## 鼠标事件简介

鼠标事件是指当用户操作鼠标时触发的事件，如鼠标点击、鼠标移动、鼠标滚轮等。可以与事件处理程序结合使用，以实现相应的功能。

## 鼠标事件类型

常见的鼠标事件类型有：

- click 鼠标点击事件
- dblclick 鼠标双击事件
- mousedown 鼠标按下事件
- mouseup 鼠标松开事件
- mousemove 鼠标移动事件
- mouseover 鼠标移入事件
- mouseout 鼠标移出事件
- mousewheel 鼠标滚轮事件


## 鼠标事件处理

JavaScript 中处理鼠标事件的方法有：

- addEventListener() 方法
- attachEvent() 方法
- onmouseXXX 属性

addEventListener() 方法和 attachEvent() 方法都可以用来处理鼠标事件，但是两者的区别在于addEventListener() 方法可以指定事件处理程序的执行顺序，而 attachEvent() 方法没有提供这种功能。

onmouseXXX 属性是 HTML 标签的属性，用来指定鼠标事件的处理程序。

```html
<div onmouseenter="handleMouseEnter(event)" onmouseleave="handleMouseLeave(event)">
  鼠标移入或移出该区域时触发事件
</div>
```


## 鼠标事件对象

当鼠标事件发生时，会产生一个事件对象，该对象包含有关鼠标事件的信息。

常见的鼠标事件对象属性有：

- clientX/clientY 鼠标指针相对于浏览器窗口的坐标
- screenX/screenY 鼠标指针相对于屏幕的坐标
- altKey/ctrlKey/shiftKey 是否按下了 Alt/Ctrl/Shift 键
- button 鼠标按下的按钮，值为 0 表示左键，1 表示中间按钮，2 表示右键    
- relatedTarget 事件相关的对象，比如鼠标移入或移出某元素时，relatedTarget 就是移入或移出的那个元素。

```javascript
function handleMouseClick(event) {
  console.log(event.clientX, event.clientY);
  console.log(event.screenX, event.screenY);
  console.log(event.altKey, event.ctrlKey, event.shiftKey);
  console.log(event.button);
  console.log(event.relatedTarget);
}    
``` 