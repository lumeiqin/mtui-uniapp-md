# 列表选择器

***

#

[查看案例](https://static-363fc8f1-c547-4a87-8d04-6d5ba4035deb.bspapp.com/#/pages/popup/simpleList)

```html
<!-- 基础用法 -->
<mt-button @click="openSelector('normal')">基础用法</mt-button>

<simpleList ref="normal"
            :options="options"
            :valueShow="valueShow"
            :showValueDefault="showValueDefault"

            @submit="submitEvent"
            @cancel="cancelEvent"></simpleList>
```

```javascript
// 除第一种引入方式，其他引入方式需要手动引入此组件
import simpleList from "../../components/mt-form/item-list/simple-form-list";

export default {
    components: {
        simpleList
    }
}
```

```javascript
export default {
    data() {
        return {
            options: [
                {
                    "id": 0,
                    "value": "第一个哦",
                    "brief": "详情地址详情地址详情地址详情地址详情地址详情地址"
                },
                {
                    "id": 1,
                    "value": "第二个哦",
                    "brief": "详情地址详情地址详情地址详情地址详情地址详情地址"
                },
                {
                    "id": 2,
                    "value": "第三个哦",
                    "brief": "详情地址详情地址详情地址详情地址详情地址详情地址"
                },
                {
                    "id": 3,
                    "value": "第四个哦",
                    "brief": "详情地址详情地址详情地址详情地址详情地址详情地址"
                },
                {
                    "id": 4,
                    "value": "第五个哦",
                    "brief": "详情地址详情地址详情地址详情地址详情地址详情地址"
                }
            ],
            valueShow: '第一个哦',
            showValueDefault: {"key": "id", "value": "value", "brief": "brief"}
        }
    },
    methods: {
        openSelector(type) {
            this.$refs[type].open()
        },
        submitEvent(e) {
            uni.showToast({
                title: JSON.stringify(e),
                icon: "none"
            })
        },
        cancelEvent(e) {
            uni.showToast({
                title: "点击了取消按钮",
                icon: "none"
            })
        },
    }
}
```

# Props

| 参数        | 默认值                                          | 类型                      | 说明                                                                      | 可选值                     | 是否必填 |
| ----------- |----------------------------------------------|-------------------------|-------------------------------------------------------------------------|-------------------------| -------- |
| options       | -                                            | `Array＜Object＞` | 选择器选项                                                                   | -                                             | false    |
| valueShow | -                                            | `String`                | 初始显示值                                                                   | -                                             | false    |
| showValueDefault     | { `key: "id"`, `value: "value"`, `brief: ""` } | `Object`                | showValue 中 `value` 作为选择器显示内容，`key` 作为提交至后台的参数名字，`brief` 作为详情内容 | -                                             | false    |

# Events

| 事件       | 说明        | 回调参数 |
| ---------- |-----------|------|
| submit   | 点击确定按钮时触发 | {`id:"0"`,`value:"第一个哦"`,`allSelected: [{brief:"详情地址详情地址详情地址详情地址详情地址详情地址",id:1,value:"第二个哦"}]`}   |
| cancel   | 点击取消按钮时触发 | -    |
