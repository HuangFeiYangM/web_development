# CSS image数据类型

## 介绍

CSS中的image数据类型用于定义图像，包括背景图像、边框图像、光标图像等。

## 应用范围:(p132)

1. 具有固定大小的图像，如背景图像、边框图像等。
2. 具有多个固定大小的图像,比如ico格式的图标。
3. 没有固定大小但有固定比例的图像,比如矢量图形(SVG)、光标图像等。
4. 没有固定大小的图像,比如响应式设计中使用百分比宽度的图片。


## 引用图像:

通过URL引入图像:

```
background-image: url(image.jpg);
```


## 渐变图像:(p132)

渐变图像的方法有两种:
1. 使用linear-gradient()函数:
```
<!-- linear-gradient()函数可以使图像渐变 -->
background-image: linear-gradient(to bottom, #f00, #0f0, #00f);
<!-- to bottom表示从上到下，#f00表示从红色开始，#0f0表示从绿色开始，#00f表示从蓝色开始 -->
```
2. 使用repeating-linear-gradient()函数:
```
<!-- repeating-linear-gradient()函数可以使渐变图像重复渐变 -->
background-image: repeating-linear-gradient(to bottom, #f00, #0f0 50%, #00f 100%);
<!-- 50%表示重复的位置，100%表示结束的位置 -->
```

### 用到的修饰符:
- to bottom: 表示从上到下
- to right: 表示从左到右
- to top: 表示从下到上
- to left: 表示从右到左
- from: 表示从某个颜色开始
- to: 表示到某个颜色结束
- color-stop: 表示颜色的位置
- angle: 表示渐变的角度
- size: 表示渐变的大小
- position: 表示渐变的位置
- repeat: 表示重复的模式
- no-repeat: 表示不重复的模式
- center: 表示居中
- round: 表示圆形
- space: 表示间距
- left: 表示左对齐
- right: 表示右对齐
- top: 表示顶部对齐
- bottom: 表示底部对齐
- center: 表示居中对齐
- contain: 表示保持比例
- cover: 表示覆盖整个元素

- *:表示出现次数
- +:表示至少出现一次
- ?:表示出现零次或一次,即可选
- {A}:表示出现A次
- #:出现一次以上,后面跟大括号{}表示出现次数