# 日期选择器

***

#

[查看案例](https://static-363fc8f1-c547-4a87-8d04-6d5ba4035deb.bspapp.com/#/pages/popup/simpleDate)

```html
<!-- 基础用法 -->
<mt-button @click="openDate('normal')">基础用法</mt-button>

<simpleDate ref="normal" @submit="dateChange" @cancel="cancelEvent"></simpleDate>




<!-- 限定期限内 选择日期 -->
<mt-button @click="openDate('limit')">限定期限内 选择日期</mt-button>

<simpleDate ref="limit" 
             :startDate="start" 
             :endDate="end" 
             field="day" 
             
             @submit="dateChange"
             @cancel="cancelEvent"></simpleDate>
```

```javascript
// 除第一种引入方式，其他引入方式需要手动引入此组件
import simpleDate from "../../components/mt-form/item-date/simple-date.vue";

export default {
    components: {
        simpleDate
    }
}
```

```javascript
export default {
    data() {
        return {
            start: "2018/10/17",
            end: "2024/07/15",
        }
    },
    methods: {
        openDate(type) {
            this.$refs[type].open()
        },
        dateChange(e) {
            uni.showToast({
                title: e.total,
                icon: "none"
            })
        },
        cancelEvent() {
            uni.showToast({
                title: "点击了取消按钮",
                icon: "none"
            })
        }
    }
}
```

# Props

| 参数        | 默认值 | 类型                 | 说明             | 可选值                     | 是否必填 |
| ----------- | ------ |--------------------| ---------------- |-------------------------| -------- |
| startDate         | `1970-01-01 00:00:00`                           | `String`                  | 表示有效日期范围的开始，字符串格式为`YYYY-MM-DD hh:mm:ss`                                 | -                                             | false    |
| endDate           | `2099-12-31 23:59:59`                           | `String`                  | 表示有效日期范围的结束，字符串格式为`YYYY-MM-DD hh:mm:ss`                                  | -                                             | false    |
| field         | second                                        | `String`                  | 表示选择器的粒度                                                                 | `year` `month` `day` `hour` `minute` `second` | false    |

# Events

| 事件       | 说明        | 回调参数 |
| ---------- |-----------|------|
| submit   | 点击确定按钮时触发 | `{day:"02",hour:"14",minute:"41",month:"12",second:"43",total:"2022-12-02 14:41:43",year:"2022"}`   |
| cancel   | 点击取消按钮时触发 | -    |
