title: 《CSS高效开发实战》读后感
date: 2015-10-21 12:38:35
tags:CSS:
---

###  《CSS高效开发实战》读后感（二）
#### <li>第5章
背景与颜色</br>
 
 ```
 div{
 	background:url(img.gif);
 	background-size:80px 60px;
 	background-repeat:no-repeat
 }
 ```
我们可以直接使用长度单位或百分比来指定背景的尺寸，其中第1个值是宽度，第2个值是高度。如果只设一个值，则默认高度是auto。</br>
background-size还有两个可选项：cover和contain。其中cover相当于宽度等于元素宽度，高度设为auto的情况；而contain则相当于高度等于元素高度，宽度设为auto的情况。

渐变——放弃图片的首选良方</br>
<li>线性渐变

```
.test{
	background:linear-gradient(red, blue);
}
```