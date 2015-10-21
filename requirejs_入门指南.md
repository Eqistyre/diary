title: JavaScript面向对象的程序设计
date: 2015-9-21 10:38:35
tags:JavaScript:
---

##  RequireJS 入门指南

### 简介

如今最常用的JavaScript库之一是RequireJS。最近我参与的每个项目，都用到了RequireJS，或者是我向它们推荐了增加RequireJS。在这篇文章中，我将描述RequireJS是什么，以及它的一些基础场景。

异步模块定义(AMD) 
谈起RequireJS，你无法绕过提及JavaScript模块是什么，以及AMD是什么。

JavaScript模块只是遵循SRP(Single Responsibility Principle单一职责原则)的代码段，它暴露了一个公开的API。在现今JavaScript开发中，你可以在模块中封装许多功能，而且在大多数项目中，每个模块都有其自己的文件。这使得JavaScript开发者日子有点难过，因为它们需要持续不断的关注模块之间的依赖性，按照一个特定的顺序加载这些模块，否则运行时将会放生错误。

当你要加载JavaScript模块时，就会使用script标签。为了加载依赖的模块，你就要先加载被依赖的，之后再加载依赖的。使用script标签时，你需要按照此特定顺序安排它们的加载，而且脚本的加载是同步的。可以使用async和defer关键字使得加载异步，但可能因此在加载过程中丢失加载的顺序。另一个选择是将所有的脚本捆绑打包在一起，但在捆绑的时候你仍然需要把它们按照正确的顺序排序。

AMD就是这样一种对模块的定义，使模块和它的依赖可以被异步的加载，但又按照正确的顺序。

Getting Started with RequireJS Library

CommonJS, 是对通用的JavaScript模式的标准化尝试，它包含有 AMD 定义 ，我建议你在继续本文之前先读一下。在ECMAScript 6这个下一版本JavaScript 规范中，有关于输出，输入以及模块的规范定义，这些将成为JavaScript语言的一部分，而且这不会太久。这也是关于RequireJS我们想说的东西。

RequireJS?

RequireJS是一个Javascript 文件和模块框架，可以从 http://requirejs.org/下载，如果你使用Visual Studio也可以通过Nuget获取。它支持浏览器和像node.js之类的服务器环境。使用RequireJS,你可以顺序读取仅需要相关依赖模块。

RequireJS所做的是，在你使用script标签加载你所定义的依赖时，将这些依赖通过head.appendChild()函数来加载他们。当依赖加载以后，RequireJS计算出模块定义的顺序，并按正确的顺序进行调用。这意味着你需要做的仅仅是使用一个“根”来读取你需要的所有功能，然后剩下的事情只需要交给RequireJS就行了。为了正确的使用这些功能，你定义的所有模块都需要使用RequireJS的API，否者它不会像期望的那样工作。

RequireJS API 存在于RequireJS载入时创建的命名空间requirejs下。其主要API主要是下面三个函数:

define– 该函数用户创建模块。每个模块拥有一个唯一的模块ID，它被用于RequireJS的运行时函数，define函数是一个全局函数，不需要使用requirejs命名空间.
require– 该函数用于读取依赖。同样它是一个全局函数，不需要使用requirejs命名空间.
config– 该函数用于配置RequireJS.
在后面，我们将教你如果使用这些函数，但首先让我们先了解下RequireJS的加载流程。

data-main属性

当你下载RequireJS之后，你要做的第一件事情就是理解RequireJS是怎么开始工作的。当RequireJS被加载的时候，它会使用data-main属性去搜寻一个脚本文件（它应该是与使用src加载RequireJS是相同的脚本）。data-main需要给所有的脚本文件设置一个根路径。根据这个根路径，RequireJS将会去加载所有相关的模块。下面的脚本是一个使用data-main例子：


	<script src="scripts/require.js" data-main="scripts/app.js"></script>



另外一种方式定义根路劲是使用配置函数，后面我们将会看到。requireJs假设所有的依赖都是脚本，那么当你声明一个脚本依赖的时候你不需要使用.js后缀。

配置函数

如果你想改变RequireJS的默认配置来使用自己的配置，你可以使用require.configh函数。config函数需要传入一个可选参数对象，这个可选参数对象包括了许多的配置参数选项。下面是一些你可以使用的配置：

baseUrl——用于加载模块的根路径。
paths——用于映射不存在根路径下面的模块路径。
shims——配置在脚本/模块外面并没有使用RequireJS的函数依赖并且初始化函数。假设underscore并没有使用  RequireJS定义，但是你还是想通过RequireJS来使用它，那么你就需要在配置中把它定义为一个shim。
deps——加载依赖关系数组
下面是使用配置的一个例子：


```
require.config({
    //By default load any module IDs from scripts/app
    baseUrl: 'scripts/app',
    //except, if the module ID starts with "lib"
     paths: {
        lib: '../lib'
    },
    // load backbone as a shim
    shim: {
        'backbone': {
            //The underscore script dependency should be loaded before loading backbone.js
            deps: ['underscore'],
            // use the global 'Backbone' as the module name.
            exports: 'Backbone'
        }
    }
});
```

在这个例子中把根路径设置为了scripts/app，由lib开始的每个模块都被配置在scripts/lib文件夹下面，backbone 加载的是一个shim依赖。

用RequireJS定义模块

模块是进行了内部实现封装、暴露接口和合理限制范围的对象。ReuqireJS提供了define函数用于定义模块。按章惯例每个Javascript文件只应该定义一个模块。define函数接受一个依赖数组和一个包含模块定义的函数。通常模块定义函数会把前面的数组中的依赖模块按顺序做为参数接收。例如，下面是一个简单的模块定义:

```
define(["logger"], function(logger) {       
        return {
            firstName: "John",
            lastName: “Black“,
            sayHello: function () { 
                logger.log(‘hello’);
           		}
        }
    }
);
```

我们看，一个包含了logger的模块依赖数组被传给了define函数,该模块后面会被调用。同样我们看所定义的模块中有一个名为logger的参数，它会被设置为logger模块。每一个模块都应该返回它的API.这个示例中我们有两个属性(firstName和lastName)和一个函数(sayHello)。然后，只要你后面定义的模块通过ID来引用这个模块，你就可以使用其暴露的API。

使用require函数

在RequireJS中另外一个非常有用的函数是require函数。require函数用于加载模块依赖但并不会创建一个模块。例如：下面就是使用require定义了能够使用jQuery的一个函数。

```
require(['jquery'], function ($) {
    //jQuery was loaded and can be used now
});
```

小结

在这篇文章中我介绍了RequireJS库,它是我创建每个Javascript项目都会用到的库函数之一。它不仅仅用于加载模块依赖和相关的命令，RequireJS帮助我们写出模块化的JavaScript代码，这非常有利于代码的可扩展性和重用性。

本文地址：http://www.oschina.net/translate/getting-started-with-the-requirejs-library</br>
原文地址：http://www.codeproject.com/Articles/625262/Getting-Started-with-the-RequireJS-Library</br>
本文中的所有译文仅用于学习和交流目的，转载请务必注明文章译者、出处、和本文链接
我们的翻译工作遵照 CC 协议，如果我们的工作有侵犯到您的权益，请及时联系我们