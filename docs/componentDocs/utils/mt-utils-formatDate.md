# FormatDate 格式化时间

***

#

### 例子

```javascript
// 按照特定格式 获取当前时间

let today = this.$mt.formatDate('', "YYYY-MM-DD");

console.log("今天的日期是：" + today);

```

```javascript
// 按照特定格式，格式化传入的时间

let newTime = this.$mt.formatDate('2022-10-18 10:10:10', "YYYY-MM-DD");

console.log('2022-10-18 10:10:10 格式化后的结果：' + newTime);
```

### 源方法

```javascript
/**
 * @description 格式化时间
 * @param {String} date: 默认当前时间
 * @param {String} format 默认'YYYY-MM-DD hh:mm:ss'
 */

formatDate(date, format = "YYYY-MM-DD hh:mm:ss") {
    date = date ? new Date(date) : new Date();
    let rules = {
        year: {
            value: date.getFullYear(), type: "(Y+)", attr: "i"
        }, month: {
            value: date.getMonth() + 1, type: "(M+)"
        }, day: {
            value: date.getDate(), type: "(D+)", attr: "i"
        }, hour: {
            value: date.getHours(), type: "(h+)", attr: "i"
        }, minute: {
            value: date.getMinutes(), type: "(m+)"
        }, second: {
            value: date.getSeconds(), type: "(s+)", attr: "i"
        }
    }

    function _formatType(key, value, type, attr, fmt) {
        function _initFmt(val) {
            return ("00" + val).substr(String(val).length)
        }

        if (new RegExp(type, attr).test(fmt)) {
            const fmtDate = key === "year" ? String(value).substr(4 - RegExp.$1.length) : (RegExp.$1.length === 1) ? value : _initFmt(value);
            fmt = fmt.replace(RegExp.$1, fmtDate)
        }
        return fmt
    }

    for (const key in rules) {
        format = _formatType(key, rules[key].value, rules[key].type, rules[key].attr, format);
    }

    return format
}
```
