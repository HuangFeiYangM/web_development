# 如何在lable标签外实现input标签的绑定？

HTML5新增了`<input>`标签，可以实现输入框的功能。但是，如果想要在`<label>`标签外实现输入框的绑定，可以这样做：

```html
<label for="input-id">Label text</label>
<input type="text" id="input-id">
```

在上面的代码中，`<label>`标签的`for`属性指定了输入框的`id`属性，这样就可以实现输入框和标签的绑定。