# CSS网格

## 介绍
css网格是一种将页面内容分割成一个个网格的技术，可以让页面的布局更加合理、美观。比表格更加灵活简单，可以实现更复杂的布局。


## 属性:(参考p180)

- grid : 定义网格布局，包括网格线的宽度、间距、线的颜色、背景色等。(复合属性)
- grid-column : 定义网格项所在的列。
- grid-row : 定义网格项所在的行。
- grid-area : 定义网格项所在的区域。
- grid-template: 定义网格的模板。(复合属性)
- grid-template-columns : 定义网格的列数和宽度。
- grid-template-rows : 定义网格的行数和高度。
- grid-column-gap : 定义网格列之间的间距。
- grid-row-gap : 定义网格行之间的间距。
- grid-area : 定义网格区域的名称。
  ---
- justify-items : 定义网格项沿主轴的对齐方式。
- align-items : 定义网格项沿交叉轴的对齐方式。
- justify-content : 定义网格容器沿主轴的对齐方式。
- align-content : 定义网格容器沿交叉轴的对齐方式。
- place-items : 同时设置align-items和justify-items。
- place-content : 同时设置align-content和justify-content。
 --- 
- gap : 定义网格项与网格项之间的间距。(复合属性)
- grid-auto-flow : 定义网格项的排列顺序。
- grid-auto-columns : 定义网格项的宽度。
- grid-auto-rows : 定义网格项的高度。
- grid-auto-position : 定义网格项的位置。
  
## 0.grid属性

详情请见![index_2.html/index_1.html]


## 1.justify-items属性&align-items属性&place-items属性



1.justify-items:设置单元格中内容相对于单元格的水平位置(左,右,居中)，仅在单行网格中有效。

2.align-items:设置单元格中内容相对于单元格的垂直位置(上,下,居中)，仅在单列网格中有效。

3.place-items:同时设置align-items和justify-items。(省略第二个属性,第一个属性的值将应用于两个属性)(第一个设置水平方向,第二个设置垂直方向)

变体:

><font color="red">注意只有当内容的高度大于单元格的高度时，才会生效。</font>
- align-items: start; /* 单元格内容与单元格的顶部对齐 */
- align-items: end; /* 单元格内容与单元格的底部对齐 */
- align-items: center; /* 单元格内容与单元格的中心对齐 */
- align-items: stretch; /* 单元格内容填充单元格的高度 */


## 2.justify-content属性&align-content属性&place-content属性

>相比于justify-items和align-items属性，justify-content和align-content属性可以设置网格容器中内容的位置，而不仅仅是单元格的位置。

>注意:justify-content和align-content属性仅对单列或单行网格有效。

1.justify-content:设置网格容器中内容相对于网格线的水平位置(左,右,居中)。

2.align-content:设置网格容器中内容相对于网格线的垂直位置(上,下,居中)。

3.place-content:同时设置align-content和justify-content。(省略第二个属性,第一个属性的值将应用于两个属性)(第一个设置水平方向,第二个设置垂直方向)


基本同上.



## 3.grid-auto-flow属性

>grid-auto-flow属性定义网格项的排列顺序。

- row: 默认值。网格项按照行的顺序排列。
- column: 网格项按照列的顺序排列。
- dense: 网格项按照网格线的顺序排列，但会跳过空白单元格。

## 4.grid-auto-columns属性&grid-auto-rows属性

>grid-auto-columns和grid-auto-rows属性定义网格项的默认宽度和高度。

## 5.grid-auto-position属性