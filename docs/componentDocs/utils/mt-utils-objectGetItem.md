# ObjectGetItem 根据传入的值，到传入的数据中获取对应的其他值

***

#

### 例子

```javascript
console.log(this.$mt.objectGetItem(1, 0, 'id', 'title')) // undefined



let obj = {
    green: "绿色",
    pink: "粉色",
    black: "黑色",
    blue: "蓝色"
};
console.log(this.$mt.objectGetItem(obj, '黑色')) // black



let eventStatusArr = [{
    id: "0",
    title: "未受理"
}, {
    id: "1",
    title: "受理中"
}, {
    id: "2",
    title: "已办结"
}, {
    id: "3",
    title: "拒绝受理"
}];
console.log(this.$mt.objectGetItem(eventStatusArr, 0, 'id', 'title')) // 未受理
```

### 源方法

```javascript
/**
 * @description 根据传入的值，到传入的数据中获取对应的其他值
 * @param {Array，Object} data: 传入的数据
 * @param {String} type 传入的值
 * @param {String} param Array: 传入的值属于哪个参数
 * @param {String} secondParam Array: 需要获取哪个参数
 */
objectGetItem(data, val, param, secondParam)
{
    if (this.isEmpty(data)) return;

    if (Object.prototype.toString.call(data) == '[object Array]') {
        let arrVal;
        data.map(v => {
            if (v[param] == val) {
                arrVal = v[secondParam];
            }
        })
        return arrVal;
    }

    if (Object.prototype.toString.call(data) == '[object Object]') {
        let objVal;
        Object.keys(data).forEach(v => {
            if (val == v) {
                objVal = data[v]
            } else if (val == data[v]) {
                objVal = v
            }
        })
        return objVal
    }
}
```
