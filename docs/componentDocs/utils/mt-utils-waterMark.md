# WaterMark 水印背景

***

#

### 例子

```javascript
// 水印方法中的参数有两种方式传入：

// 1. 在main.js中配置，然后直接调用方法  
this.$mt.waterMark();


// 2.通过参数传入方法
this.$mt.waterMark({
    textArr: ["参数传入"]
});
```

### 参数说明

| 参数         | 默认值               | 类型   | 说明                           | 是否必填 |
| ------------ | -------------------- | ------ | ------------------------------ | -------- |
| textArr      | `['mtui', 'uniapp']` | `Array`  | 需要展示的文字，多行就多个元素 | true     |
| font         | `15px '微软雅黑'`      | `String` | 字体样式                       | false    |
| fillStyle    | `rgba(100,47,47,0.1)`  | `String` | 描边样式                       | false    |
| maxWidth     | 200                  | `Number` | 文字水平时最大宽度             | false    |
| minWidth     | 120                  | `Number` | 文字水平时最小宽度             | false    |
| lineHeight   | 24                   | `Number` | 文字行高                       | false    |
| deg          | -30                  | `Number` | 旋转的角度 0至-90之间          | false    |
| marginRight  | 30                   | `Number` | 每个水印的右间隔               | false    |
| marginBottom | 50                   | `Number` | 每个水印的下间隔               | false    |
| left         | 20                   | `Number` | 整体背景距左边的距离           | false    |
| top          | 20                   | `Number` | 整体背景距上边的距离           | false         |

### 源方法

```javascript
waterMark(options) {
    var _this = this;
    _this.settings = Object.assign(_this.settings, options || {});
    _this.settings.minWidth = Math.min(_this.settings.maxWidth, _this.settings.minWidth); // 重置最小宽度
    var textArr = _this.settings.textArr;
    if (Object.prototype.toString.call(textArr) !== '[object Array]') {
        throw Error('水印文本必须放在数组中')
    }

    // 动态创建隐藏的canvas
    var c = _createCanvas();

    // 绘制canvas内容
    _draw(c, _this.settings);

    // 把canvas内容转为图片并绘制
    _convertCanvasToImage(c)

    function _createCanvas() {
        var c = document.createElement('canvas');
        c.style.display = 'none';
        document.body.appendChild(c);
        return c;
    }

    // 动态创建canvas
    function _draw(c, settings) {
        var ctx = c.getContext("2d");

        // 切割超过最大宽度的文本并获取最大宽度
        var textArr = settings.textArr || [];
        var wordBreakTextArr = [];
        var maxWidthArr = [];
        textArr.forEach(function (text) {
            var result = _breakLinesForCanvas(ctx, text + '', settings.maxWidth, settings.font);
            wordBreakTextArr = wordBreakTextArr.concat(result.textArr);
            maxWidthArr.push(result.maxWidth);
        })
        maxWidthArr.sort(function (a, b) {
            return b - a;
        });

        // 根据需要切割结果，动态改变canvas的宽和高
        var maxWidth = Math.max(maxWidthArr[0], _this.settings.minWidth);
        var lineHeight = settings.lineHeight;
        var height = wordBreakTextArr.length * lineHeight;
        var degToPI = Math.PI * settings.deg / 180;
        var absDeg = Math.abs(degToPI);
        // 根据旋转后的矩形计算最小画布的宽高
        var hSinDeg = height * Math.sin(absDeg);
        var hCosDeg = height * Math.cos(absDeg);
        var wSinDeg = maxWidth * Math.sin(absDeg);
        var wCosDeg = maxWidth * Math.cos(absDeg);

        c.width = parseInt(hSinDeg + wCosDeg + settings.marginRight);
        c.height = parseInt(wSinDeg + hCosDeg + settings.marginBottom);

        // 宽高重置后，样式也需重置
        ctx.font = settings.font;
        ctx.fillStyle = settings.fillStyle;
        ctx.textBaseline = 'hanging' // 默认是alphabetic,需改基准线为贴着线的方式

        // 移动并旋转画布
        ctx.translate(0, wSinDeg);
        ctx.rotate(degToPI);

        // 绘制文本
        wordBreakTextArr.forEach(function (text, index) {
            ctx.fillText(text, 0, lineHeight * index);
        });

        // 根据最大宽度切割文字
        function _breakLinesForCanvas(context, text, width, font) {
            var result = [];
            var maxWidth = 0; // 计算最大宽度
            if (font) {
                context.font = font;
            }
            var breakPoint = _findBreakPoint(text, width, context);
            while (breakPoint !== -1) {
                result.push(text.substr(0, breakPoint));
                text = text.substr(breakPoint);
                maxWidth = width;
                breakPoint = _findBreakPoint(text, width, context);
            }

            if (text) {
                result.push(text);
                var lastTextWidth = context.measureText(text).width;
                maxWidth = maxWidth !== 0 ? maxWidth : lastTextWidth;
            }

            return {
                textArr: result, maxWidth: maxWidth
            };


            // 寻找切换断点
            function _findBreakPoint(text, width, context) {
                var min = 0;
                var max = text.length - 1;
                while (min <= max) {
                    var middle = Math.floor((min + max) / 2);
                    var middleWidth = context.measureText(text.substr(0, middle)).width;
                    var oneCharWiderThanMiddleWidth = context.measureText(text.substr(0, middle + 1)).width;
                    if (middleWidth <= width && oneCharWiderThanMiddleWidth > width) {
                        return middle;
                    }
                    if (middleWidth < width) {
                        min = middle + 1;
                    } else {
                        max = middle - 1;
                    }
                }

                return -1;
            }
        }
    }

    // 将绘制好的canvas转成图片
    function _convertCanvasToImage(canvas) {
        var imgData = canvas.toDataURL("image/png");

        var divMask = document.createElement('div');
        divMask.style.cssText = 'position:fixed; left:0; top:0; right:0; bottom:0; z-index:9999; pointer-events:none;'
        divMask.style.backgroundImage = 'url(' + imgData + ')';
        divMask.style.backgroundPosition = _this.settings.left + 'px ' + _this.settings.top + 'px';

        document.body.appendChild(divMask);
    }
}
```
