# Event事件

## 事件类型

- 鼠标事件
- 键盘事件
- 表单事件
- 页面事件
- 自定义事件

    


## 事件对象

- 事件对象是事件处理程序的第一个参数，它包含有关事件的详细信息。
- 事件对象包含以下属性：
  - type：事件类型
  - target：事件目标
  - currentTarget：当前事件处理程序所在的元素
  - eventPhase：事件流阶段
  - bubbles：是否冒泡
  - cancelable：是否可以取消
  - timeStamp：事件发生的时间戳
  - defaultPrevented：是否默认阻止
  - isTrusted：是否可信任
  - detail：自定义数据  
- 事件对象的方法：
  - preventDefault()：阻止默认行为
  - stopPropagation()：停止事件冒泡
  - stopImmediatePropagation()：停止事件冒泡，同时阻止同一元素上的其他事件处理程序  
  

## 事件处理程序

- 事件处理程序是事件发生时执行的函数。
- 事件处理程序可以绑定到元素的事件属性上，也可以绑定到元素的addEventListener()方法上。
- 事件处理程序的语法：
  - 元素.事件 = 函数
  - addEventListener(事件, 函数, 是否捕获)
  - 其中，事件可以是事件类型字符串，也可以是事件对象。
  - 事件类型字符串可以是以下值：
    - click
    - contextmenu
    - dblclick
    - mousedown
    - mouseup
    - mousemove
    - mouseover
    - mouseout
    - mouseenter
    - mouseleave
    - keydown
    - keyup
    - keypress
    - focus
    - blur
    - change
    - input
    - submit
    - reset
    - load
    - unload
    - resize
    - scroll
    - select
    - error
    - abort
    - animationstart
    - animationend
    - animationiteration
    - transitionstart
    - transitionend
    - pointerover
    - pointerenter
    - pointerdown
    - pointermove
    - pointerup
    - pointercancel
    - pointerout
    - pointerleave
    - gotpointercapture
    - lostpointercapture
    - beforeinput
    - input
    - search
    - selectstart
    - touchstart
    - touchend
    - touchmove
    - touchcancel
    - wheel
    - pointerlockchange
    - pointerlockerror
    - webglcontextrestored
    - webglcontextlost
    - webglcontextcreationerror
    - customevent       
