title: 《CSS高效开发实战》读后感
date: 2015-10-20 15:38:35
tags:CSS:
---

###  《CSS高效开发实战》读后感

#### <li>第1章
使用Modernizr检测支持CSS 3。Modernizr是一个检测浏览器对HTML 5和CSS 3特性是否支持的Javascript库，它是一个开源项目。<li>
Modernizr的功能其实很简单，就是用Javascript检测浏览器对HTML/CSS 3的特性支持情况。比如说支持某个功能就在页面的<html>标签上添加一个相应的class,不支持某个属性就添加一个带no-前缀的class。比如，如果被检测的浏览器支持video标签，Modernizr就会在<html>标签上添加video类，否则添加no-video类。

```
$(document).ready(function(){
if(Modernizr.canvas) {
		//这里添加Canvas代码
	}
if(Modernizr.localstorage) {
		//这里添加本地储存代码
	}
});
```
#### <li>第2章
这一章都是一些复习内容啦,首先复习盒子模型。
[BoxModle](https://github.com/Eqistyre/diary/blob/master/imgs/BoxModel.png?raw=true)</br>
首先我们可以看出来盒子模型的具体样式是这样的。</br>
<li>内容</br>
元素框的最内部分是实际的内容，直接包围内容的是内边距(padding),它呈现了元素的背景。内边距的边缘是边框，边框以外是外边距(margin),外边距默认是透明，因此不会遮挡其后面的任何元素。</br>
<li>内边框和边框</br>
内边距和边框的主要作用是装饰。在那边距和内容区域，我们可以显示漂亮的背景，还可以控制边框样式来装点内容。
</br>
<li>外边距</br>
外边距主要用于布局，目的是控制元素之间的距离。</br>