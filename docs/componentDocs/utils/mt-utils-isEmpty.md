# IsEmpty 判空

***

#

### 例子

```javascript
let result = this.$mt.isEmpty({});

if (result) {
    console.log("当前值为空")
}
```

### 源方法

```javascript
/**
 * @description 判断值是否为空
 * @param {Null, Undefined, Number, Boolean, String, Array, Set, Map, File, Object} val: 需要判断的值
 */

isEmpty(val)
{
    switch (Object.prototype.toString.call(val)) {
        case "[object Null]":
        case "[object Undefined]":
            return true;

        case "[object Number]":
            return !val;

        case "[object Boolean]":
            return false;

        case "[object String]":
        case "[object Array]":
            return !val.length;

        case "[object Set]":
        case "[object Map]":
        case "[object File]":
            return !val.size;

        case "[object Object]":
            return !Object.keys(val).length;

        default:
            return false;
    }
}
```
