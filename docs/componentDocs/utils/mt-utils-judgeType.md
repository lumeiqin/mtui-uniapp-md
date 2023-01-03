# JudgeType 判断值是否为指定的类型

***

#

### 例子

```javascript
let arr = [{
    id: 0,
    title: "first"
}, {
    id: 1,
    title: "second"
}]
console.log(this.$mt.judgeType(arr, 'object')) // false
console.log(this.$mt.judgeType(arr, 'array')) // true


console.log(this.$mt.judgeType('123', 'number')) // false
console.log(this.$mt.judgeType('123', 'string')) // true


let obj = {
    green: "绿色",
    pink: "粉色",
    black: "黑色",
    blue: "蓝色"
}
console.log(this.$mt.judgeType(obj, 'object')) // true
```

### 源方法

```javascript
/**
 * @description 判断值是否为指定的类型
 * @param {Null, Undefined, Number, Boolean, String, Array, Set, Map, File, Object} val: 需要判断的值
 * @param {String} type 指定的类型名称
 */
judgeType(val, type)
{
    let data = [{
        name: "array",
        condi: "[object Array]"
    }, {
        name: "null",
        condi: "[object Null]"
    }, {
        name: "undefined",
        condi: "[object Undefined]"
    }, {
        name: "number",
        condi: "[object Number]"
    }, {
        name: "boolean",
        condi: "[object Boolean]"
    }, {
        name: "string",
        condi: "[object String]"
    }, {
        name: "set",
        condi: "[object Set]"
    }, {
        name: "map",
        condi: "[object Map]"
    }, {
        name: "file",
        condi: "[object File]"
    }, {
        name: "object",
        condi: "[object Object]"
    }]

    let result = Object.prototype.toString.call(val);

    return type === this.objectGetItem(data, result, 'condi', 'name');
}
```
