# Share-Web-Technology
####2016年05月10日19:13:54

##setp1:大纲

* 前端知识一览
  * 介绍svg,canvas,css3
  * 前端自动化开发
  * 其他
* 前端MVC及其框架
* AngularJS介绍及实践

##step2：一些通过前端技术实现的特效
<font size="4">
* [http://tympanus.net/Development/InteractiveParticlesSlideshow/](http://tympanus.net/Development/InteractiveParticlesSlideshow/)
* [http://christmasexperiments.com/xps/19/deerxmas/](http://christmasexperiments.com/xps/19/deerxmas/)
* [https://www.chromeexperiments.com/](https://www.chromeexperiments.com/)
* [http://ics-web.jp/projects/particle-develop/](http://ics-web.jp/projects/particle-develop/)
* [http://www.inear.se/](http://www.inear.se/)
* [http://threejs.org/](http://threejs.org/)
</font>
---------------
##svg 
[svg的简明教程](http://www.w3school.com.cn/svg/)

```svg
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <path d="M150 0 L75 200 L225 200 Z" />
</svg>

```
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <path d="M150 0 L75 200 L225 200 Z" />
</svg>


---------------
##canvas
[参考手册](http://www.w3school.com.cn/tags/html_ref_canvas.asp)
```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```
canvas 元素本身是没有绘图能力的。所有的绘制工作必须在 JavaScript 内部完成：
```javascript
<script type="text/javascript">
var c=document.getElementById("myCanvas");
var cxt=c.getContext("2d");
cxt.fillStyle="#FF0000";
cxt.fillRect(0,0,150,75);
</script>
```

###svg 和 canvas 的比较
SVG
SVG 是一种使用 XML 描述 2D 图形的语言。
SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。
在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。
Canvas
Canvas 通过 JavaScript 来绘制 2D 图形。
Canvas 是逐像素进行渲染的。
在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。
Canvas 与 SVG 的比较
下表列出了 canvas 与 SVG 之间的一些不同之处。
Canvas
依赖分辨率
不支持事件处理器
弱的文本渲染能力
能够以 .png 或 .jpg 格式保存结果图像
最适合图像密集型的游戏，其中的许多对象会被频繁重绘
SVG
不依赖分辨率
支持事件处理器
最适合带有大型渲染区域的应用程序（比如谷歌地图）
复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
不适合游戏应用