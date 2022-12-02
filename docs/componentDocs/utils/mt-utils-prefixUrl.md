# PrefixUrl 附件完善地址

***

#

### 例子

```javascript
let imgUrl = this.$mt.prefixUrl('default', "/upload/1230293.png");

console.log("图片完整地址：", imgUrl)
```

### 源方法

```javascript
/**
 * 附件地址完善
 * @param {String} type：接口前缀类型
 * @param {String} url：附件地址
 */

prefixUrl(type, url) {
    return this[type + 'Host'] + url
}
```
