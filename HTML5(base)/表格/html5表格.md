# HTML5表格

## 语法:
```html
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
    <th>Header 3</th>
  </tr>
  <tr>
    <td>Cell 1</td>
    <td>Cell 2</td>
    <td>Cell 3</td>
  </tr>
  <tr>
    <td>Cell 4</td>
    <td>Cell 5</td>
    <td>Cell 6</td> 
  </tr>
</table>
```

也可以使用thead和tbody以及tfoot标签来定义表头和数据:
```html
<table>
  <thead>
    <tr>
      <th>Header 1</th>
      
      <th>Header 2</th>
      <th>Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cell 1</td>
      <td>Cell 2</td>
      <td>Cell 3</td>
    </tr>
    <tr>
      <td>Cell 4</td>
      <td>Cell 5</td>
      <td>Cell 6</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Footer 1</td>
      <td>Footer 2</td>
      <td>Footer 3</td>
    </tr>
  </tfoot>
</table>
```


## 标签:
- `<table>`: 定义表格
- `<tr>`: 定义表格行
- `<th>`: 定义表头单元格
- `<td>`: 定义数据单元格


## 基本用法

1. 网页布局
2. 合并单元格:
```html
<table>
  <tr>
    <th colspan="2" rowspan="2">Header 1</th>
    <!-- 合并单元格2行2列 -->
    <th>Header 2</th>
    <th>Header 3</th>
  </tr>
  <tr>
    <td>Cell 1</td>
    <td>Cell 2</td>
    <td>Cell 3</td>
  </tr>
  <tr>
    <td>Cell 4</td>
    <td>Cell 5</td>
    <td>Cell 6</td> 
  </tr>
</table>
```
3. 表格标题
4. 表格边框



## 特性:
 可以设置列宽、行高、单元格边框、单元格背景色、单元格对齐方式、单元格合并、表格标题、表格边框、表格宽度、表格高度、表格样式、表格对齐方式、表格字体、表格字体颜色、表格背景色、表格边框颜色、表格边框宽度、表格单元格内容的换行、表格单元格内容的对齐方式、表格单元格内容的垂直对齐方式、表格单元格内容的水平对齐方式、表格单元格内容的背景色、表格单元格内容的边框、表格单元格内容的边框颜色、表格单元格内容的边框宽度、表格单元格内容的字体、表格单元格内容的字体颜色、表格单元格内容的字体大小、表格单元格内容的字体样式、表格







## 补充:

### 1.伪类选择器
  简介: 之所以叫伪类选择器，是因为它并不是真正的CSS选择器，而是通过其他选择器的组合来实现的。

- 常见的伪类选择器有:
- :first-child 选择第一个子元素
- :last-child 选择最后一个子元素
- :nth-child(n) 选择第n个子元素
- :nth-child(even) 选择偶数子元素
- :nth-child(odd) 选择奇数子元素
- :nth-last-child(n) 选择倒数第n个子元素
- :nth-last-child(even) 选择倒数偶数子元素
- :nth-last-child(odd) 选择倒数奇数子元素
- :hover 鼠标悬停
- :active 鼠标按下
- :focus 获得焦点
- :visited 访问过的链接
- :link 未访问的链接
- :enabled 启用状态
- :disabled 禁用状态
- :checked 选中状态

例子:

tr:nth-child(2n) {
    background-color: #f2f2f2;//隔行变色
}
同理还有:
tr:nth-child(even) 偶数行
tr:nth-child(odd) 奇数行
tr:first-child 第一个行
tr:last-child 最后一个行



### 2.表格+css
![图1]()