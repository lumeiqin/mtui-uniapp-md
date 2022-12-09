# Search
***
#

[查看案例](https://static-363fc8f1-c547-4a87-8d04-6d5ba4035deb.bspapp.com/#/pages/base/search)

```html
<!-- 基础用法 -->
<mt-search @focus="focusEvent" @blur="blurEvent" @input="inputEvent"></mt-search>


<!-- 自定义参数 -->
<mt-search style="background: #fff;" :config="searchConfig"></mt-search>
```

```javascript
export default {
    data() {
        return {
            searchConfig: {
                padding: "20rpx 30rpx",
                radius: "60rpx",
                height: "68rpx",
                background: "#F6F6F6",
                iconSize: "32rpx",
                placeholder: "输入搜索内容",
                border: "none"
            },
        }
    },
    methods: {
        focusEvent(value) {
            console.log("获取焦点事件：" + value)
        },
        blurEvent(value) {
            console.log("失去焦点事件：" + value)
        },
        inputEvent(value) {
            console.log("输入事件：" + value)
        },
    }
}
```

# Props

| 参数       | 默认值   | 类型                 | 说明    | 可选值 | 是否必要  |
|----------|-------|--------------------|-------|-----|-------|
| value    | -     | `String`           | 搜索框内容 | -   | false |
| disabled | false | `Boolean` `String` | 禁用搜索框 | -   | false |
| config   | `{}`    | `Object`           | 自定义参数 | -   | false |

### config说明

| 参数             | 默认值            | 类型    | 说明                     | 可选值 |
| ---------------- | ----------------- | ------- | ------------------------ | ------ |
| padding          | `16rpx 30rpx`       | `String`  | 搜索框外框的padding      | -      |
| height           | 64rpx             | `String`  | 搜索框的高度             | -      |
| radius           | 32rpx             | `String`  | 搜索框的圆角             | -      |
| placeholder      | 请输入关键字      | `String`  | 搜索框的占位符           | -      |
| color            | `#4C4D4D`           | `String`  | 搜索框的value颜色        | -      |
| placeholderColor | `#B1B1B1`           | `String`  | 搜索框的占位符颜色       | -      |
| fontsize         | 28rpx             | `String`  | 搜索框的value字体大小    | -      |
| background       | `#F6F6F6`           | `String`  | 搜索框的背景             | -      |
| iconColor        | `#B1B1B1`           | `String`  | icon颜色                 | -      |
| iconSize         | 36rpx             | `String`  | icon大小                 | -      |
| showClear        | true              | `Boolean` | 是否显示清除icon         | -      |
| border           | `1px solid #F4F5F8` | `String`  | 搜索框外框的borderBottom | -       |

# Slots

| 插槽名 | 默认值 | 说明       |
| ------ | ------ | ---------- |
| left   | -      | 搜索框左侧 |
| right  | -      | 搜索框右侧 |

# Events

| 事件         | 说明                        | 回调参数 |
|------------|---------------------------| -------- |
| focus | 获取焦点时触发                   | `value`    |
| blur  | 失去焦点时触发                   | `value`    |
| input | 输入时触发，点击清除按钮时触发           | `value`         |
| click      | 禁用输入框时，点击输入框时触发 | `value`         |


