# details标签和summary标签(p34)

## 1. details标签

details标签是HTML5新增的一个标签，可以用来折叠和展示内容。

```html
<details>
  <summary>点击查看详情</summary>
  这里是详情内容
</details>
```

1. `<details>`标签用来包裹内容，`<summary>`标签用来定义折叠内容的标题。
2. 点击`<summary>`标签后，内容会折叠或展开。
3. 内容默认是折叠的，可以设置`open`属性来展开。


## 2. summary标签

summary标签用来定义details标签的标题。

```html
<details>
  <summary>点击查看详情</summary>
  这里是详情内容
</details>
```

1. `<summary>`标签可以包含任何内容，通常是一行文字。
2. `<summary>`标签可以设置`class`属性，用来自定义样式。