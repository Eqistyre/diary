###Canvas绘图的一些简单知识
****
canvas是一块画布。
######<li>导入方式
```
<canvas id = "canvas"></canvas>
```
######<li>不使用css控制大小
css控制的是canvas实际显示的大小，而canvas的大小还包括其分辨率。

```
<canvas id = "canvas" width = "1024" height = "768"></canvas>
```
注意不加单位px，这是符合w3标准的
######<li>javascript上的初始化

```
var canvas = document.getElementById("canvas");
var context = canvas.geTContext("2d");
```

同时在javasxcript层面我们也能决定canvas的大小，代码如下：

```
var canvas = document.getElementById("canvas");
canvas.width = 1024;
canvas.height = 768;
var context = can'tanvas.geTContext("2d");
```
######<li>一些基本的语法
｀
